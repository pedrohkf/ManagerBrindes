import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from 'src/entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private readonly OrderRepository: Repository<Order>
    ) { }

    async findAllOrders(): Promise<Order[]> {
        return this.OrderRepository.find();
    }

    async findOneOrder(id): Promise<Order | null> {
        return this.OrderRepository.findOneBy({ id })
    }

    async createOrder(orderDto: CreateOrderDto): Promise<CreateOrderDto> {
        const createdOrder = await this.OrderRepository.save(orderDto)
        return createdOrder;
    }

    async updateOrder(id: number, orderDto: UpdateOrderDto): Promise<UpdateOrderDto> {
        const order = await this.OrderRepository.findOneBy({ id });

        if (!order) {
            throw new Error('Order not found');
        }

        Object.assign(order, orderDto)

        const updateOrder = await this.OrderRepository.save(order)
        return updateOrder;
    }
}
