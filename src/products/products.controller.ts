import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
    @Get()
    findAll(){
        return []
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return { id };
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto){
        return {
            name: createProductDto.name
        }
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() updateProductDto: UpdateProductDto
    ) {
        return {
            id,
            ...updateProductDto
        }
    }
}
