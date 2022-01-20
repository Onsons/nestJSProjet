import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";
import { ProductInterface } from "../interfaces/product.interface";

import { Field, ID, Int, ObjectType } from '@nestjs/graphql';


 

@ObjectType()
@Schema({ collection: 'Products', timestamps: true })
export class ProductModel implements ProductInterface {
    
    @Field(() => ID)
    id: ObjectId
    
    @Field(() => String)
    @Prop({ required: true })
    title: string;
 
    @Field(() => String)
    @Prop({ required: true })
    description: string;

    @Field(() => Number)
    @Prop({ required: true })
    price: number;

}
export type ProductDocument = ProductModel & Document;
export const ProductSchema = SchemaFactory.createForClass(ProductModel);