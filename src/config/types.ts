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
  printStack(): void,
  getData(): Array<MapDetails>
}

export class Stack<MapDetails> implements stackInterface<MapDetails> {
  private data: Array<MapDetails> = [];
  private stackSize: number = 0;

  constructor(size: number, map?: MapDetails) {
    this.stackSize = size; //max size, how many maps deep can we go on the tree
  
    if (map !== undefined) {
      this.data.push(map);
    }
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

  peek(): MapDetails {
    
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

  getData(){
    return this.data;
  }

  static clone = <MapDetails>(data: MapDetails[]): Stack<MapDetails> => {

    const clonedStack = new Stack<MapDetails>(5);
    data.forEach((item) => clonedStack.push(item));

    return clonedStack;

  }

}