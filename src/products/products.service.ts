import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { from, map, mergeMap, Observable, of  } from 'rxjs';
import { ProductInterface } from './interfaces/product.interface';
import { ProductDocument, ProductModel } from './models/product.model';

@Injectable()
export class ProductsService {
    constructor (@InjectModel(ProductModel.name)  private readonly productModel: Model<ProductDocument>) {}



    public create(product: Partial<ProductInterface>): Observable<ProductDocument> {
        return of(product).pipe(
          mergeMap((prod) => new this.productModel(prod).save()),
        );
      }
    

    public findMany(): Observable<ProductDocument[]> {
        return from (this.productModel.find().exec());
    }
 

    public findOne(productId: ObjectId): Observable<ProductDocument> {
        return from(this.productModel.findById(productId));
      }
    
    

    public update(productId, productModel: ProductModel) {
      
            return from(this.productModel.findByIdAndUpdate(productId, productModel, {new: false}))
    
    
    }

    public  delete(productId) {
          return  from(this.productModel.findByIdAndRemove(productId));
        }
    }

