import { AlbumMinified } from "./album";
import { Contributor } from "./contributor";
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

// id	3135553
// readable	true
// title	"One More Time"
// title_short	"One More Time"
// title_version	""
// link	"https://www.deezer.com/track/3135553"
// duration	320
// rank	880360
// explicit_lyrics	false
// explicit_content_lyrics	0
// explicit_content_cover	0
// preview	"https://cdns-preview-e.d…67a507a6d1b6a9ca1b-7.mp3"
// contributors	[…]
// artist	{…}
// album	{…}
// type	"track"
