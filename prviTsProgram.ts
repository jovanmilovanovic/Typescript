class Song {
    constructor(private artist: string, private title:string) {}
    play():void {
        console.log('Playing ' + this.title + " by " + this.artist);
        
    }
}

class Playlist {
        private songs: Song[] = []
        public static readonly maxSongCount = 30;
        constructor(public name: string) {}
        addSoong(song: Song) {
            if(this.songs.length >= Playlist.maxSongCount) {
                throw new Error('Playlist is full')
            }
            this.songs.push(song)
        }
}


const playlist =  new Playlist("My playlist");
const n = playlist.name
playlist.addSoong(new Song('Kylie Minogue', 'New York City'));
const maxSongs = Playlist.maxSongCount