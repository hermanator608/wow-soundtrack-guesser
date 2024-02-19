import { MapDetails } from './types'
import AzerothImg from "../images/wow-map-min.jpg"
import AllWorldsImg from "../images/all-worlds.png"
import brokenIslesImg from "../images/broken-isles.png"
import argusImg from "../images/argus.png"
import maelstromImg from "../images/maelstrom.png"
import dragonIslesImg from "../images/dragon-isles.png"
import easternKingdomsImg from "../images/eastern-kingdoms.png"
import kalimdorImg from "../images/kalimdor.png"
import kulTirasImg from "../images/kul-tiras.png"
import northrendImg from "../images/northrend.png"
import pandariaImg from "../images/pandaria.png"
import zandalarImg from "../images/zandalar.png"
import shadowlandsImg from "../images/shadowlands.png"
import draenorImg from "../images/draenor.png"
import outlandImg from "../images/outland.png"


//ALL WORLDS / DEFAULT START MAP
export const AllWorlds: MapDetails = {
  name: "AllWorlds",
  img: AllWorldsImg,
  areas: [
    { id: "Shadowlands", shape: "circle", coords: [160, 152, 100], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Outland", shape: "circle", coords: [185, 448, 100], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Azeroth", shape: "circle", coords: [460, 300, 145], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Draenor", shape: "circle", coords: [750, 360, 100], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
  ]
};

//START AZEROTH AND IT'S ZONES
export const azeroth: MapDetails = {
  name: "Azeroth",
  img: AzerothImg,
  areas: [
    { id: "Kalimdor", shape: "circle", coords: [230, 340, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Eastern Kingdoms", shape: "circle", coords: [790, 340, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Zandalar", shape: "circle", coords: [490, 370, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Kul Tiras", shape: "circle", coords: [640, 300, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Exile's Reach", shape: "circle", coords: [620, 200, 20], preFillColor: "#eab54d4d", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "The Broken Isles", shape: "circle", coords: [530, 240, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Northrend", shape: "circle", coords: [450, 80, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Pandaria", shape: "circle", coords: [430, 490, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Wandering Isle", shape: "circle", coords: [320, 520, 20], preFillColor: "#eab54d4d", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "The Maelstrom", shape: "circle", coords: [415, 287, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "The Dragon Isles", shape: "circle", coords: [695, 135, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 }
  ]
};

export const northrend: MapDetails = {
  name: "Northrend",
  img: northrendImg,
  areas: [
    { id: "Icecrown", shape: "circle", coords: [360, 170, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Icecrown Citadel", shape: "circle", coords: [370, 240, 20], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Storm Peaks", shape: "circle", coords: [530, 150, 60], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Crystalsong Forest", shape: "circle", coords: [470, 255, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Wintergrasp", shape: "circle", coords: [325, 300, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Zul'Drak", shape: "circle", coords: [615, 260, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Grizzly Hills", shape: "circle", coords: [600, 360, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Howling Fjord", shape: "circle", coords: [700, 480, 70], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Dragonblight", shape: "circle", coords: [450, 345, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Sholazar Basin", shape: "circle", coords: [230, 260, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Borean Tundra", shape: "circle", coords: [220, 380, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Coldarra", shape: "circle", coords: [130, 350, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
  ]
}

export const kalimdor: MapDetails = {
  name: "Kalimdor",
  img: kalimdorImg,
  areas: [
    { id: "Teldrassil", shape: "circle", coords: [390, 55, 25], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Darnassus", shape: "circle", coords: [355, 60, 15], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Bloodmyst Isle", shape: "circle", coords: [270, 110, 20], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Azuremyst Isle", shape: "circle", coords: [310, 155, 25], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "The Exodar", shape: "circle", coords: [270, 160, 10], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Darkshore", shape: "circle", coords: [410, 130, 15], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Moonglade", shape: "circle", coords: [482, 110, 15], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Winterspring", shape: "circle", coords: [525, 130, 25], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Felwood", shape: "circle", coords: [435, 157, 15], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Mount Hyjal", shape: "circle", coords: [485, 187, 27], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Azshara", shape: "circle", coords: [565, 215, 30], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Durotar", shape: "circle", coords: [528, 300, 15], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Orgrimmar", shape: "circle", coords: [525, 265, 10], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Northern Barrens", shape: "circle", coords: [480, 300, 25], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Ashenvale", shape: "circle", coords: [450, 242, 22], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Stonetalon Mountains", shape: "circle", coords: [390, 272, 20], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Desolace", shape: "circle", coords: [375, 330, 22], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Mulgore", shape: "circle", coords: [427, 350, 22], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Southern Barrens", shape: "circle", coords: [465, 370, 15], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Dustwallow Marsh", shape: "circle", coords: [505, 395, 20], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Thousand Needles", shape: "circle", coords: [460, 430, 15], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Feralas", shape: "circle", coords: [390, 410, 27], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Silithus", shape: "circle", coords: [390, 475, 23], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Un'Goro Crater", shape: "circle", coords: [450, 477, 23], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Tanaris", shape: "circle", coords: [500, 500, 25], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Uldum", shape: "circle", coords: [435, 538, 30], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Ahn'Qiraj", shape: "circle", coords: [370, 525, 20], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },

  ]
}

export const easternKingdoms: MapDetails = {
  name: "Eastern Kingdoms",
  img: easternKingdomsImg,
  areas: [
    { id: "Isle of Quel'Danas", shape: "circle", coords: [500, 30, 15], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Eversong Woods", shape: "circle", coords: [495, 110, 16], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Silvermoon City", shape: "circle", coords: [510, 90, 10], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Ghostlands", shape: "circle", coords: [507, 147, 20], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Eastern Plaguelands", shape: "circle", coords: [495, 195, 20], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Western Plaguelands", shape: "circle", coords: [440, 195, 15], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Tirisfal Glades", shape: "circle", coords: [390, 190, 20], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Undercity", shape: "circle", coords: [395, 215, 10], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Silverpine Forest", shape: "circle", coords: [370, 240, 15], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Hillsbrad Foothills", shape: "circle", coords: [415, 245, 20], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "The Hinterlands", shape: "circle", coords: [480, 245, 17], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Arathi Highlands", shape: "circle", coords: [460, 280, 17], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Gilneas", shape: "circle", coords: [368, 285, 15], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Tol Barad", shape: "circle", coords: [315, 305, 12], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Vashj'ir", shape: "circle", coords: [290, 385, 30], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Wetlands", shape: "circle", coords: [450, 325, 15], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Twilight Highlands", shape: "circle", coords: [505, 330, 25], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Dun Morogh", shape: "circle", coords: [395, 370, 25], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Ironforge", shape: "circle", coords: [425, 350, 10], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Loch Modan", shape: "circle", coords: [475, 365, 18], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Searing Gorge", shape: "circle", coords: [425, 400, 12], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Badlands", shape: "circle", coords: [475, 395, 15], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Burning Steppes", shape: "circle", coords: [440, 425, 15], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Elwynn Forest", shape: "circle", coords: [405, 450, 18], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Stormwind", shape: "circle", coords: [380, 435, 10], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Redridge Mountains", shape: "circle", coords: [460, 450, 12], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Westfall", shape: "circle", coords: [370, 485, 15], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Duskwood", shape: "circle", coords: [410, 485, 13], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Deadwind Pass", shape: "circle", coords: [445, 485, 10], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Swamp of Sorrows", shape: "circle", coords: [480, 475, 13], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Blasted Lands", shape: "circle", coords: [470, 510, 15], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Stranglethorn Vale", shape: "circle", coords: [425, 520, 17], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
  ]
}

export const dragonIsles: MapDetails = {
  name: "The Dragon Isles",
  img: dragonIslesImg,
  areas: [
    { id: "The Forbidden Reach", shape: "circle", coords: [590, 65, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "The Waking Shores", shape: "circle", coords: [440, 210, 60], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Thaldraszus", shape: "circle", coords: [600, 290, 65], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Valdrakken", shape: "circle", coords: [505, 290, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "The Azure Span", shape: "circle", coords: [480, 460, 70], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Ohn'ahran Plains", shape: "circle", coords: [400, 330, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "The Emerald Dream", shape: "circle", coords: [280, 335, 15], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Amirdrassil", shape: "circle", coords: [160, 390, 20], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Zaralek Cavern", shape: "circle", coords: [800, 500, 90], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
  ]
}

export const brokenIsles: MapDetails = {
  name: "brokenIsles",
  img: brokenIslesImg,
  areas: [
    { id: "Argus", shape: "circle", coords: [790, 100, 110], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Highmountain", shape: "circle", coords: [420, 120, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Val'sharah", shape: "circle", coords: [310, 200, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Stormheim", shape: "circle", coords: [530, 210, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Suramar", shape: "circle", coords: [425, 290, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Azsuna", shape: "circle", coords: [310, 340, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "The Broken Shore", shape: "circle", coords: [510, 390, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Dalaran (Broken Isles)", shape: "circle", coords: [410, 400, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
  ]
}

export const argus: MapDetails = {
  name: "argus",
  img: argusImg,
  areas: [
    { id: "Eredath", shape: "circle", coords: [585, 170, 110], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Antoran Wastes", shape: "circle", coords: [330, 340, 110], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Krokuun", shape: "circle", coords: [560, 440, 110], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
  ]
}

export const maelstrom: MapDetails = {
  name: "The Maelstrom",
  img: maelstromImg,
  areas: [
    { id: "Deepholm", shape: "circle", coords: [460, 170, 110], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "The Lost Isles", shape: "circle", coords: [140, 320, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Kezan", shape: "circle", coords: [340, 460, 80], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
  ]
}

export const kulTiras: MapDetails = {
  name: "Kul Tiras",
  img: kulTirasImg,
  areas: [
    { id: "Stormsong Valley", shape: "circle", coords: [500, 150, 80], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Nazjatar", shape: "circle", coords: [780, 100, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Mechagon", shape: "circle", coords: [160, 178, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Drustvar", shape: "circle", coords: [330, 425, 70], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Tiragarde Sound", shape: "circle", coords: [570, 450, 70], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Boralus", shape: "circle", coords: [520, 330, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
  ]
}

export const zandalar: MapDetails = {
  name: "Zandalar",
  img: zandalarImg,
  areas: [
    { id: "Zuldazar", shape: "circle", coords: [410, 370, 80], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Dazar'alor", shape: "circle", coords: [540, 370, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Nazmir", shape: "circle", coords: [520, 180, 60], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Vol'dun", shape: "circle", coords: [340, 180, 70], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Nazjatar", shape: "circle", coords: [780, 100, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
  ]
}

export const pandaria: MapDetails = {
  name: "Pandaria",
  img: pandariaImg,
  areas: [
    { id: "Kun-Lai Summit", shape: "circle", coords: [420, 200, 70], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Vale of Eternal Blossoms", shape: "circle", coords: [460, 330, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Valley of the Four Winds", shape: "circle", coords: [440, 400, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Krasarang Wilds", shape: "circle", coords: [420, 500, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Townlong Steppes", shape: "circle", coords: [300, 270, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Dread Wastes", shape: "circle", coords: [300, 390, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "The Jade Forest", shape: "circle", coords: [600, 300, 50], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Isle of Giants", shape: "circle", coords: [440, 40, 30], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Isle of Thunder", shape: "circle", coords: [190, 70, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
    { id: "Timeless Isle", shape: "circle", coords: [805, 420, 40], preFillColor: "transparent", fillColor: "transparent", strokeColor: "#eab54d4d", lineWidth: 10 },
  ]
}


//START SHADOWLANDS AND IT'S ZONES
export const shadowlands: MapDetails = {
  name: "Shadowlands",
  img: shadowlandsImg,
  areas: [
    { id: "The Maw", shape: "circle", coords: [180, 100, 60], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Korthia", shape: "circle", coords: [290, 130, 40], preFillColor: "#eab54d4d", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Maldraxxus", shape: "circle", coords: [570, 135, 70], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Oribos", shape: "circle", coords: [420, 290, 40], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Revendreth", shape: "circle", coords: [225, 320, 50], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Bastion", shape: "circle", coords: [645, 345, 50], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Ardenweald", shape: "circle", coords: [440, 480, 50], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Zereth Mortis", shape: "circle", coords: [775, 480, 50], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
  ]
}

//START OUTLAND AND IT'S ZONES
export const outland: MapDetails = {
  name: "Outland",
  img: outlandImg,
  areas: [
    { id: "Netherstorm", shape: "circle", coords: [520, 120, 60], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Blade's Edge Mountains", shape: "circle", coords: [355, 170, 70], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Zangarmarsh", shape: "circle", coords: [300, 285, 40], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Hellfire Peninsula", shape: "circle", coords: [515, 320, 60], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Nagrand (Outland)", shape: "circle", coords: [280, 405, 60], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Terokkar Forest", shape: "circle", coords: [440, 435, 50], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Shadowmoon Valley (Outland)", shape: "circle", coords: [600, 490, 50], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
  ]
}

//START DRAENOR AND IT'S ZONES
export const draenor: MapDetails = {
  name: "Draenor",
  img: draenorImg,
  areas: [
    { id: "Frostfire Ridge", shape: "circle", coords: [300, 180, 60], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Gorgrond", shape: "circle", coords: [460, 170, 50], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Tanaan Jungle", shape: "circle", coords: [520, 285, 50], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Ashran", shape: "circle", coords: [655, 265, 30], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Nagrand (Draenor)", shape: "circle", coords: [250, 320, 60], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Talador", shape: "circle", coords: [395, 345, 40], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Spires of Arak", shape: "circle", coords: [420, 465, 40], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
    { id: "Shadowmoon Valley (Draenor)", shape: "circle", coords: [540, 420, 50], preFillColor: "transparent", fillColor: "#eab54d4d", strokeColor: "transparent", lineWidth: 10 },
  ]
}

//END ALL MAPS AND ZONES

export const IdToMapObject: { [key: string]: MapDetails } = {
  "Azeroth": azeroth,
  "The Broken Isles": brokenIsles,
  "Argus": argus,
  "The Maelstrom": maelstrom,
  "The Dragon Isles": dragonIsles,
  "Eastern Kingdoms": easternKingdoms,
  "Kalimdor": kalimdor,
  "Kul Tiras": kulTiras,
  "Pandaria": pandaria,
  "Zandalar": zandalar,
  "Northrend": northrend,
  "Shadowlands": shadowlands,
  "Draenor": draenor,
  "Outland": outland,
}