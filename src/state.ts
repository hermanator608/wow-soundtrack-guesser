import { atom } from "recoil";
import { worldOfWarcraft } from "./config";

// TODO: Setup LS? Query Strings?

type Question = {
  answer: number;
  options: number[];
};

export function getNextQuestion(): Question {
  const options: number[] = [];
  while (options.length < 5) {
    const randomNum = Math.floor(Math.random() * worldOfWarcraft.length);
    if (!options.includes(randomNum)) {
      options.push(randomNum);
    }
  }

  const answer = Math.floor(Math.random() * options.length);

  console.log(options, options[answer]);

  return {
    answer: options[answer],
    options,
  };
}

export const videoShownState = atom({
  key: "videoShown",
  default: false,
});

export const currentQuestionState = atom({
  key: "currentQuestion",
  default: getNextQuestion(),
});
