//  swiper

const swiper = new Swiper('.swiper', {
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    speed: 600,
    slidesPerView: 1.8,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// 이벤트 슬라이드

let e_slide_wrap = document.querySelector('.e_slide_wrap');
let e_slide_p = document.querySelectorAll('.e_slide_wrap li');
let img_w = e_slide_p[0].clientWidth;

let e_slide_r_btn = document.querySelector('.e_slide i.fa-angle-right');
let e_slide_l_btn = document.querySelector('.e_slide i.fa-angle-left');

let e_slide_bullet = document.querySelectorAll('.e_slide_bullet li');

let i = 0;

function e_slider(n){
    // e_slide_wrap.style.left = -img_w * i + 'px';
    e_slide_wrap.style.left = -100 * n + '%';
    
    e_slide_bullet.forEach(function(e){
        e.classList.remove('on');
        e_slide_bullet[n].classList.add('on');
    });
}

let Timer;

function e_slide_timer(n){
    Timer = setInterval(function(){
        i == e_slide_p.length - 1 ? i = 0 : i++;
        e_slider(i);
    }, 3000);
};

e_slide_timer();

e_slide_bullet.forEach(function(e, index){
    e.addEventListener('click', function(){
        e_slide_bullet.forEach(function(e2){
            e2.classList.remove('on');
        });
        this.classList.add('on');
        e_slider(index);
    });
});

e_slide_r_btn.addEventListener('click', function(){
    i == e_slide_p.length - 1 ? i = 0 : i++;
    e_slider(i);
});

e_slide_r_btn.addEventListener('mouseenter', function(){
    clearInterval(Timer);
});

e_slide_r_btn.addEventListener('mouseleave', function(){
    e_slide_timer();
});

e_slide_l_btn.addEventListener('click', function(){
    i == 0 ? i = e_slide_p.length - 1 : i--;
    e_slider(i);
});

e_slide_l_btn.addEventListener('mouseenter', function(){
    clearInterval(Timer);
});

e_slide_l_btn.addEventListener('mouseleave', function(){
    e_slide_timer();
});






// 모달


$(function(){
    let modal = `
        <div class="modal">
            <div class="m_inner">
                <img src="./images/20230203.jpg" alt="모달배너">
                <p>
                    <input type="checkbox" id="ch">
                    <label for="ch">일주일간 열지 않음</label>
                    <a href="#" title="닫기">닫기</a>
                </p>
            </div>
        </div>
    `;

    $('body').append(modal);
    
    //  쿠키 생성
    let ch = $('.modal #ch'); // 체크박스 변수선언

    // 쿠키 파일이 현재 브라우저에 존재하면, 모달창이 안나오도록 한다.

    if($.cookie('popup') == 'none'){
        $('.modal').hide();
    }

    // 쿠키의 존재 여부를 체크하여 쿠키를 생성하거나 모달을 숨긴다.
    function closeModal(){
        if(ch.is(':checked')){  // 체크박스에 체크한 경우라면
            // 쿠키를 생성하고
            $.cookie('popup', 'none', {expires:7, path:'/'});
        }
        //  체크박스에 체스 안한 경우는 그냥 모달을 숨긴다.
        $('.modal').hide();
    };

    // 닫기 버튼을 클릭하면 closeModal 함수를 동작한다.
    $('.modal a').click(function(){
        closeModal();
    });

});

