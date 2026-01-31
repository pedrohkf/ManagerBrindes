import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { Order } from "./order.entity";

@Entity()
export class OrderItem{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    unitPrice: number

    @Column()
    amount: number

    @Column()
    cost: number

    @Column()
    costomization: number

    @Column()
    log: number

    @Column()
    discount: number

    @ManyToOne(() => Product, product => product.items)
    product_id: number;

    @ManyToOne(() => Order, order => order.items )
    order_id: number;
}