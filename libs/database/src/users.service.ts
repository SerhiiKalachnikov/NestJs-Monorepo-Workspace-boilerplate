import { Injectable } from '@nestjs/common';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersRepo {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  public async create(createUserDto: any): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  public async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  public async findById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  public async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({
      email: email,
    });
  }

  public async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
