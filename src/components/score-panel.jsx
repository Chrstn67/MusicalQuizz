"use client";
import "../styles/score-panel.css";

export default function ScorePanel({
  teams,
  scores,
  onAddPoints,
  currentRoundPoints,
}) {
  // Trier les équipes par score
  const sortedTeams = [...teams].sort((a, b) => scores[b.id] - scores[a.id]);

  // Trouver l'équipe gagnante (celle avec le score le plus élevé)
  const leadingTeamId = sortedTeams.length > 0 ? sortedTeams[0].id : null;

  return (
    <div className="score-panel">
      <div className="score-panel-header">
        <h3>Tableau des Scores</h3>
      </div>

      <div className="score-panel-content">
        {sortedTeams.map((team) => (
          <div
            key={team.id}
            className={`team-score-item ${
              team.id === leadingTeamId ? "leading" : ""
            }`}
          >
            <div className="team-info">
              <div className="team-score-name">{team.name}</div>
              <div className="team-score-controls">
                <button
                  onClick={() => onAddPoints(team.id, -currentRoundPoints)}
                  className="score-btn minus"
                >
                  -
                </button>
                <div className="team-score-value">{scores[team.id]}</div>
                <button
                  onClick={() => onAddPoints(team.id, currentRoundPoints)}
                  className="score-btn plus"
                >
                  +
                </button>
              </div>
            </div>

            {team.id === leadingTeamId && (
              <div className="leader-crown">👑</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
