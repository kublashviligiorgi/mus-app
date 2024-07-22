import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MusicModule } from './music/music.module';
@Module({
    controllers: [AppController],
    providers: [AppService],
  })
  export class AppModule { }
