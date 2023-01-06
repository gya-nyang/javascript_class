// 1. 변수 선언

const slide = document.querySelector('.slide');
const slide_img = document.querySelectorAll('.slide li')
const l_btn = document.getElementById('prev_btn');
const r_btn = document.getElementById('next_btn');
const btn = document.querySelectorAll('.btn');

const img_num = slide_img.length; // 목록 li의 개수
console.log(img_num);

const img_w = 300; // li의 너비
const m = 30; // 간격
const s_con = 3; // 한 페이지에 보일 개수

let count = 0;

// 감싸는 부모요소의 너비를 구하기

// slide.style.width = `${(img_w + m) * img_num - m}px`;
// (300 + 30) * 5 - 30 = 1620

// 왼쪽으로 움직이는 슬라이드 함수

function mslide(n){
    slide.style.left = (img_w + m)*-n+'px'
    count = n;
    console.log(slide.style.left);
};

// 왼쪽 버튼 클릭시 왼쪽방향으로 움직이게 한다.
l_btn.addEventListener('click', function(){
    if(count > 0){
        mslide(count - 1);
    }else{
        mslide(img_num - s_con);
    }
    // clearInterval(Timer);
});


// 오늘쪽 버튼을 클릭시 오른쪽 방향으로 움직이게 한다.
r_btn.addEventListener('click', function(){
    if(count < img_num - s_con){
        mslide(count + 1);
    }else{
        mslide(0);
    }
    // clearInterval(Timer);
});


// 매 3초마다 자동으로 함수를 호출하여 움직이게 한다.

let Timer = setInterval(function(){
    if(count < img_num - s_con){
        mslide(count + 1);
    }else{
        mslide(0);
    }
}, 3000);

// 마우스를 양쪽 버튼에서 빼면 다시 시간을 생성하며 자동으로 움직이게 한다.

btn.forEach(function(e){
    e.addEventListener('mousedown', function(){
        clearInterval(Timer);
    })
    e.addEventListener('mouseup', function(){
        Timer = setInterval(function(){
            if(count < img_num - s_con){
                mslide(count + 1);
            }else{
                mslide(0);
            }
        }, 3000);
    })
});


