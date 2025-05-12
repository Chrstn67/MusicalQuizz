"use client"

import { useState, useEffect } from "react"
import "../styles/score-board.css"

export default function ScoreBoard({ teams, scores }) {
  const [animatedScores, setAnimatedScores] = useState({})
  const [flippedTeams, setFlippedTeams] = useState({})

  // Effet pour animer les scores lorsqu'ils changent
  useEffect(() => {
    // Initialiser les scores animés si nécessaire
    if (Object.keys(animatedScores).length === 0 && Object.keys(scores).length > 0) {
      setAnimatedScores({ ...scores })
      return
    }

    // Animer les scores qui ont changé
    const newAnimatedScores = { ...animatedScores }
    let hasChanges = false
    const newFlippedTeams = { ...flippedTeams }

    Object.keys(scores).forEach((teamId) => {
      if (scores[teamId] !== animatedScores[teamId]) {
        hasChanges = true
        // Marquer l'équipe pour l'animation de flip
        newFlippedTeams[teamId] = true

        // Incrémenter progressivement le score animé
        if (animatedScores[teamId] < scores[teamId]) {
          newAnimatedScores[teamId] = animatedScores[teamId] + 1
        }
      }
    })

    if (hasChanges) {
      const timer = setTimeout(() => {
        setAnimatedScores(newAnimatedScores)
      }, 50)

      // Réinitialiser l'état de flip après l'animation
      setTimeout(() => {
        setFlippedTeams({})
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [scores, animatedScores, flippedTeams])

  // Trier les équipes par score
  const sortedTeams = [...teams].sort((a, b) => (scores[b.id] || 0) - (scores[a.id] || 0))

  // Déterminer l'équipe en tête
  const leadingTeamId = sortedTeams.length > 0 ? sortedTeams[0].id : null

  return (
    <div className="scoreboard">
      <div className="stage-lights"></div>

      <div className="scoreboard-title">
        <div className="microphone-icon">🎤</div>
        <h3>Scores</h3>
      </div>

      <div className="team-scores">
        {sortedTeams.map((team) => (
          <div
            key={team.id}
            className={`team-score ${team.id === leadingTeamId ? "leading" : ""} ${
              flippedTeams[team.id] ? "flip" : ""
            }`}
          >
            <div className="team-score-inner">
              <div className="team-score-front">
                {team.id === leadingTeamId && <div className="crown">👑</div>}

                <div className="chair-container">
                  <div className="chair">
                    <div className="chair-back"></div>
                    <div className="chair-seat"></div>
                    <div className="chair-leg"></div>
                  </div>
                </div>

                <div className="team-info">
                  <span className="team-name">{team.name}</span>
                  <div className="score-container">
                    <span className="score">{animatedScores[team.id] || 0}</span>
                  </div>
                </div>

                {team.id === leadingTeamId && (
                  <div className="sound-wave">
                    <div className="sound-bar"></div>
                    <div className="sound-bar"></div>
                    <div className="sound-bar"></div>
                    <div className="sound-bar"></div>
                    <div className="sound-bar"></div>
                    <div className="sound-bar"></div>
                    <div className="sound-bar"></div>
                    <div className="sound-bar"></div>
                    <div className="sound-bar"></div>
                  </div>
                )}
              </div>

              <div className="team-score-back">
                <span className="score-back">{animatedScores[team.id] || 0}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
