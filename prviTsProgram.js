"use strict";
class Song {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
    }
    play() {
        console.log('Playing ' + this.title + " by " + this.artist);
    }
}
class Playlist {
    constructor(name) {
        this.name = name;
        this.songs = [];
    }
    addSoong(song) {
        if (this.songs.length >= Playlist.maxSongCount) {
            throw new Error('Playlist is full');
        }
        this.songs.push(song);
    }
}
Playlist.maxSongCount = 30;
const playlist = new Playlist("My playlist");
const n = playlist.name;
playlist.addSoong(new Song('Kylie Minogue', 'New York City'));
const maxSongs = Playlist.maxSongCount;
