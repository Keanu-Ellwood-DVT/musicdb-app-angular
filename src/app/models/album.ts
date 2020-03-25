export class Album {
  id: number;
  title: string;
  link: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  genre_id: number;
  fans: number;
  release_date: string;
  record_type: string;
  tracklist: string;
  explicit_lyrics: boolean;
  type: string;
}

// id	6575789
// title	"Random Access Memories"
// link	"https://www.deezer.com/album/6575789"
// cover	"https://api.deezer.com/album/6575789/image"
// cover_small	"https://cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/56x56-000000-80-0-0.jpg"
// cover_medium	"https://cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/250x250-000000-80-0-0.jpg"
// cover_big	"https://cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/500x500-000000-80-0-0.jpg"
// cover_xl	"https://cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/1000x1000-000000-80-0-0.jpg"
// genre_id	132
// fans	745834
// release_date	"2013-05-17"
// record_type	"album"
// tracklist	"https://api.deezer.com/album/6575789/tracks"
// explicit_lyrics	false
// type	"album"

export class AlbumMinified {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  tracklist: string;
  type: string;
}

//   id	302127
// title	"Discovery"
// cover	"https://api.deezer.com/album/302127/image"
// cover_small	"https://e-cdns-images.dz…/56x56-000000-80-0-0.jpg"
// cover_medium	"https://e-cdns-images.dz…50x250-000000-80-0-0.jpg"
// cover_big	"https://e-cdns-images.dz…00x500-000000-80-0-0.jpg"
// cover_xl	"https://e-cdns-images.dz…0x1000-000000-80-0-0.jpg"
// tracklist	"https://api.deezer.com/album/302127/tracks"
// type	"album"
