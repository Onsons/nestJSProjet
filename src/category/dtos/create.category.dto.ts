import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class CreateCategoryDTO  {


    @Field(() => String)
    name: string;

    @Field(() => String)
    description: string;


}