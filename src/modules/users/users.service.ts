import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    async findAllUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOneUser(email: string): Promise<User | null> {
        return this.userRepository.findOne({
            where: { email: email },
        });
    }

    async createUser(userDto: CreateUserDto): Promise<CreateUserDto> {
        const user = await this.userRepository.save(userDto)
        return user;
    }

    async updateUser(id: number, userDto: UpdateUserDto): Promise<UpdateUserDto> {
        const user = await this.userRepository.findOneBy({ id });

        if (!user) {
            throw new Error('User not found');
        }

        Object.assign(user, userDto)

        const updateUser = await this.userRepository.save(user)
        return updateUser;
    }
}
