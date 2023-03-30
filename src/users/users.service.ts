import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // return 'This action adds a new user';
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    // return `This action returns all users`;
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    // return `This action returns a #${id} user`;
    return await this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // return `This action updates a #${id} user`;
    const toUpdate = await this.userRepository.findOne({ where: { id } });

    const updated = Object.assign(toUpdate, updateUserDto);

    return await this.userRepository.save(updated);
  }

  async remove(id: number) {
    // return `This action removes a #${id} user`;
    return await this.userRepository.delete(id);
  }
}
