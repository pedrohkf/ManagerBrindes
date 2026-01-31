import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/modules/clients/entities/clients.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from './clients.repository';


@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(Client)
        private readonly clientRepository: ClientsRepository
    ) { }

    async findAllClients(): Promise<Client[]> {
        return this.clientRepository.find();
    }

    async findOneClient(id): Promise<Client | null> {
        return this.clientRepository.findOneBy({ id })
    }

    async createClient(clientDto: CreateClientDto): Promise<CreateClientDto> {
        const createdClient = await this.clientRepository.save(clientDto)
        return createdClient;
    }

    async updateClient(id: number, clientDto: UpdateClientDto): Promise<UpdateClientDto> {
        const client = await this.clientRepository.findOneBy({ id });

        if (!client) {
            throw new Error('Client not found');
        }

        Object.assign(client, clientDto)

        const updateClient = await this.clientRepository.save(client)
        return updateClient;
    }
}
