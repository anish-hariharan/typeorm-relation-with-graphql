import {  Field, InputType } from "type-graphql"
import { Product } from "../../models/products" 

@InputType()
export class CreateProductInput implements Partial<Product> {

    @Field()
    public name!: string

    @Field()
    public code!: string

}