import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";
import { ProductInterface } from "../interfaces/product.interface";


 

@Schema({ collection: 'Products', timestamps: true })
export class ProductModel implements ProductInterface {
    
    
    id: ObjectId
    
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    price: number;

}
export type ProductDocument = ProductModel & Document;
export const ProductSchema = SchemaFactory.createForClass(ProductModel);