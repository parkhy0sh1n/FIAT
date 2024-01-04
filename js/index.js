window.onload = function () {
    let swiper1 = new Swiper(".visual", { //갤러리 영역명

        loop: false, //순환유무
        grabCursor: false, //커서 손모양

        slidesPerView: 1, //보이는 영역에 표시될 슬라이드 개수 (effect사용시 사용불가)
        spaceBetween: 0, //슬라이드 사이의 간격

        pagination: {
            el: ".nav", //메뉴영역 클래스명
            clickable: true, //메뉴 클릭때도 슬라이드 실행
        },

        navigation: {
            nextEl: ".nav-next",//다음 버튼 클래스명
            prevEl: ".nav-prev",//이전 버튼 클래스명
        }

    });

    let swiper2 = new Swiper(".ct1", { //갤러리 영역명

        loop: false, //순환유무
        grabCursor: false, //커서 손모양

        slidesPerView: 3.2, //보이는 영역에 표시될 슬라이드 개수 (effect사용시 사용불가)
        spaceBetween: 0, //슬라이드 사이의 간격

        pagination: {
            el: ".nav", //메뉴영역 클래스명
            clickable: true, //메뉴 클릭때도 슬라이드 실행
        },

        navigation: {
            nextEl: ".nav-next",//다음 버튼 클래스명
            prevEl: ".nav-prev",//이전 버튼 클래스명
        }

    });


}