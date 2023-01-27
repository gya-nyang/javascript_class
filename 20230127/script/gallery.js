$(function(){

    // 1. 변수선언
    let g_navi = $('.g_navi a');
    let g_list = $('.g_list a');
    let total_btn = $('.g_navi li:first-child a');
    let plan_btn = $('.g_navi li:nth-child(2) a');
    let design_btn = $('.g_navi li:nth-child(3) a');
    let ui_btn = $('.g_navi li:nth-child(4) a');
    let coding_btn = $('.g_navi li:last-child a');

    // 2. 메뉴 클릭 이벤트와 서식적용
    g_navi.click(function(e){
        e.preventDefault(); // 새로고침 방지
        $('.g_navi a').removeClass('act');
        $(this).addClass('act');
    });


    // 3. 이미지 목록에 마우스 오버시 캡션 나오게
    g_list.hover(function(){
        $(this).find('.caption').stop().animate({'bottom':'0'}, 300);
    }, function(){
        $(this).find('.caption').stop().animate({'bottom':'-40px'}, 300);
    });

    // 4. 이미지 클릭시 해당 src값을 가져와서 모달윈도 띄우기
    g_list.click(function(e){
        e.preventDefault();
        let src = $(this).attr('href');
        let title = $(this).find('span').text();
        let i_num = $(this).parent().index() + 1;

        let i = $(this).parent().index();

        console.log(i_num);
        console.log(src);

        let modal =`
        <div class="modal">
            <div class="center">
                <img src=${src} alt="">
                <h3 class="caption">${title}</h3>    
                <a class="close">
                    <span></span>
                    <span></span>
                </a>
                <i class="fas fa-angle-left"></i>
                <i class="fas fa-angle-right"></i>
                <span class="page_num">${i_num}/${$('.g_list li').length}</span>
            </div>
        </div>
        `;

        // body의 맨 쥐에 내용을 추가
        $('body').append(modal);

        // 닫기 버튼 누르면 모달창 숨기기
        $('.modal .close').click(function(){
            $('.modal').fadeOut();
        });

        // 좌우버튼 클릭시 각각 해당 이미지가 나오게 처리

        $('.modal i.fa-angle-left').click(function(){
            moveLeft();
        });

        function moveLeft(){
            (i_num == 1) ? i_num = 12 : i_num--;
            console.log(i_num);
            
            img_check();
            from_index();
        }

        $('.modal i.fa-angle-right').click(function(){
            moveRight();
        });

        function moveRight(){
            (i_num == 12) ? i_num = 1 : i_num++;
            console.log(i_num);

            img_check();
            from_index();
        }

        // 인덱스 번호가 4, 9, 11번일때 확장자를 png로 교체해준다.
        function img_check(){
            if(i_num == 4 || i_num == 9 || i_num == 11){
                $('.modal img').attr('src', './images/img' + i_num +'.png')
            }else{
                $('.modal img').attr('src', './images/img' + i_num +'.jpg')
            }
        }

        // 인덱스값 활용 동작
        function from_index(){
            $('.modal h3').text( $('.g_list > li:nth-child(' + i_num + ')').find('span').text() );

            $('.modal .center > span').text(i_num + '/' + $('.g_list li').length);
        }


    });

    //  5. 갤러리 메뉴를 클릭시 각각 해당 이미지 목록만 보이게 하기

    plan_btn.click(function(e){
        e.preventDefault();
        $('.total').hide(); // 모두 숨기고
        $('.plan').fadeIn(); // 해당 목록만 보이게
    });

    design_btn.click(function(e){
        e.preventDefault();
        $('.total').hide(); // 모두 숨기고
        $('.design').fadeIn(); // 해당 목록만 보이게
    });

    ui_btn.click(function(e){
        e.preventDefault();
        $('.total').hide(); // 모두 숨기고
        $('.ui').fadeIn(); // 해당 목록만 보이게
    });

    coding_btn.click(function(e){
        e.preventDefault();
        $('.total').hide(); // 모두 숨기고
        $('.coding').fadeIn(); // 해당 목록만 보이게
    });

    total_btn.click(function(e){
        e.preventDefault();
        $('.total').hide(); // 모두 숨기고
        $('.total').fadeIn(); // 해당 목록만 보이게
    });

});