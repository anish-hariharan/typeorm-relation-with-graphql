"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategorys = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Category_1 = require("../../models/Category");
const CategoryRepository_1 = require("../../repositories/CategoryRepository");
const CreateCategoryInput_1 = require("./CreateCategoryInput");
let CreateCategorys = class CreateCategorys {
    CreateCategorys(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryRepository = (0, typeorm_1.getCustomRepository)(CategoryRepository_1.CategoryRepository);
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
            yield categoryRepository.save(categorys);
            return categorys;
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)((_type) => Category_1.Category),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCategoryInput_1.CreateCategoryInput]),
    __metadata("design:returntype", Promise)
], CreateCategorys.prototype, "CreateCategorys", null);
CreateCategorys = __decorate([
    (0, type_graphql_1.Resolver)((_type) => Category_1.Category)
], CreateCategorys);
exports.CreateCategorys = CreateCategorys;
//# sourceMappingURL=CreateCategory.js.map