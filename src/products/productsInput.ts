import { Field, ID, InputType } from "@nestjs/graphql";


@InputType()
export class ProductInput {

 
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field(() => Number)
  readonly price: number;
  


}