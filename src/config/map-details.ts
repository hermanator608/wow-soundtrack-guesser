import { MapDetails } from './types'
import AzerothImg from "../images/wow-map-min.jpg"
import AllWorldsImg from "../images/all-worlds.png"
import brokenIslesImg from "../images/broken-isles.png"
import maelstromImg from "../images/maelstrom.png"
import dragonIslesImg from "../images/dragon-isles.png"
import easternKingdomsImg from "../images/eastern-kingdoms.png"
import kalimdorImg from "../images/kalimdor.png"
import kulTirasImg from "../images/kul-tiras.png"

export const AllWorlds: MapDetails = {
  name: "AllWorlds",
  img: AllWorldsImg,
  areas: [
    { id: "Shadowlands", shape: "circle", coords: [160, 152, 100], preFillColor: "transparent", fillColor: "red" },
    { id: "Outland", shape: "circle", coords: [185, 448, 100], preFillColor: "transparent", fillColor: "red" },
    { id: "Azeroth", shape: "circle", coords: [460, 300, 145], preFillColor: "transparent", fillColor: "red" },
    { id: "Draenor", shape: "circle", coords: [750, 360, 100], preFillColor: "transparent", fillColor: "red" },
  ]
};

export const azeroth: MapDetails = {
  name: "Azeroth",
  img: AzerothImg,
  areas: [
    { id: "Kalimdor", shape: "circle", coords: [230, 340, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "Eastern Kingdoms", shape: "circle", coords: [790, 340, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "Zandalar", shape: "circle", coords: [490, 370, 40], preFillColor: "transparent", fillColor: "blue" },
    { id: "Kul Tiras", shape: "circle", coords: [640, 300, 40], preFillColor: "transparent", fillColor: "blue" },
    { id: "The Broken Isles", shape: "circle", coords: [530, 240, 40], preFillColor: "transparent", fillColor: "blue" },
    { id: "Northrend", shape: "circle", coords: [450, 80, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "Pandaria", shape: "circle", coords: [430, 490, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "The Maelstrom", shape: "circle", coords: [415, 287, 40], preFillColor: "transparent", fillColor: "blue" },
    { id: "The Dragon Isles", shape: "circle", coords: [695, 135, 40], preFillColor: "transparent", fillColor: "blue" }
  ]
};

export const brokenIsles: MapDetails = {
  name: "brokenIsles",
  img: brokenIslesImg,
  areas: [
    { id: "Argus", shape: "circle", coords: [790, 100, 110], preFillColor: "transparent", fillColor: "blue" },
    { id: "Highmountain", shape: "circle", coords: [420, 120, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "Val'sharah", shape: "circle", coords: [310, 200, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "Stormheim", shape: "circle", coords: [530, 210, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "Suramar", shape: "circle", coords: [425, 290, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "Azsuna", shape: "circle", coords: [310, 340, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "The Broken Shore", shape: "circle", coords: [510, 390, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "Dalaran - Legion", shape: "circle", coords: [410, 400, 30], preFillColor: "transparent", fillColor: "blue" },
  ]
}

export const maelstrom: MapDetails = {
  name: "The Maelstrom",
  img: maelstromImg,
  areas: [
    { id: "Deepholm", shape: "circle", coords: [460, 170, 110], preFillColor: "transparent", fillColor: "blue" },
    { id: "The Lost Isles", shape: "circle", coords: [140, 320, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "Kezan", shape: "circle", coords: [340, 460, 80], preFillColor: "transparent", fillColor: "blue" },
  ]
}

export const dragonIsles: MapDetails = {
  name: "The Dragon Isles",
  img: dragonIslesImg,
  areas: [
    { id: "The Forbidden Reach", shape: "circle", coords: [590, 65, 40], preFillColor: "transparent", fillColor: "blue" },
    { id: "The Waking Shores", shape: "circle", coords: [440, 210, 60], preFillColor: "transparent", fillColor: "blue" },
    { id: "Thaldraszus", shape: "circle", coords: [580, 290, 70], preFillColor: "transparent", fillColor: "blue" },
    { id: "The Azure Span", shape: "circle", coords: [480, 460, 70], preFillColor: "transparent", fillColor: "blue" },
    { id: "Ohn'ahran Plains", shape: "circle", coords: [400, 330, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "The Emerald Dream", shape: "circle", coords: [280, 335, 15], preFillColor: "transparent", fillColor: "blue" },
    { id: "Amirdrassil", shape: "circle", coords: [160, 390, 20], preFillColor: "transparent", fillColor: "blue" },
    { id: "Zaralek Cavern", shape: "circle", coords: [800, 500, 90], preFillColor: "transparent", fillColor: "blue" },
  ]
}

//TO DO: add 100 map areas
export const easternKingdoms: MapDetails = {
  name: "Eastern Kingdoms",
  img: easternKingdomsImg,
  areas: [
  
  ]
}

export const kalimdor: MapDetails = {
  name: "Kalimdor",
  img: kalimdorImg,
  areas: [
  
  ]
}

export const kulTiras: MapDetails = {
  name: "Kul Tiras",
  img: kulTirasImg,
  areas: [
    { id: "Stormsong Valley", shape: "circle", coords: [500, 150, 80], preFillColor: "transparent", fillColor: "blue" },
    { id: "Nazjatar", shape: "circle", coords: [780, 100, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "Mechagon", shape: "circle", coords: [100, 160, 50], preFillColor: "transparent", fillColor: "blue" },
    { id: "Drustvar", shape: "circle", coords: [250, 400, 70], preFillColor: "transparent", fillColor: "blue" },
    { id: "Tiragarde Sound", shape: "circle", coords: [570, 450, 70], preFillColor: "transparent", fillColor: "blue" },
  ]
}


export const IdToMapObject: { [key: string]: MapDetails } = {
  "Azeroth": azeroth,
  "The Broken Isles": brokenIsles,
  "The Maelstrom": maelstrom,
  "The Dragon Isles": dragonIsles,
  "Eastern Kingdoms": easternKingdoms,
  "Kalimdor": kalimdor,
  "Kul Tiras": kulTiras


}