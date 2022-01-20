import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModel, ProductSchema } from './models/product.model';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';

@Module({
  imports: [ 
    MongooseModule.forFeature([{name: ProductModel.name, schema: ProductSchema}])],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsResolver]
})
export class ProductsModule {}
