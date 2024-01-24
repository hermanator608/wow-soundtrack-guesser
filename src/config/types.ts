import { MapAreas } from "react-img-mapper";
import { Channel } from "./channels";

export type Ambiance = {
  name: string;
  code: string;
  group: string;
  startTimeS?: number;
  channel?: Channel;
  livestream?: boolean;
};

export type MapDetails = {
  img: string
  name: string
  areas: Array<MapAreas>
}
