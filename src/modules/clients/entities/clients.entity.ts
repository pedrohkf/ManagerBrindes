import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client{
    @PrimaryColumn({type: "uuid"})
    @Generated("uuid")
    uuid: string;

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    email: string;
}