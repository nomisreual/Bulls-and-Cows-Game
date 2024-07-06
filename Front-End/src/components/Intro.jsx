import React, { useState } from "react";
import bullsAndCowsImage from '../../public/images/bulls_and_cows.png';

const Intro = ({ playerName }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    playerName(name);
  };

  return (
    <>
<img src={bullsAndCowsImage} alt="bulls And Cows Welcome" />
    <form onSubmit={handleSubmit}>
      <label>
        What is your name?{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Start Game</button>
    </form>
    </>
  );
};

export default Intro;
