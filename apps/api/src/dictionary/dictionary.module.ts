import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from '../auth/auth.module';
import { DictionaryController } from './dictionary.controller';
import { DictionaryService } from './dictionary.service';
import { DictionaryWord } from './dictionary.model';
import { User } from '../user/user.model';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [DictionaryController],
  providers: [DictionaryService],
  imports: [
    HttpModule,
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([DictionaryWord, User])
  ],
  exports: [DictionaryService]
})
export class DictionaryModule {}
