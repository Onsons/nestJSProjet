import { ObjectId } from "mongoose";

export interface ProductInterface { 

    id? : ObjectId; 
    title: string; 
    description: string; 
    price: number;

}