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
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

console.log("Song: ", audioPlayer.song);
console.log("Duration: ", audioPlayer.songDuration);
console.log("Author: ", audioPlayer.details.author);

// La desestructuración consiste en sacar variables para usarlas independientes
// Así no se entra como array al termino hasta encontrar lo deseado
// Sino que se saca como constante para usar de manera mas practica

// const { song } = audioPlayer;

console.log("-------------- Con destructuring --------------");

// console.log("Song: ", song);

// En caso hipotetico que ya exista un nombre de variable con ese nombre
// Que estoy tomando de mi constante, ejm:

const song = "New song";

// Hacemos la declaración de la desestructuración de la siguiente manera

// const { song: anotherSong } = audioPlayer;

// console.log("Song: ", song);

// console.log("Song: ", anotherSong);

// También se pueden desestructurar mas variables

// Desestructurar variable de un objeto anidado
// Se crea constante por cada anidación
// Así se puede llegar al objeto deseado

const { song: anotherSong, songDuration: duration, details } = audioPlayer;
const { author } = details;

console.log("Song: ", anotherSong);

console.log("Duration: ", duration);

console.log("Author: ", author);
