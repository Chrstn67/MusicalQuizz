"use client";

import { useState, useEffect } from "react";
import { quizData } from "../lib/data";
import Question from "./question";
import ProgressBar from "./progress-bar";
import Results from "./results";
import MusicNotes from "./music-notes";
import TeamSetupModal from "./team-setup-modal";
import RulesModal from "./rules-modal";
import ScorePanel from "./score-panel";
import "../styles/quiz-container.css";

export default function QuizContainer() {
  const [showTeamSetupModal, setShowTeamSetupModal] = useState(true);
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [showScorePanel, setShowScorePanel] = useState(false);
  const [teams, setTeams] = useState([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [scores, setScores] = useState({});
  const [randomizedQuestions, setRandomizedQuestions] = useState([]);

  // Fonction pour mélanger un tableau (algorithme de Fisher-Yates)
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Initialiser les scores et randomiser les questions
  useEffect(() => {
    if (teams.length > 0) {
      const initialScores = {};
      teams.forEach((team) => {
        initialScores[team.id] = 0;
      });
      setScores(initialScores);

      // Randomiser les questions pour chaque manche
      const randomizedRounds = quizData.rounds.map((round) => {
        // S'assurer qu'il y a 20 questions par manche
        let questions = [...round.questions];

        // Si moins de 20 questions, dupliquer certaines questions
        while (questions.length < 20) {
          questions = [
            ...questions,
            ...questions.slice(0, 20 - questions.length),
          ];
        }

        // Si plus de 20 questions, prendre seulement les 20 premières
        if (questions.length > 20) {
          questions = questions.slice(0, 20);
        }

        return {
          ...round,
          questions: shuffleArray(questions),
        };
      });

      setRandomizedQuestions(randomizedRounds);
    }
  }, [teams]);

  const handleTeamsSubmit = (newTeams) => {
    setTeams(newTeams);
    setShowTeamSetupModal(false);
    setShowRulesModal(true);
  };

  const handleShowCorrectAnswer = () => {
    setShowCorrectAnswer(true);
  };

  const handleNext = () => {
    setShowCorrectAnswer(false);

    const currentRoundData =
      randomizedQuestions.length > 0
        ? randomizedQuestions[currentRound]
        : quizData.rounds[currentRound];

    if (currentQuestion < currentRoundData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (
      currentRound <
      (randomizedQuestions.length > 0
        ? randomizedQuestions.length
        : quizData.rounds.length) -
        1
    ) {
      // Passer à la manche suivante
      setCurrentRound(currentRound + 1);
      setCurrentQuestion(0);
    } else {
      // Fin du quiz
      setShowResults(true);
    }
  };

  const handleAddPoints = (teamId, points) => {
    setScores((prevScores) => ({
      ...prevScores,
      [teamId]: Math.max(0, prevScores[teamId] + points),
    }));
  };

  const handleRestart = () => {
    setCurrentRound(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setShowCorrectAnswer(false);

    // Réinitialiser les scores
    const initialScores = {};
    teams.forEach((team) => {
      initialScores[team.id] = 0;
    });
    setScores(initialScores);

    // Revenir à la configuration des équipes
    setShowTeamSetupModal(true);
  };

  const handleShowRules = () => {
    setShowRulesModal(true);
  };

  const handleToggleScorePanel = () => {
    setShowScorePanel(!showScorePanel);
  };

  // Si la configuration des équipes n'est pas terminée, afficher uniquement la modale
  if (showTeamSetupModal) {
    return <TeamSetupModal onSubmit={handleTeamsSubmit} />;
  }

  // Si on affiche les résultats
  if (showResults) {
    return (
      <div className="quiz-container">
        <MusicNotes />
        <div className="header">
          <div className="logo-container">
            <span className="logo-text">Musical Quizz</span>
          </div>
          <div className="logo-microphone"></div>
        </div>
        <p>{quizData.description}</p>

        <Results teams={teams} scores={scores} onRestart={handleRestart} />
      </div>
    );
  }

  // Calculer la progression
  const currentRoundData =
    randomizedQuestions.length > 0
      ? randomizedQuestions[currentRound]
      : quizData.rounds[currentRound];

  const totalQuestions =
    randomizedQuestions.length > 0
      ? randomizedQuestions.reduce(
          (total, round) => total + round.questions.length,
          0
        )
      : quizData.rounds.reduce(
          (total, round) => total + round.questions.length,
          0
        );

  const questionsCompleted =
    randomizedQuestions.length > 0
      ? randomizedQuestions
          .slice(0, currentRound)
          .reduce((total, round) => total + round.questions.length, 0) +
        currentQuestion +
        1
      : quizData.rounds
          .slice(0, currentRound)
          .reduce((total, round) => total + round.questions.length, 0) +
        currentQuestion +
        1;

  const progress = (questionsCompleted / totalQuestions) * 100;

  // Calculer le nombre de questions restantes dans la manche actuelle
  const questionsRemainingInRound =
    currentRoundData.questions.length - currentQuestion - 1;

  const currentQuestionData = currentRoundData.questions[currentQuestion];

  return (
    <div className="quiz-container">
      {/* Effet de scène */}
      <div className="stage-effect">
        <div className="spotlight"></div>
        <div className="stage-light red"></div>
        <div className="stage-light gold"></div>
      </div>

      <MusicNotes />

      {showRulesModal && (
        <RulesModal
          rules={quizData.rules}
          onClose={() => setShowRulesModal(false)}
        />
      )}

      <div className="header">
        <div className="the-voice-logo">
          <div className="logo-container">
            <span className="logo-text">MUSICAL QUIZZ</span>
          </div>
          <div className="logo-microphone"></div>
        </div>
        <p>{quizData.description}</p>
      </div>

      <div className="controls-bar">
        <div className="controls-left">
          <button
            onClick={handleShowRules}
            className="controls-button rules-button"
          >
            Règles
          </button>
          <button
            onClick={handleToggleScorePanel}
            className={`controls-button scoreboard-button ${
              showScorePanel ? "active" : ""
            }`}
          >
            {showScorePanel ? "Masquer scores" : "Voir scores"}
          </button>
        </div>

        <div className="round-info">
          <div className="round-info-content">
            <h2 className="round-name">{currentRoundData.name}</h2>
            <div className="round-details">
              <div
                className={`difficulty ${
                  currentRoundData.difficulty === "Facile"
                    ? "easy"
                    : currentRoundData.difficulty === "Intermédiaire"
                    ? "medium"
                    : "hard"
                }`}
              >
                {currentRoundData.difficulty}
              </div>
              <div className="points-info">
                {currentRoundData.pointsPerQuestion} point
                {currentRoundData.pointsPerQuestion > 1 ? "s" : ""} par bonne
                réponse
              </div>
              <div className="questions-remaining">
                <span className="questions-remaining-icon">🎯</span>
                <span>
                  <span className="questions-remaining-count">
                    {questionsRemainingInRound}
                  </span>{" "}
                  question
                  {questionsRemainingInRound > 1 ? "s" : ""} restante
                  {questionsRemainingInRound > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showScorePanel && (
        <ScorePanel
          teams={teams}
          scores={scores}
          onAddPoints={handleAddPoints}
          currentRoundPoints={currentRoundData.pointsPerQuestion}
        />
      )}

      <ProgressBar
        progress={progress}
        currentQuestion={questionsCompleted}
        totalQuestions={totalQuestions}
      />

      <Question
        questionData={currentQuestionData}
        showCorrectAnswer={showCorrectAnswer}
        currentRound={currentRoundData}
      />

      <div className="navigation">
        {!showCorrectAnswer ? (
          <button
            onClick={handleShowCorrectAnswer}
            className="show-answer-button"
          >
            Afficher la réponse
          </button>
        ) : (
          <button onClick={handleNext} className="next-button">
            Question Suivante
          </button>
        )}
      </div>
    </div>
  );
}
