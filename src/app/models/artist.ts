export class Artist {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: number;
  radio: boolean;
  tracklist: string;
  type: string;
}

export class ArtistMinified{
  id: number;
  name: string;
  tracklist: string;
  type: string;
}


// id	1
// name	"The Beatles"
// link	"https://www.deezer.com/artist/1"
// share	"https://www.deezer.com/artist/1?utm_source=deezer&utm_content=artist-1&utm_term=0_1585034554&utm_medium=web"
// picture	"https://api.deezer.com/artist/1/image"
// picture_small	"https://e-cdns-images.dzcdn.net/images/artist/e7f8aad6226980723164ee42e171bd17/56x56-000000-80-0-0.jpg"
// picture_medium	"https://e-cdns-images.dzcdn.net/images/artist/e7f8aad6226980723164ee42e171bd17/250x250-000000-80-0-0.jpg"
// picture_big	"https://e-cdns-images.dzcdn.net/images/artist/e7f8aad6226980723164ee42e171bd17/500x500-000000-80-0-0.jpg"
// picture_xl	"https://e-cdns-images.dzcdn.net/images/artist/e7f8aad6226980723164ee42e171bd17/1000x1000-000000-80-0-0.jpg"
// nb_album	33
// nb_fan	5419107
// radio	true
// tracklist	"https://api.deezer.com/artist/1/top?limit=50"
// type	"artist"
