import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./clients.entity";
import { OrderItem } from "./order_item.entity";

@Entity()
export class Order {
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

    @Column()
    status: "pendente" | "enviado" | "finalizado";

    @Column()
    create_at: Date;

    @ManyToOne(() => Client, { onDelete: 'SET NULL' })
    client_id: number;

    @OneToMany(() => OrderItem, item => item.order_id)
    items: OrderItem[]
}