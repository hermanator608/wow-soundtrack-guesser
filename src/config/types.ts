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

export interface stackInterface<MapDetails> {
  push(map: MapDetails): void;
  pop(): MapDetails | null | undefined,
  peek(): MapDetails | null;
  isEmpty(): boolean,
  isFull(): boolean,
  size(): number,
  printStack(): void
}

class StackClass<MapDetails> implements stackInterface<MapDetails> {
  private data: Array<MapDetails> = [];
  private stackSize: number = 0;

  constructor(size: number) {
    this.stackSize = size; //max size, how many maps deep can we go on the tree
  }

  push(item: MapDetails): void {
    if (this.data.length === this.stackSize) {
      throw Error ("Can't add another map, stack storage full")
    }
    this.data.push(item);
  }

  pop(): MapDetails | null | undefined {
    return this.data.pop();
  } 

  peek(): MapDetails | null {
    return this.data[this.data.length - 1]
  }

  isEmpty(): boolean {
      return this.data.length <= 0;
  }

  isFull(): boolean {
      return this.data.length >= this.stackSize;
  }

  size(): number {
      return this.data.length
  }

  printStack(): void {
      this.data.forEach((dataItem) =>{
        console.log(dataItem);
      })
  }


}