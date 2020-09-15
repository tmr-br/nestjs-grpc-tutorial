import { Module } from '@nestjs/common';
import { MusicService } from './music.controller';
import { MusicProvider } from './music.provider';

@Module({
  imports: [],
  providers: [MusicProvider],
  controllers: [MusicService],
})
export class AppModule {}
