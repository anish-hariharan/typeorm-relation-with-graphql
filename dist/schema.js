"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const CreateCategory_1 = require("./modules/category/CreateCategory");
const GetCategories_1 = require("./modules/category/GetCategories");
exports.default = (Container) => {
    return (0, type_graphql_1.buildSchema)({
        container: Container,
        resolvers: [CreateCategory_1.CreateCategorys, GetCategories_1.GetCatogories]
    });
};
//# sourceMappingURL=schema.js.map