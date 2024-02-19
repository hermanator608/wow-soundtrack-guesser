import { StackInterface } from "../config/types";

export class Stack<MapDetails> implements StackInterface<MapDetails> {
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