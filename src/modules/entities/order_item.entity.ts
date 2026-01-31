import { Column, Entity, Generated, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { Order } from "./order.entity";

@Entity()
export class OrderItem {
    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    uuid: string;

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
    product_uuid: number;

    @ManyToOne(() => Order, order => order.items)
    order_uuid: number;
}