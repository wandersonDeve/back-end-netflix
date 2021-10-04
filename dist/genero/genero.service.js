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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GenerosService = class GenerosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.genero.create({ data });
    }
    async findAll() {
        return this.prisma.genero.findMany();
    }
    async findOne(generoId) {
        return this.prisma.genero.findUnique({
            where: {
                id: generoId,
            },
            include: {
                filme: true,
            },
        });
    }
    async update(generoId, data) {
        return this.prisma.genero.update({
            data,
            where: {
                id: generoId,
            },
        });
    }
    async deleteOne(where) {
        return this.prisma.genero.delete({ where });
    }
    async deleteAll() {
        return this.prisma.genero.deleteMany();
    }
};
GenerosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GenerosService);
exports.GenerosService = GenerosService;
//# sourceMappingURL=genero.service.js.map