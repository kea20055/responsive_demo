const playBtn = document.querySelector('.play');
const audio = document.querySelector('.audio');
const ocultarBtn = document.querySelector('.down');
const reproductor = document.querySelector('.reproductor');
const heartIcon = document.querySelector('.heart');
const container_reproductor = document.querySelector('.container-repr');

let music = false;

function playMusic(){
    music = true;
    audio.play();
}
function pauseMusic(){
    music = false;
    audio.pause();
}
playBtn.addEventListener("click", ()=>{
    let boton = playBtn.className;
    switch(boton){
        case "play fas fa-play":
            playBtn.className = "fas fa-pause";
        break;
        case "fas fa-pause":
            playBtn.className = "play fas fa-play";
        break;
    }
})

playBtn.addEventListener("click", () => (music ? 
    pauseMusic() : playMusic()));

ocultarBtn.addEventListener("click", ()=>{
    reproductor.classList.add("mini");
})
heartIcon.addEventListener("click", ()=>{
    heartIcon.className = "fas fa-heart";
})
container_reproductor.addEventListener("click", ()=>{
    //reproductor.classList.remove("mini");
});

const indicador = document.querySelector('.indicador');
indicador.addEventListener("click", ()=>{
    let getClass = indicador.className;
    switch(getClass){
        case "indicador fal fa-repeat":
            indicador.className = "indicador fal fa-repeat-1";
            indicador.setAttribute("title", "repeat-infinite");
        break;
        case "indicador fal fa-repeat-1":
            indicador.className = "indicador fal fa-random";
            indicador.setAttribute("title", "random");
        break;
        case "indicador fal fa-random":
            indicador.className = "indicador fal fa-repeat";
            indicador.setAttribute("title", "repeat");
        break;
    }
});

audio.addEventListener("ended", ()=>{
    let getClass = indicador.className;
    switch(getClass){
        case "indicador fal fa-repeat":
            indicador.className = "indicador fal fa-repeat-1";
            indicador.setAttribute("title", "repeat-infinite")
        break;
        case "indicador fal fa-repeat-1":
            audio.currentTime = 0;
            playMusic();
        break;
        }
});