import "../styles/progress-bar.css"

export default function ProgressBar({ progress, currentQuestion, totalQuestions }) {
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
      <div className="progress-indicator" style={{ left: `${progress}%` }}>
        {currentQuestion}/{totalQuestions}
      </div>
    </div>
  )
}
