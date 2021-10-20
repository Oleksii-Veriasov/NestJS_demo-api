import { TokenSchema } from './schemas/user-token-schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TokenService } from './token.service';


@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Token', schema: TokenSchema}]),
    ],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
