
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    details: {
        author: 'Ed Sheeran',
        year: 2015
    },
    song: 'Mess',
    songDuration: 36
}
const {
    audioVolume: volume,
    song: anotherSong,
    songDuration: duration,
    details
} = audioPlayer;

const { author } = details;

const [ , , trunks = 'Not found']: string[] = ['Goku', 'Vegetta', 'Trunks'];


console.log('Personaje 3:', trunks)
console.log(audioPlayer.song)