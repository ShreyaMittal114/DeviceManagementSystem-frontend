import { Device } from "./device";
import { ShelfPosition } from "./ShelfPosition";

export interface Shelf{
    id?:string;
    name:string;
    partNumber:string;
    Deleted?:boolean;
    Occupied?:boolean;
    shelfPosition? :ShelfPosition;
    device?:Device;

}