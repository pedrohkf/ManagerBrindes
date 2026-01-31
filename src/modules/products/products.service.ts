import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) { }

    async findAllProducts(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async findOneProduct(id): Promise<Product | null> {
        return this.productRepository.findOneBy({ id })
    }

    async createProduct(clientDto: CreateProductDto): Promise<CreateProductDto> {
        const productClient = await this.productRepository.save(clientDto)
        return productClient;
    }

    async updateProduct(id: number, productDto: UpdateProductDto): Promise<UpdateProductDto> {
        const product = await this.productRepository.findOneBy({ id });

        if (!product) {
            throw new Error('Product not found');
        }

        Object.assign(product, productDto)

        const updateProduct = await this.productRepository.save(product)
        return updateProduct;
    }
}
