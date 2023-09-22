import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Role } from '../role/role.model';
import { UserRoles } from '../role/user-roles.model';
import { RoleModule } from '../role/role.module';
import { AuthModule } from '../auth/auth.module';
import { StudiedArticles } from '../article/studied-articles.model';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    RoleModule,
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([User, Role, UserRoles, StudiedArticles])
  ],
  exports: [UserService]
})
export class UserModule {}
