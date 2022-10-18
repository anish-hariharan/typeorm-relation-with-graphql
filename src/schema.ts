import { buildSchema } from "type-graphql"; 
import { CreateCategorys } from "./modules/category/CreateCategory";

import { GetCatogories } from "./modules/category/GetCategories";

export default (Container: any) => {
    return buildSchema({
        container: Container,
        resolvers: [CreateCategorys, GetCatogories]
    });
};