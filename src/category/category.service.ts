import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDTO } from './dtos/create.category.dto';
import { UpdateCategoryDTO } from './dtos/update.category.dto';
import { CategoryDocument, CategoryModel } from './models/category.model';

@Injectable()
export class CategoryService {

    constructor (@InjectModel(CategoryModel.name)  private readonly categoryModel: Model<CategoryDocument>) {}

    getAllCategories(){
        return this.categoryModel.find().exec();
    }

    getCategoryById(id: string){
        return this.categoryModel.findById(id).exec();
    }

    addNewCategory(category : CreateCategoryDTO) {
        return this.categoryModel.create(category)
    }

    updateCategory(id: string, category : UpdateCategoryDTO) {
        return this.categoryModel.findByIdAndUpdate(id, category , {new: false}).exec() ;
    }

    deleteCategory(id: string) {
        return this.categoryModel.findByIdAndDelete(id).exec();
    }


}
