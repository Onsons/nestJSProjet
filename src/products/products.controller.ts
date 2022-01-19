import { Body, ConsoleLogger, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductModel } from './models/product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

   
    constructor ( private readonly productsService: ProductsService) {}

    //Add a new Prodcut 
    @Post()
    async addProduct(@Body() product: ProductModel) {
        return this.productsService.create(product);
    }

    //Get All Products 
    @Get()
    async getAllProducts() {
        return this.productsService.findMany(); 
    
    }

    //Get All Products 
    @Get('/:id')
    async getPorductById(@Param('id') id) {
        return this.productsService.findOne(id); 
      
      }


    //Update an excisting Product
    @Patch('/:id')
    async update(@Param('id') id, @Body() productModel: ProductModel) {
        return this.productsService.update(id, productModel) ;
      
      }
    

    //Update an excisting Product
    @Delete('/:id')
    async delete(@Param('id') id) {
        return this.productsService.delete(id);
         
   }

}
