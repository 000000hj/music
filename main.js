
let openBtn=document.querySelector(".fa-bars");
let closeBtn=document.querySelector(".fa-x");
let sideBarMenu=document.querySelector('.menu');


//커스텀 오디오 플레이어

const musicWrap = document.querySelector(".musicwrap");
const musicAudio = musicWrap.querySelector(".music");
const musicPrevBtn = musicWrap.querySelector('.previous');
const musicNextBtn = musicWrap.querySelector('.next');
const musicRepeat = musicWrap.querySelector(".repeat");
const playBtn=musicWrap.querySelector('.play');
const pauseBtn=musicWrap.querySelector('.pause');
const ShuffleBtn=musicWrap.querySelector('.shuffle');


let musicIndex = 1;



//음악 로드
function loadMusic(){
   
   
}

function pauseMusic() {
   music.pause();
  }

function playMusic(){
    music.volume = 0.2;
    music.loop = true;
    music.play();
}

function nextMusic(){
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;//순번이 마지막인지 확인. 마지막이라면 처음으로 돌아간다
    loadMusic(musicIndex);
    playMusic();
 
}

//메뉴 온오프
openBtn.addEventListener('click',()=>{
    sideBarMenu.style.width="250px"
    
    
})

closeBtn.addEventListener('click',()=>{
    sideBarMenu.style.width="0"; 
})

//음악 플레이
playBtn.addEventListener('click',()=>{
    playMusic();
    
    
})
//음악멈춤
pauseBtn.addEventListener('click',()=>{
    pauseMusic();
})

//다음곡
musicPrevBtn.addEventListener("click", ()=>{
    prevMusic();
});
musicNextBtn.addEventListener("click", ()=>{
    nextMusic();
});