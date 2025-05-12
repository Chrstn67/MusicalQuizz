"use client"

import "../styles/rules-modal.css"

export default function RulesModal({ rules, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal rules-modal">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <h2>Règles du Jeu</h2>
        </div>

        <div className="modal-content">
          <ul className="rules-list">
            {rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>

        <div className="modal-footer">
          <button onClick={onClose}>Fermer</button>
        </div>
      </div>
    </div>
  )
}
