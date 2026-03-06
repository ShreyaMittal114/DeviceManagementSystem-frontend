import { Shelf } from "./Shelf";

export interface ShelfPosition{
    positionId:string;
    Occupied:boolean;
    Deleted:boolean;
    shelf? :Shelf
}