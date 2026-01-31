import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productService: ProductsService
    ) { }

    @Get()
    findAll() {
        return this.productService.findAllProducts()
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.productService.findOneProduct(id);
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.createProduct(createProductDto)
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updateProductDto: UpdateProductDto
    ) {
        return this.productService.updateProduct(id, updateProductDto)
    }
}
