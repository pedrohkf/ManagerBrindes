import { Repository } from "typeorm";
import { Client } from "./entities/clients.entity";

export class ClientsRepository extends Repository<Client> {

    async AcharClienteComMaisPedidos(id): Promise<Client | null> {

        return this.findOneBy({ id })
    }
} 