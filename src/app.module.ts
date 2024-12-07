import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [], // 추후 추가 예정
      synchronize: true, // nestjs에서 작성하는 타입오알엠과 실제 디비의 연동 여부. 단순 개발 공부할 때는 true로 해도 괜찮다.
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
