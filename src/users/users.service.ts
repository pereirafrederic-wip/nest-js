import { Injectable } from '@nestjs/common';

//mongo
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUsers } from './db/IUsers';
import { CreateUserDto } from './db/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('USER_MODEL') private readonly userModel: Model<IUsers>,
  ) {}

  async create(createCatDto: CreateUserDto): Promise<IUsers> {
    const createdUser = new this.userModel(createCatDto);
    return await createdUser.save();
  }

  async findAll(): Promise<IUsers[]> {
    return await this.userModel.find().exec();
  }
  async findById(id: string): Promise<IUsers> {
    return await this.userModel.findById(id).exec();
  }

  async update(newValue: IUsers): Promise<IUsers> {
    const userDb = await this.userModel.findById(newValue.id).exec();

    if (!userDb._id) {
      console.debug('user not found');
    }

    await this.userModel.findByIdAndUpdate(userDb._id, newValue).exec();
    return await this.userModel.findById(userDb._id).exec();
  }
  async delete(ID: string): Promise<string> {
    try {
      await this.userModel.findByIdAndRemove(ID).exec();
      return 'The user has been deleted';
    } catch (err) {
      console.debug(err);
      return 'The user could not be deleted';
    }
  }
}
