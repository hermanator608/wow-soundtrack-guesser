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

export interface StackInterface<MapDetails> {
  push(map: MapDetails): void;
  pop(): MapDetails | null | undefined,
  peek(): MapDetails | null;
  isEmpty(): boolean,
  isFull(): boolean,
  size(): number,
  printStack(): void,
  getData(): Array<MapDetails>
}

