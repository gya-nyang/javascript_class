// 변수 선언
// 메인메뉴 클릭시 서브가 나오게
let gnb = document.querySelectorAll('.depth1 > li');


//  메인메뉴 외의 영역을 클릭하면 서브가 숨겨진다.
gnb.forEach((e, i)=>{
    e.addEventListener('click',()=>{
        close_depth2();
        if(i < 2){
            gnb[i].children[2].style.display = 'flex';
        }
    });
});

// let visual_slide = document.querySelector('#visual_slide');
let main = document.querySelector('main');
let depth2 = document.querySelectorAll('.depth2');
let close_depth2 = () => {
    depth2.forEach((n)=>{
        n.style.display = 'none';
    });
};

main.addEventListener('click', ()=>{
    close_depth2();
});


$(function(){

    //  메인슬라이드
    let m_img = $('#visual_slide div');
    const l_btn = $('#visual_slide .s_btn li:first-child');
    const r_btn = $('#visual_slide .s_btn li:last-child');
    const c_btn = $('#visual_slide .ctrl_btn li');

    let n = c_btn.index();

    // 3초마다 반복호출되는 함수 작성
    let fadeInOut = () =>{
        // console.log('3초마다 반복');
        m_img.stop().fadeOut(800);
        c_btn.removeClass('on');

        n == 2 ? n = 0 : n++ ;
        m_img.eq(n).stop().fadeIn(800);
        c_btn.eq(n).addClass('on');
    }

    let fadeInOut2 = () =>{
        // console.log('3초마다 반복');
        m_img.stop().fadeOut(800);
        c_btn.removeClass('on');

        n == 0 ? n = 2 : n-- ;
        m_img.eq(n).stop().fadeIn(800);
        c_btn.eq(n).addClass('on');
    }

    // 시간객체를 사용하여 함수 호출
    let Timer = setInterval(fadeInOut, 3000);

    //  콘트롤 버튼 클릭시 해당 슬라이드 돌게 하기

    c_btn.hover(()=>{
        clearInterval(Timer);
    },()=>{
        clearInterval(Timer);
        Timer = setInterval(fadeInOut, 3000);
    });

    // 화살표 함수는 this를 못잡는다.
    // c_btn.click(()=>{
    //     n = $(this).index();

    //     console.log($(this));

    //     m_img.fadeOut();
    //     c_btn.removeClass('on');
        
    //     m_img.eq(n).fadeIn();
    //     $(this).addClass('on');
    // });

    c_btn.click(function(){
        n = $(this).index();
        console.log(n);

        m_img.fadeOut();
        c_btn.removeClass('on');
        
        m_img.eq(n).fadeIn();
        $(this).addClass('on');
    });
    

    // 좌측, 우측버튼 클릭시 시간을 제거하고 해당 함수를 호출한다.

    l_btn.click(()=>{
        clearInterval(Timer);
        fadeInOut2();
    });

    r_btn.click(()=>{
        clearInterval(Timer);
        fadeInOut();
    });

    // 좌, 우 버튼에 마우스 아웃하면 다시 시간을 생성하여 자동으로 움직이게 한다.

    $('.s_btn').mouseleave(()=>{
        Timer = setInterval(fadeInOut, 3000);
    });
});

// 탭메뉴 콘텐츠

// 1. 변수 선언
const tab_list = document.querySelectorAll('#tea_category article > ul >  li');
const cont_list = document.querySelectorAll('#tea_category ul li > .cont');

console.log(tab_list);

document.querySelector('.cont').style.display='block';
// 1. 탭메뉴 첫번째 li태그 안에 있는 .cont 보이게 하기

tab_list.forEach(function(e, i){
    e.addEventListener('click', function(n){
        n.preventDefault();

        tab_list.forEach(function(e){
            e.classList.remove('on');
        });

        cont_list.forEach(function(n){
            n.style.display='none';
        });
        
        e.classList.add('on');
        cont_list[i].style.display = 'block';
    });
});
