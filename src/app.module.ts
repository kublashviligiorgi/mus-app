import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MusicModule } from './music/music.module';
import { AuthorModule } from './author/author.module';
@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [AuthorModule],
  })
  export class AppModule { }
