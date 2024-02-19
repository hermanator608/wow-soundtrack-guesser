import { atom } from "recoil";
import { worldOfWarcraft } from "./config";


type Question = {
  answerName: string;
  answerIndex: number
};

export function getNextQuestion(): Question {
  const answerIndex = Math.floor(Math.random() * worldOfWarcraft.length);
  let answerName = worldOfWarcraft[answerIndex].name;

  return {
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
