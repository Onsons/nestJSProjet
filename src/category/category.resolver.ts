import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { identity } from 'rxjs';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './dtos/create.category.dto';
import { UpdateCategoryDTO } from './dtos/update.category.dto';
import { CategoryModel } from './models/category.model';

@Resolver()
export class CategoryResolver {

    constructor(private categoryService: CategoryService) {}

    @Query(returns => [CategoryModel] , { name: 'categories' })
    getAllCategories() {
        return this.categoryService.getAllCategories();

    }

    @Query(returns => CategoryModel , { name: 'category' })
    getCategory(@Args('id') id: string) {
        return this.categoryService.getCategoryById(id);

    }

    @Mutation(returns => CategoryModel)
    addCategory(@Args('category') category: CreateCategoryDTO) {
        return this.categoryService.addNewCategory(category);
    }


    @Mutation(returns => CategoryModel)
    updateCategory(@Args('id') id: string , @Args('category') category: UpdateCategoryDTO) {
        return this.categoryService.updateCategory(id,category);
    }

    @Mutation(returns => CategoryModel)
    deleteCategory(@Args('id') id: string) {
        return this.categoryService.deleteCategory(id);
    }

}
