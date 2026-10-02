import React from 'react'
import { useState, useEffect } from 'react'
import styles from './Game.module.css'

const HANDS = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️",
}

function Game() {
    const [returnValue, setReturnValue] = useState("")
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [playerCount, setPlayerCount] = useState(0);
    const [computerCount, setComputerCount] = useState(0);
    const computer = ["rock", "paper", "scissors"];

    const handlerPlayerChoice = (choice) => {
        setPlayerChoice(choice);
        const ComputerPlayerChoice = computer[Math.floor(Math.random() * computer.length)]
        setComputerChoice(ComputerPlayerChoice);

        if (playerChoice === computerChoice) {
            setReturnValue("It's a tie!")
        } else if (playerChoice === "rock" && computerChoice === "scissors"
            || playerChoice === "paper" && computerChoice === "rock"
            || playerChoice === "scissors" && computerChoice === "paper") {
            setReturnValue("Player Wins!")
            setPlayerCount(playerCount + 1)
            setCount(count - 1);
        } else {
            setReturnValue("Computer Wins!")
            setComputerCount(computerCount + 1)
            setCount(count - 1);
        }
    }

    // design only: picks a color/animation class from the result text
    const resultClass =
        returnValue === "Player Wins!" ? styles.win
            : returnValue === "Computer Wins!" ? styles.lose
                : returnValue ? styles.tie
                    : "";

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <h1 className={styles.title}>Rock Paper Scissors Game</h1>

                <div className={styles.arena}>
                    <div className={styles.side}>
                        {playerChoice
                            ? <span key={playerChoice + playerCount + computerCount} className={styles.hand}>{HANDS[playerChoice]}</span>
                            : <span className={styles.handIdle}>✊</span>}
                        <span className={styles.label}>You</span>
                    </div>

                    <span className={styles.vs}>VS</span>

                    <div className={styles.side}>
                        {computerChoice
                            ? <span key={computerChoice + playerCount + computerCount} className={styles.handComputer}>{HANDS[computerChoice]}</span>
                            : <span className={styles.handIdleFlip}>✊</span>}
                        <span className={styles.label}>Computer</span>
                    </div>
                </div>

                <p key={returnValue + playerCount + computerCount} className={`${styles.result} ${resultClass}`}>{returnValue}</p>

                <div className={styles.buttons}>
                    <button className={styles.btn} onClick={() => handlerPlayerChoice("rock")}>
                        <span className={styles.btnEmoji}>✊</span>Rock
                    </button>
                    <button className={styles.btn} onClick={() => handlerPlayerChoice("paper")}>
                        <span className={styles.btnEmoji}>✋</span>Paper
                    </button>
                    <button className={styles.btn} onClick={() => handlerPlayerChoice("scissors")}>
                        <span className={styles.btnEmoji}>✌️</span>Scissors
                    </button>
                </div>

                <div className={styles.scores}>
                    <div className={styles.score}><h2>Player Count: {playerCount}</h2></div>
                    <div className={styles.score}><h2>Computer Count:{computerCount}</h2></div>
                </div>
            </div>
        </div>
    );
}

export default Game;
