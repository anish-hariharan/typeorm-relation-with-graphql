import { Arg, Mutation, Resolver } from "type-graphql"
import { getCustomRepository } from "typeorm"
import { Category } from "../../models/Category"  
import { CategoryRepository } from "../../repositories/CategoryRepository"
import { ProductRepository } from "../../repositories/ProductRepositories"
import { CreateCategoryInput } from "./CreateCategoryInput"
import { CreateProductInput } from "./CreateProductInput"

@Resolver((_type) => Category)
export class CreateCategorys {
    @Mutation((_type) => Category)
    public async CreateCategorys(
        @Arg('data')data: CreateCategoryInput)
    : Promise<Category> {
        const categoryRepository = getCustomRepository(CategoryRepository);
        const categorys = categoryRepository.create({
            name: data.name,
            code: data.code,
        });
        /*const productRepo = getCustomRepository(ProductRepository);
        const product = productRepo.create({
            name: proddata.name,
            code: proddata.code
        })

        product.category = categorys
        await productRepo.save(product)*/
        await categoryRepository.save(categorys)
        return categorys;
    }
}