import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/entities/clients.entity';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(Client)
        private readonly clientRepository: Repository<Client>
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
