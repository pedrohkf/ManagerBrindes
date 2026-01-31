import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsService } from './clients.service';


@Controller('clients')
export class ClientsController {
    constructor(
        private readonly clientsService: ClientsService
    ) { }

    @Get()
    findAll() {
        return this.clientsService.findAllClients()
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.clientsService.findOneClient(id)
    }

    @Post()
    create(@Body() createClientDto: CreateClientDto) {
        return this.clientsService.createClient({
            name: createClientDto.name,
            cpf: createClientDto.cpf,
            email: createClientDto.email
        })
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updateClientDto: UpdateClientDto
    ) {
        return this.clientsService.updateClient(id, updateClientDto)
    }
}
