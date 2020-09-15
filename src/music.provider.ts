import { Injectable } from '@nestjs/common';
import { FindOneTrackRequest, Track } from './models/track.interface';

const items: Track[] = [
  { id: 1, name: "Ever lasting lie" },
  { id: 2, name: "悲しみは地下鉄で" }
];

@Injectable()
export class MusicProvider {
  findOneTrack(request: FindOneTrackRequest): Track {
    return items.find(item => item.id === request.id);
  }
}
