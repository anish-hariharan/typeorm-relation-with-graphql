import { Query, Resolver } from "type-graphql"
import { InjectRepository } from "typeorm-typedi-extensions"
import { Category } from "../../models/Category"
import { CategoryRepository } from "../../repositories/CategoryRepository"


@Resolver((_type) => Category)
export class GetCatogories{
    constructor(
        @InjectRepository()
        private readonly categoryRepository: CategoryRepository
    ) {}

    @Query((_type) => [Category])
    public async getCatogories(): Promise<Category[]>{
        const catogories = await this.categoryRepository.find({
            relations: ["products"]
        })
        return catogories;
    }
}
