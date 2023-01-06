// main.js

// 큰사진 변수에 저장
let big_img = document.querySelector('#big_img img');

// 작은사진 변수에 저장
let thumb = document.querySelectorAll('.lnb li img');

thumb.forEach(function(e){
    e.addEventListener('click', function(){
        
        let src = this.src;
        let big_img_num = big_img.src;

        big_img.src = big_img.src.replace(big_img_num, src);
    });
});


