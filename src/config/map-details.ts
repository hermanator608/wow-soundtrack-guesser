import { MapDetails } from './types'
import AzerothImg from "../images/wow-map-min.jpg"
import AllWorldsImg from "../images/all-worlds.png"

export const AllWorlds: MapDetails = {
  name: "AllWorlds",
  img: AllWorldsImg,
  areas: [
    { id: "shadowlands", shape: "circle", coords: [160, 152, 100], preFillColor: "transparent", fillColor: "red" },
    { id: "outland", shape: "circle", coords: [185, 448, 100], preFillColor: "transparent", fillColor: "red" },
    { id: "azeroth", shape: "circle", coords: [460, 300, 145], preFillColor: "transparent", fillColor: "red" },
    { id: "draenor", shape: "circle", coords: [750, 360, 100], preFillColor: "transparent", fillColor: "red" },
  ]
};

export const azeroth: MapDetails = {
  name: "azeroth",
  img: AzerothImg,
  areas: [
    { id: "kalimdor", shape: "circle", coords: [230, 340, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "eastern-kingdoms", shape: "circle", coords: [790, 340, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "zandalar", shape: "circle", coords: [490, 370, 40], preFillColor: "transparent", fillColor: "blue" },
    { id: "kul-tiras", shape: "circle", coords: [640, 300, 40], preFillColor: "transparent", fillColor: "blue" },
    { id: "broken-isles", shape: "circle", coords: [530, 240, 40], preFillColor: "transparent", fillColor: "blue" },
    { id: "northrend", shape: "circle", coords: [450, 80, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "pandaria", shape: "circle", coords: [430, 490, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "deepholm", shape: "circle", coords: [415, 287, 40], preFillColor: "transparent", fillColor: "blue" },
    { id: "dragon-isles", shape: "circle", coords: [695, 135, 40], preFillColor: "transparent", fillColor: "blue" }
  ]
};

export const IdToMapObject: { [key: string]: MapDetails } = {
  azeroth: azeroth
}