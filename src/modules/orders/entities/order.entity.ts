import { Column, Entity, Generated, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "./order_item.entity";
import { statusOrder } from "../enums/status_order.enum";
import { Client } from "src/modules/clients/entities/clients.entity";

@Entity()
export class Order {
    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    uuid: string;

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    reference: string;

    @Column()
    totalPrice: number;

    @Column()
    totalPriceBV: number;

    @Column()
    profitability: number;

    @Column()
    spent: number;

    @Column({ nullable: true })
    status: statusOrder;

    @Column()
    create_at: Date;

    @ManyToOne(() => Client, { onDelete: 'SET NULL' })
    client_id: number;

    @OneToMany(() => OrderItem, item => item.order_uuid)
    items: OrderItem[]
}