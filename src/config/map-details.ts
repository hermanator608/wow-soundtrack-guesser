import { MapDetails } from './types'
import AzerothImg from "../images/wow-map-min.jpg"
import AllWorldsImg from "../images/all-worlds.png"
import brokenIslesImg from "../images/broken-isles.png"
import maelstromImg from "../images/maelstrom.png"
import dragonIslesImg from "../images/dragon-isles.png"
import easternKingdomsImg from "../images/eastern-kingdoms.png"
import kalimdorImg from "../images/kalimdor.png"
import kulTirasImg from "../images/kul-tiras.png"
import northrendImg from "../images/northrend.png"
import pandariaImg from "../images/pandaria.png"
import zandalarImg from "../images/zandalar.png"

//ALL WORLDS / DEFAULT START MAP
export const AllWorlds: MapDetails = {
  name: "AllWorlds",
  img: AllWorldsImg,
  areas: [
    { id: "Shadowlands", shape: "circle", coords: [160, 152, 100], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Outland", shape: "circle", coords: [185, 448, 100], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Azeroth", shape: "circle", coords: [460, 300, 145], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Draenor", shape: "circle", coords: [750, 360, 100], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
  ]
};

//START AZEROTH AND IT'S ZONES
export const azeroth: MapDetails = {
  name: "Azeroth",
  img: AzerothImg,
  areas: [
    { id: "Kalimdor", shape: "circle", coords: [230, 340, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Eastern Kingdoms", shape: "circle", coords: [790, 340, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Zandalar", shape: "circle", coords: [490, 370, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Kul Tiras", shape: "circle", coords: [640, 300, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "The Broken Isles", shape: "circle", coords: [530, 240, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Northrend", shape: "circle", coords: [450, 80, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Pandaria", shape: "circle", coords: [430, 490, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "The Maelstrom", shape: "circle", coords: [415, 287, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "The Dragon Isles", shape: "circle", coords: [695, 135, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 }
  ]
};

export const northrend: MapDetails = {
  name: "Northrend",
  img: northrendImg,
  areas: [
    { id: "Icecrown", shape: "circle", coords: [360, 180, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Storm Peaks", shape: "circle", coords: [530, 150, 60], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Crystalsong", shape: "circle", coords: [470, 255, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Wintergrasp", shape: "circle", coords: [325, 300, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Zul'drak", shape: "circle", coords: [615, 260, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Grizzly Hills", shape: "circle", coords: [600, 360, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Howling Fjord", shape: "circle", coords: [700, 480, 70], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Dragonblight", shape: "circle", coords: [450, 345, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Sholazar Basin", shape: "circle", coords: [230, 260, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Borean Tundra", shape: "circle", coords: [220, 380, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Caldera?", shape: "circle", coords: [130, 350, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
  ]
}
//TODO
export const kalimdor: MapDetails = {
  name: "Kalimdor",
  img: kalimdorImg,
  areas: [
  ]
}
//TODO
export const easternKingdoms: MapDetails = {
  name: "Eastern Kingdoms",
  img: easternKingdomsImg,
  areas: [
  ]
}

export const dragonIsles: MapDetails = {
  name: "The Dragon Isles",
  img: dragonIslesImg,
  areas: [
    { id: "The Forbidden Reach", shape: "circle", coords: [590, 65, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "The Waking Shores", shape: "circle", coords: [440, 210, 60], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Thaldraszus", shape: "circle", coords: [580, 290, 70], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "The Azure Span", shape: "circle", coords: [480, 460, 70], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Ohn'ahran Plains", shape: "circle", coords: [400, 330, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "The Emerald Dream", shape: "circle", coords: [280, 335, 15], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Amirdrassil", shape: "circle", coords: [160, 390, 20], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Zaralek Cavern", shape: "circle", coords: [800, 500, 90], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
  ]
}

export const brokenIsles: MapDetails = {
  name: "brokenIsles",
  img: brokenIslesImg,
  areas: [
    { id: "Argus", shape: "circle", coords: [790, 100, 110], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Highmountain", shape: "circle", coords: [420, 120, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Val'sharah", shape: "circle", coords: [310, 200, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Stormheim", shape: "circle", coords: [530, 210, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Suramar", shape: "circle", coords: [425, 290, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Azsuna", shape: "circle", coords: [310, 340, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "The Broken Shore", shape: "circle", coords: [510, 390, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Dalaran - Legion", shape: "circle", coords: [410, 400, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
  ]
}

export const maelstrom: MapDetails = {
  name: "The Maelstrom",
  img: maelstromImg,
  areas: [
    { id: "Deepholm", shape: "circle", coords: [460, 170, 110], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "The Lost Isles", shape: "circle", coords: [140, 320, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Kezan", shape: "circle", coords: [340, 460, 80], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
  ]
}

export const kulTiras: MapDetails = {
  name: "Kul Tiras",
  img: kulTirasImg,
  areas: [
    { id: "Stormsong Valley", shape: "circle", coords: [500, 150, 80], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Nazjatar", shape: "circle", coords: [780, 100, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Mechagon", shape: "circle", coords: [160, 178, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Drustvar", shape: "circle", coords: [330, 425, 70], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Tiragarde Sound", shape: "circle", coords: [570, 450, 70], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
  ]
}

export const zandalar: MapDetails = {
  name: "Zandalar",
  img: zandalarImg,
  areas: [
    { id: "Zuldazar", shape: "circle", coords: [500, 350, 90], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Nazmir", shape: "circle", coords: [520, 180, 60], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Vol'dun", shape: "circle", coords: [340, 180, 70], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Nazjatar", shape: "circle", coords: [780, 100, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
  ]
} 

export const pandaria: MapDetails = {
  name: "Pandaria",
  img: pandariaImg,
  areas: [
    { id: "Kun-Lai Summit", shape: "circle", coords: [420, 200, 70], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Vale of Eternal Blossoms", shape: "circle", coords: [460, 330, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Valley of the Four Winds", shape: "circle", coords: [440, 400, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Krasarang Wilds", shape: "circle", coords: [420, 500, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Townlong Steppes", shape: "circle", coords: [300, 270, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Dread Wastes", shape: "circle", coords: [300, 390, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "The Jade Forest", shape: "circle", coords: [600, 300, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Isle of Giants", shape: "circle", coords: [440, 40, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Isle of Thunder", shape: "circle", coords: [190, 70, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
    { id: "Timeless Isle", shape: "circle", coords: [805, 420, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth:10 },
  ]
}


//START SHADOWLANDS AND IT'S ZONES


//START OUTLAND AND IT'S ZONES


//START DRAENOR AND IT'S ZONES


//END ALL MAPS AND ZONES

export const IdToMapObject: { [key: string]: MapDetails } = {
  "Azeroth": azeroth,
  "The Broken Isles": brokenIsles,
  "The Maelstrom": maelstrom,
  "The Dragon Isles": dragonIsles,
  "Eastern Kingdoms": easternKingdoms,
  "Kalimdor": kalimdor,
  "Kul Tiras": kulTiras,
  "Pandaria": pandaria,
  "Zandalar": zandalar,
  "Northrend": northrend,
}