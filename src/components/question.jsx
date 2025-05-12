"use client";

import { useState, useRef } from "react";
import "../styles/question.css";

// Placeholder pour les informations audio
const audioPlaceholders = {
  song1: { artist: "Artist 1", title: "Song Title 1", duration: "3:45" },
  song2: { artist: "Artist 2", title: "Song Title 2", duration: "4:12" },
  song3: { artist: "Artist 3", title: "Song Title 3", duration: "2:58" },
  // Ajouter plus de chansons selon vos besoins
};

export default function Question({
  questionData,
  showCorrectAnswer,
  currentRound,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Extraire les informations audio si nécessaire
  const getAudioInfo = () => {
    if (questionData.type === "audio" && questionData.audioUrl) {
      // Extraire le numéro de la chanson pour les placeholders
      const match = questionData.audioUrl.match(/song(\d+)/);
      if (match && match[1]) {
        const songNumber = match[1];
        return audioPlaceholders[`song${songNumber}`];
      }
    }
    return null;
  };

  const audioInfo = getAudioInfo();

  const getOptionClass = (optionId) => {
    if (!showCorrectAnswer) {
      return "option";
    }

    if (optionId === questionData.correctAnswer) {
      return "option correct";
    }

    return "option";
  };

  return (
    <div className="question-card">
      <div className="question-header">
        <h2 className="question-text">{questionData.question}</h2>
      </div>

      <div className="question-content">
        {questionData.type === "audio" && (
          <div className="audio-player">
            <audio
              ref={audioRef}
              src={questionData.audioUrl}
              onEnded={() => setIsPlaying(false)}
            />

            <div className="audio-visualization">
              <div className={`audio-bars ${isPlaying ? "playing" : ""}`}>
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="audio-bar"></div>
                ))}
              </div>
            </div>

            <div className="audio-controls">
              <button onClick={handlePlayPause} className="play-button">
                {isPlaying ? (
                  <span className="pause-icon">❚❚</span>
                ) : (
                  <span className="play-icon">▶</span>
                )}
              </button>
            </div>

            <div className="audio-info">
              {showCorrectAnswer && audioInfo && (
                <p>
                  {audioInfo.artist} - {audioInfo.title} ({audioInfo.duration})
                </p>
              )}
            </div>
          </div>
        )}

        {questionData.type === "image" && (
          <div className="image-container">
            <img
              src={questionData.imageUrl || "/placeholder.svg"}
              alt="Question"
              className="question-image"
            />
          </div>
        )}
      </div>

      <div className="options-grid">
        {questionData.options.map((option) => (
          <div key={option.id} className={getOptionClass(option.id)}>
            <div className="option-letter">{option.id.toUpperCase()}</div>
            <div className="option-text">{option.text}</div>
          </div>
        ))}
      </div>

      {showCorrectAnswer && (
        <div className="feedback correct">
          <div className="feedback-badge">
            <span className="feedback-icon">✓</span>
          </div>
          <div className="feedback-content">
            <h3>
              Réponse :{" "}
              {
                questionData.options.find(
                  (opt) => opt.id === questionData.correctAnswer
                )?.text
              }
            </h3>
            <p>{questionData.explanation}</p>
          </div>
        </div>
      )}

      <div className="points-indicator">
        <div className="points-value">{currentRound.pointsPerQuestion}</div>
        <div className="points-label">points</div>
      </div>
    </div>
  );
}
