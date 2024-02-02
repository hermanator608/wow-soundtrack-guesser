import { atom } from "recoil";
import { worldOfWarcraft } from "./config";

// TODO: Setup LS? Query Strings?

type Question = {
  //answer: number;
  //options: number[];
  answerName: string;
  answerIndex: number
};

export function getNextQuestion(): Question {
  //const options: number[] = [];
  // while (options.length < 5) {
  //   const randomNum = Math.floor(Math.random() * worldOfWarcraft.length);
  //   if (!options.includes(randomNum)) {
  //     options.push(randomNum);
  //   }
  // }
  //const answer = Math.floor(Math.random() * options.length);

  const answerIndex = Math.floor(Math.random() * worldOfWarcraft.length);
  let answerName = worldOfWarcraft[answerIndex].name;
  console.log(answerName);

  return {
    //answer: options[answer],
    //options,
    answerIndex,
    answerName

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
