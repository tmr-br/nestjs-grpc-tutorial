import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { FindOneTrackRequest, Track } from './models/track.interface';
import { MusicProvider } from './music.provider';


@Controller()
export class MusicService {
  public constructor(private musicProvider: MusicProvider) {}

  @GrpcMethod()
  findOneTrack(request: FindOneTrackRequest, metadata: any): Track {
    return this.musicProvider.findOneTrack(request);
  }
}
