// $(function(){

//     //  스크롤 기능을 사용하여 header, gnb에 스타일 적용하기

//     $(window).scroll(function(){
//         let sPos = $(this).scrollTop();
//         // console.log(sPos);
//         if(sPos >= 600){
//             $('header').addClass('h_on');
//             $('header .gnb a, i.fas').addClass('on');
//             $('header h1 img').attr('src', './images/logo-casper.png');
//         }else {
//             $('header').removeClass('h_on');
//             $('header .gnb a, i.fas').removeClass('on');
//             $('header h1 img').attr('src', './images/logo-casper-white.png');
//         }
//     });

//     function header_hover(){
//         $('header').hover(function(){
//             // header에 마우스 오버시 로고, 내비게이션, i.fas에 스타일 적용하고, 
//             $('header').addClass('h_on');
//             $('header .gnb a, i.fas').addClass('on');
//             $('header h1 img').attr('src', './images/logo-casper.png');
//         }, function(){
//             // header에 마우스 아웃시 로고, 내이게이션, i.fas에 스타일 제거하기
//             $('header').removeClass('h_on');
//             $('header .gnb a, i.fas').removeClass('on');
//             $('header h1 img').attr('src', './images/logo-casper-white.png');
//         });
//     };

//     header_hover();
    

//     // 아래로 이동하기 버튼을 클릭시 top 콘텐츠가 상단 940높이로 올라오게 하기

//     let sec02_top = $('#top3').offset().top;

//     $('#next_btn').click(function(){
//         $('html, body').animate({scrollTop: sec02_top - 70}, 500);
//     });
    
//     function screen_move_click(element){
//         $(element).each(function(i){
//             $(element).eq(i).click(function(e){
//                 e.preventDefault();
//                 $('html, body').animate({scrollTop: $('main section').eq(i+2).offset().top - 20}, 500);
//             });
//         });
//     };

//     screen_move_click('header ul li');
//     screen_move_click('#m_nav ul li');

//     //  내비게이션 클릭시 해당 콘텐츠가 상단으로 올라오게 하기



// });