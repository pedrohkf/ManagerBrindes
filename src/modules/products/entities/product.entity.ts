import { Column, Entity, Generated, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "../../orders/entities/order_item.entity";

@Entity()
export class Product {
    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    uuid: string;

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => OrderItem, item => item.product_uuid)
    items: OrderItem[]
}