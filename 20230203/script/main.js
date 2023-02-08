$(function(){

    //  스크롤 기능을 사용하여 header, gnb에 스타일 적용하기

    $(window).scroll(function(){
        let sPos = $(this).scrollTop();
        // console.log(sPos);
        if(sPos >= 600){
            $('header').addClass('h_on');
            $('header .gnb a, i.fas').addClass('on');
            $('header h1 img').attr('src', './images/logo-casper.png');
        }else {
            $('header').removeClass('h_on');
            $('header .gnb a, i.fas').removeClass('on');
            $('header h1 img').attr('src', './images/logo-casper-white.png');
        }
    });

    function header_hover(){
        $('header').hover(function(){
            // header에 마우스 오버시 로고, 내비게이션, i.fas에 스타일 적용하고, 
            $('header').addClass('h_on');
            $('header .gnb a, i.fas').addClass('on');
            $('header h1 img').attr('src', './images/logo-casper.png');
        }, function(){
            // header에 마우스 아웃시 로고, 내이게이션, i.fas에 스타일 제거하기
            $('header').removeClass('h_on');
            $('header .gnb a, i.fas').removeClass('on');
            $('header h1 img').attr('src', './images/logo-casper-white.png');
        });
    };

    header_hover();
    

    // 아래로 이동하기 버튼을 클릭시 top 콘텐츠가 상단 940높이로 올라오게 하기

    let sec02_top = $('#top3').offset().top;

    $('#next_btn').click(function(){
        $('html, body').animate({scrollTop: sec02_top - 70}, 500);
    });
    
    function screen_move_click(element){
        $(element).each(function(i){
            $(element).eq(i).click(function(e){
                e.preventDefault();
                $('html, body').animate({scrollTop: $('main section').eq(i+2).offset().top - 20}, 500);
            });
        });
    };

    screen_move_click('header ul li');
    screen_move_click('#m_nav ul li');

    //  내비게이션 클릭시 해당 콘텐츠가 상단으로 올라오게 하기



});

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

function event_slider(){

    let e_slide_wrap = document.querySelector('.e_slide_wrap');
    let e_slide_p = document.querySelectorAll('.e_slide_wrap li');
    let img_w = e_slide_p[0].clientWidth;

    let e_slide_r_btn = document.querySelector('.e_slide i.fa-angle-right');
    let e_slide_l_btn = document.querySelector('.e_slide i.fa-angle-left');

    let e_slide_bullet = document.querySelectorAll('.e_slide_bullet li');

    let i = 0;
    let Timer;

    function e_slider(n){
        // e_slide_wrap.style.left = -img_w * i + 'px';
        e_slide_wrap.style.left = -100 * n + '%';
        
        e_slide_bullet.forEach(function(e){
            e.classList.remove('on');
            e_slide_bullet[n].classList.add('on');
        });
    }

    e_slide_bullet.forEach(function(e, index){
        e.addEventListener('click', function(){
            e_slide_bullet.forEach(function(e2){
                e2.classList.remove('on');
            });
            this.classList.add('on');
            e_slider(index);
            i = index;
        });
    });

    function e_slide_timer(n){
        Timer = setInterval(function(){
            n = i;
            i == e_slide_p.length - 1 ? i = 0 : i++;
            e_slider(n);
        }, 2000);
    };

    e_slide_timer();

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

};

event_slider();





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




// 하단 이벤트 배너 

// 1. 자바스크립트

let ran = Math.floor(Math.random() * 3) + 1;
console.log(ran);
document.getElementById('eb').src=`./images/banner_0${ran}.jpg`;

// 2. jquery

// $(function(){
//     let ran01 = Math.floor(Math.random() * 3) + 1;
//     $('#eb').attr('src', `./images/banner_0${ran01}.jpg`);
// });

