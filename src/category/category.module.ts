import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModel, CategorySchema } from './models/category.model';

@Module({
  imports: [ 
    MongooseModule.forFeature([{name: CategoryModel.name, schema: CategorySchema}])],
  providers: [CategoryService, CategoryResolver]
})
export class CategoryModule {}
