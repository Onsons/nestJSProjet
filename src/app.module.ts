import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CategoryModule } from './category/category.module';
@Module({
  imports: [
   
    ProductsModule, 
    MongooseModule.forRoot(
      'mongodb+srv://Ons:iZDvhrOUnsX93Rmt@cluster0.4gzho.mongodb.net/NestjsDB?retryWrites=true&w=majority'
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
    }),
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
