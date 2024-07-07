import React, { useContext, useState, useEffect } from 'react';
import { GameContext } from './Context/GameContext';
import { areDigitsUnique, generateUniqueDigits, onlyDigits} from "./utils";

const PlayComponent = () => {
  const [allGuesses, setAllGuesses] = useState([]);

  const {
    level,
    guess,
    setGuess,
    bulls,
    setBulls,
    cows,
    setCows,
    message,
    setMessage,
    playAgain,
    handleGuess,
    onPlayAgain,
    guessAmount,
    counter,
    setCounter,
    secretNumber,
    name
  } = useContext(GameContext);

  useEffect(() => {
    if (allGuesses.length > 0 && counter === allGuesses.length) {
      const lastGuess = allGuesses[allGuesses.length - 1];
      setAllGuesses((prevGuesses) => {
        const updatedGuesses = [...prevGuesses];
        updatedGuesses[updatedGuesses.length - 1] = { ...lastGuess, bulls, cows };
        return updatedGuesses;
      });
    }
  }, [bulls, cows, counter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onlyDigits(guess)) {
      setMessage(`⛔ Numbers only! 🙎`);
    } else if (guess.length !== 4) {
      setMessage(`⛔ Please enter exactly 4 numbers! 🙎 🙎`);
    } else if (!areDigitsUnique(guess)) {
      setMessage(`⛔ No repeating numbers please 🙅`);
    } else {
      setCounter(counter + 1);
      handleGuess();

      setAllGuesses((prevGuesses) => [
        ...prevGuesses,
        { guess, bulls, cows }
      ]);

      setGuess("");
    }
  };

  return (
    <div className="play">
      <p>
        You’ve chosen level: {level}. You have {guessAmount} guesses. Good luck! 🍀
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          maxLength={4}
          
          disabled={playAgain || counter >= guessAmount}
        />
        <button type="submit" disabled={playAgain || counter >= guessAmount}>
  Submit Guess
</button>
      </form>
      <p>Your guesses:</p>
      <ul>
        {allGuesses.map((entry, index) => (
          <li key={index}>
            Guess: {entry.guess} - Bulls: {entry.bulls} 🐂, Cows: {entry.cows} 🐄
          </li>
        ))}
      </ul>
      <p>{message}</p>
      {playAgain && <button onClick={onPlayAgain}>Play Again</button>}
    </div>
  );
};

export default PlayComponent;