import { AlbumMinified } from './album';
import { Contributor } from './contributor';
import { ArtistMinified } from './artist';

export class Track {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  contributors: Contributor[];
  artist: ArtistMinified;
  album: AlbumMinified;
  type: string;
}
