"use client";

import { useState } from "react";
import "../styles/scoreboard-modal.css";

export default function ScoreboardModal({
  teams,
  scores,
  onClose,
  onAddPoints,
  currentRoundPoints,
}) {
  const [localScores, setLocalScores] = useState(scores);

  // Trier les équipes par score
  const sortedTeams = [...teams].sort(
    (a, b) => localScores[b.id] - localScores[a.id]
  );

  // Trouver l'équipe gagnante (celle avec le score le plus élevé)
  const leadingTeamId = sortedTeams.length > 0 ? sortedTeams[0].id : null;

  const handleScoreChange = (teamId, value) => {
    const newScore = Math.max(0, Number.parseInt(value) || 0);
    setLocalScores((prev) => ({
      ...prev,
      [teamId]: newScore,
    }));
  };

  const handleSaveScores = () => {
    // Pour chaque équipe, mettre à jour le score global
    teams.forEach((team) => {
      const scoreDiff = localScores[team.id] - scores[team.id];
      if (scoreDiff !== 0) {
        onAddPoints(team.id, scoreDiff);
      }
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal scoreboard-modal">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <div className="logo-container">
            <div className="mini-logo">
              <span>Musical Quizz</span>
            </div>
          </div>
          <h2>Tableau des Scores</h2>
        </div>

        <div className="modal-content">
          <div className="team-scores-grid">
            {sortedTeams.map((team) => (
              <div
                key={team.id}
                className={`team-score-card ${
                  team.id === leadingTeamId ? "leading" : ""
                }`}
              >
                <div className="team-info">
                  <div className="team-name-container">
                    {team.id === leadingTeamId && (
                      <div className="crown">👑</div>
                    )}
                    <h3>{team.name}</h3>
                  </div>

                  <div className="score-editor">
                    <div className="score-input-container">
                      <input
                        type="number"
                        min="0"
                        value={localScores[team.id]}
                        onChange={(e) =>
                          handleScoreChange(team.id, e.target.value)
                        }
                        className="score-input"
                      />
                    </div>

                    <div className="quick-buttons">
                      <button
                        onClick={() =>
                          handleScoreChange(
                            team.id,
                            localScores[team.id] - currentRoundPoints
                          )
                        }
                        className="quick-button minus"
                      >
                        -{currentRoundPoints}
                      </button>
                      <button
                        onClick={() =>
                          handleScoreChange(
                            team.id,
                            localScores[team.id] + currentRoundPoints
                          )
                        }
                        className="quick-button plus"
                      >
                        +{currentRoundPoints}
                      </button>
                    </div>
                  </div>
                </div>

                {team.id === leadingTeamId && (
                  <div className="sound-wave">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="sound-bar"></div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={handleSaveScores} className="save-button">
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
}
