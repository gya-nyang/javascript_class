

let n = 1;
const img_list = document.querySelectorAll('.lnb > li');
const left_btn = document.querySelector('.fa-angle-left');
const right_btn = document.querySelector('.fa-angle-right');

document.getElementById('page').innerHTML = n + '/8';

img_list.forEach((e, index) => {
    e.onclick=()=>{
        n = index + 1;
        
        console.log(n);
        document.getElementById('page').innerHTML = n + '/8';
        document.getElementById('photo').src = `./images/movie_image_0${n}.jpg`;
    }
});

left_btn.addEventListener('click', function(){
    if(n == 1){
        n = 8;
    }else{
        n--;
    }
    document.getElementById('page').innerHTML = n + '/8';
    document.getElementById('photo').src = `./images/movie_image_0${n}.jpg`;
});

right_btn.addEventListener('click', function(){
    if(n == 8){
        n = 1;
    }else{
        n++;
    }
    document.getElementById('page').innerHTML = n + '/8';
    document.getElementById('photo').src = `./images/movie_image_0${n}.jpg`;
});