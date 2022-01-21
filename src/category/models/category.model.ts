import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { CategoryInterface } from "../interfaces/category.interface";

@ObjectType()
@Schema({ collection: 'Categories', timestamps: true })
export class CategoryModel implements CategoryInterface {
   
   
    @Field(() => ID)
    id?: string;
    

    @Field(() => String)
    @Prop({ required: true })
    name: string;

    @Field(() => String)
    @Prop({ required: true })
    description: string;

}

export type CategoryDocument = CategoryModel & Document;
export const CategorySchema = SchemaFactory.createForClass(CategoryModel);