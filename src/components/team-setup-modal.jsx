"use client"

import { useState } from "react"
import "../styles/team-setup-modal.css"

export default function TeamSetupModal({ onSubmit }) {
  const [teams, setTeams] = useState([
    { id: "team1", name: "Équipe 1" },
    { id: "team2", name: "Équipe 2" },
  ])

  const handleAddTeam = () => {
    const newTeamId = `team${teams.length + 1}`
    setTeams([...teams, { id: newTeamId, name: `Équipe ${teams.length + 1}` }])
  }

  const handleRemoveTeam = (teamId) => {
    if (teams.length <= 1) return
    setTeams(teams.filter((team) => team.id !== teamId))
  }

  const handleTeamNameChange = (teamId, newName) => {
    setTeams(teams.map((team) => (team.id === teamId ? { ...team, name: newName } : team)))
  }

  const handleSubmit = () => {
    onSubmit(teams)
  }

  return (
    <div className="modal-overlay">
      <div className="modal team-setup-modal">
        <div className="modal-header">
          <h2>Configuration des Équipes</h2>
          <p>Définissez les équipes qui vont participer au quiz</p>
        </div>

        <div className="modal-content">
          <div className="team-setup">
            <div className="teams-list">
              {teams.map((team) => (
                <div key={team.id} className="team-item">
                  <input
                    type="text"
                    value={team.name}
                    onChange={(e) => handleTeamNameChange(team.id, e.target.value)}
                    placeholder="Nom de l'équipe"
                  />
                  <button
                    onClick={() => handleRemoveTeam(team.id)}
                    disabled={teams.length <= 1}
                    className="remove-team"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <button className="add-team-button" onClick={handleAddTeam}>
              + Ajouter une équipe
            </button>
          </div>
        </div>

        <div className="modal-footer">
          <button className="accent" onClick={handleSubmit}>
            Commencer le Quiz
          </button>
        </div>
      </div>
    </div>
  )
}
