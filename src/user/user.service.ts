import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';

import { IUser } from 'src/interfaces/user.interface';
import { CreateUserDto } from './dto/crate-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<IUser>){
    }

    async create (CreateUserDto: CreateUserDto, roles: Array<string>): Promise<IUser> {
        const saltRounds =10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(CreateUserDto.password, salt);

        const createdUser = new this.userModel(_.assignIn(CreateUserDto, {password: hash, roles}));
        return await createdUser.save();
    }
    
    async find(id: string): Promise<IUser> {
        return await this.userModel.findById(id).exec();
    }
}
