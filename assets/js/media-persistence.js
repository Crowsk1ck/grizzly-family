
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
document.addEventListener('click', ()=>{
music.play();
},{once:true});

music.addEventListener('timeupdate', ()=>{
localStorage.setItem('music_time', music.currentTime);
});
}
