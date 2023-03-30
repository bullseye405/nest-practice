import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'samir123',
      database: 'rento',
      entities: ['src/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
    TodoModule,
    UsersModule,
  ],
})
export class AppModule {}
