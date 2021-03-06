import { IAddress } from './address.interface';
import { Document } from "mongoose";

export interface IUser extends Document {
    readonly email: string;
    status: string;
    readonly avatar: string;
    readonly avatarId: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly gender: string;
    readonly address: IAddress;
    readonly profession: string;
    readonly searchField: string;
    readonly phone: string;
    readonly roles: string[];
    readonly password: string;
}