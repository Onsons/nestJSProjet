import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { ProductModel } from './models/product.model';
import { ProductsService } from './products.service';
import { ProductInput } from './productsInput';

@Resolver(of => ProductModel)
export class ProductsResolver {

    constructor(private productsService: ProductsService) {}


    @Query(returns => ProductModel)
    public product (@Args('id', { type: () => String }) id: ObjectId) {
        return this.productsService.findOne(id);
    }
 
    @Query(returns => [ProductModel])
    async products () {
        return this.productsService.findMany();
    }
    @Mutation(returns => ProductModel)
    async create (@Args('data') data: ProductInput){
        return this.productsService.create(data);
    }
 
   @Mutation(returns => ProductModel)
    async update (@Args('id', { type: () => String }) id: ObjectId , @Args('data') data: ProductInput){
      return this.productsService.update(id, data as ProductModel);
    }

    @Mutation(returns => ProductModel)
    async delete (@Args('id', { type: () => String }) id: ObjectId){
        return this.productsService.delete(id);
    }
}
