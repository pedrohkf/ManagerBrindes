import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(
        private readonly orderService: OrdersService
    ) { }

    @Get()
    findAll() {
        return this.orderService.findAllOrders()
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.orderService.findOneOrder(id)
    }

    @Post()
    create(@Body() createOrderDto: CreateOrderDto) {
        return this.orderService.createOrder(createOrderDto)
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updateOrderDto: UpdateOrderDto
    ) {
        return this.orderService.updateOrder(id, updateOrderDto)
    }
}
