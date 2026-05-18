
const video = document.querySelector('video');
const music = document.getElementById('bgmusic');

if(video){

const savedVideoTime = localStorage.getItem('video_time');

if(savedVideoTime){
video.currentTime = parseFloat(savedVideoTime);
}

video.addEventListener('timeupdate', ()=>{
localStorage.setItem('video_time', video.currentTime);
});

}

if(music){

const savedMusicTime = localStorage.getItem('music_time');

if(savedMusicTime){
music.currentTime = parseFloat(savedMusicTime);
}

const musicPaused = localStorage.getItem('music_paused');

if(musicPaused !== 'true'){
document.addEventListener('click', ()=>{
music.play();
},{once:true});
}

music.addEventListener('timeupdate', ()=>{
localStorage.setItem('music_time', music.currentTime);
});

music.addEventListener('pause', ()=>{
localStorage.setItem('music_paused','true');
});

music.addEventListener('play', ()=>{
localStorage.setItem('music_paused','false');
});

}
