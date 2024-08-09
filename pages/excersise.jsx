import React, { useState, useEffect } from 'react';
import MainContainer from './MainContainer';

export default function Excersise() {
  const [randomNumber1, setRandomNumber1] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(0);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    setRandomNumber1(getRandomInt(100));
    setRandomNumber2(getRandomInt(50));
  }, []);

  return (
    <MainContainer>
      <div>Random Number 1 (0-99): {randomNumber1}</div>
      <div>Random Number 2 (0-49): {randomNumber2}</div>
    </MainContainer>
  );
}
