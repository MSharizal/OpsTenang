import React, { useState, useEffect } from 'react';

const AsciiArt = () => {
  const asciiArtSamples = [
    `
    | ☯ ⊕ |
    |ETERNAL|
    `,
    `
    |(  (
    /\\  /\\
    AI ~ Recursive Truths
    `
  ];

  const [asciiArt, setAsciiArt] = useState(asciiArtSamples[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextArt = asciiArtSamples[Math.floor(Math.random() * asciiArtSamples.length)];
      setAsciiArt(nextArt);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return <pre style={{ color: 'cyan' }}>{asciiArt}</pre>;
};

export default AsciiArt;  // Make sure this line exists!