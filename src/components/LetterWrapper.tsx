import React from "react";
import { Letter } from "../types/Letter";

const LetterWrapper = ({ letter, yPos }: { letter: Letter; yPos: number }) => {
  const { innerWidth } = window;

  return (
    <div
      style={{
        position: "absolute",
        transform: `translate(${innerWidth - letter.offset}px, 0px)`,
        opacity: letter.disabled ? 0.2 : 1,
        color: getLetterColor(letter),
        // ...(getLetterColor(letter) === 'red' && { animation: 'wiggle 0.5s 1' }), WIP
      }}
    >
      {letter.letter}
      <span
        style={{
          height: "10px",
          width: "10px",
          backgroundColor: "red",
          transform: `translate(${innerWidth - letter.offset}px, 0px)`,
        }}
      ></span>
    </div>
  );
};

const getLetterColor = ({ color }: Letter): string => {
  switch (color) {
    case "success":
      return '#72ff11'
    case "failure":
      return 'red'
    default:
      return 'currentColor'
  }
}

export default LetterWrapper;
