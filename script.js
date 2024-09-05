document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
let autoNext = setInterval(function() {
    document.getElementById('next').click();
}, 3000);


const audio = new Audio("./Song/Song1.mp3");
document.onclick = ()=>{
    audio.play()
}
  