import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './album/album.module';
import { MusicModule } from './music/music.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';
import { SearchModule } from './search/search.module';
@Module({
  imports: [
    MusicModule, AlbumModule,AuthorModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'inserts123',
      database: 'mus-app',
      autoLoadEntities: true,
      synchronize: true
    }),
    SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
