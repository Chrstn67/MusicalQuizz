"use client"

import "../styles/results.css"

export default function Results({ teams, scores, onRestart }) {
  // Trouver l'équipe gagnante (celle avec le score le plus élevé)
  const getWinningTeam = () => {
    let winningTeamId = null
    let highestScore = -1

    Object.entries(scores).forEach(([teamId, score]) => {
      if (score > highestScore) {
        highestScore = score
        winningTeamId = teamId
      }
    })

    return winningTeamId
  }

  const winningTeamId = getWinningTeam()

  // Trier les équipes par score (du plus élevé au plus bas)
  const sortedTeams = [...teams].sort((a, b) => scores[b.id] - scores[a.id])

  return (
    <div className="results">
      <h2>Résultats Finaux</h2>

      <div className="final-scores">
        {sortedTeams.map((team, index) => (
          <div
            key={team.id}
            className={`team-score ${team.id === winningTeamId ? "winner" : ""} ${index === 0 ? "first-place" : index === 1 ? "second-place" : "other-place"}`}
          >
            <div className="position">{index + 1}</div>
            <div className="team-name">{team.name}</div>
            <div className="score">{scores[team.id]} points</div>
            {team.id === winningTeamId && <div className="trophy">🏆</div>}
          </div>
        ))}
      </div>

      <button className="restart-button" onClick={onRestart}>
        Nouvelle Partie
      </button>
    </div>
  )
}
