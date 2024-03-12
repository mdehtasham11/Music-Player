

const paly = document.getElementById("play");
const music = document.querySelector("audio");
const img = document.querySelector("img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
let isplaying = false;
const songs = [{
    name: "music-1",
    title: "Dance Meri Rani",
    artist: " Guru Randhawa, Zahrah S Khan",
},
{
    name: "music-2",
    title: "Jind Meriye",
    artist: "Sachet Tandon",
},
{
    name: "music-3",
    title: "Mehram",
    artist: "Sachet Tandon",
}
]

const playmusic = () => {
    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
const pausemusic = () => {
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", function () {
    // if (isplaying){
    //     pausemusic();
    // }
    // else{
    //     playmusic();
    // }
    isplaying ? pausemusic() : playmusic();

});
const loadsong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "/music/" + songs.name + ".mp3";
    img.src = "/Image/" + songs.name + ".jpg";
};

songsIndex = 0;

const nextsong = () => {
    songsIndex = (songsIndex + 1) % songs.length;
    loadsong(songs[songsIndex]);
     playmusic();

};
const prevsong = () =>{
    songsIndex = (songsIndex - 1 + songs.length) % songs.length;
    loadsong(songs[songsIndex]);
    playmusic();

};

next.addEventListener('click',nextsong);
prev.addEventListener('click',prevsong);
