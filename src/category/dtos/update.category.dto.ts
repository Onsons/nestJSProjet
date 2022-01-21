import { InputType, PartialType } from "@nestjs/graphql";
import { CreateCategoryDTO } from "./create.category.dto";

@InputType()
export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO)  {
}