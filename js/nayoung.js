jQuery(document).ready(function () {
  //navi의 li태그에 mouseover이벤트 설정
  $(".navi > li")
    .mouseover(function () {
      //$(this) : 현재 선택된 태그(요소)
      //find('.submenu') : 선택된 태그의 자식 태그 중 .submenu와 일치하는 태그를 찾아서 반환함. 만약에 children()을 사용할 경우 직계 자식 태그를 반환

      //stop() 현재 동작하고 있는 애니메이션 동작을 즉시 중단

      //slideDown(), slideUp() : jQuery 라이브러리에서 제공하는 함수로 슬라이딩 애니메이션과 함께 보여주거나 숨김 구현함. 선택한 요소의 height 값을 낮추거나 높여가며 슬라이드 업 또는 다운 전환되게 하고, 이때 매개변수값(인수) 500은 0.5초를 의미

      $(this).find(".submenu").stop().slideDown(500);
      //500ms = 0.5s(0.5초)
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp(500);
    });

  $(function () {
    //쿠키("popup")의 값이 'none'이면 id값이 'notice_wrap'안 요소를 숨깁니다.
    if ($.cookie("popup") == "none") {
      $("#notice-wrap").hide();
    }
    // class 값이 'closeBtn'인 요소를 클릭하면 체크박스의 체크 유무에 따라 쿠키를 생성하여 3일간 저장합니다.
    var $expiresChk = $("#expiresChk");
    $(".closeBtn").on("click", closePop);
    function closePop() {
      if ($expiresChk.is(":checked")) {
        $.cookie("popup", "none", { expires: 3, path: "/" });
      }
      $("#notice-wrap").fadeOut("fast");
    }
  });
});
