import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './album/album.module';
import { MusicModule } from './music/music.module';

@Module({
    imports: [MusicModule,AlbumModule],
    controllers: [AppController],
    providers: [AppService],
  })
  export class AppModule { }
