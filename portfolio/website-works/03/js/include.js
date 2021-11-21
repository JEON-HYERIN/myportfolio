'use strict';

// header include
$('.header-include').load('../include/header.html', function () {
  setCurrentNav();
  // gnb영역 이벤트 
  const mainMenu = document.querySelector('#gnb > ul');
  const subMenues = mainMenu.querySelectorAll('.sub-menu');
  const mainMenuLists = document.querySelectorAll('#gnb > ul > li');
  const anchers = document.querySelectorAll('#gnb > ul > li > a');
  const icons = mainMenu.querySelectorAll('span.material-icons');

  $('#gnb > ul > li > a').on('mouseenter focusin', function () {
    if ($(window).width() >= 1024) {
      var index = $('#gnb > ul > li').index($(this).parent());
      $('#gnb > ul > li > .sub-menu').removeClass('on');
      $('#gnb > ul > li:eq(' + index + ') > .sub-menu').addClass('on');
    }
  });

  $('#header').on('mouseleave', function () {
    $('#gnb > ul > li > .sub-menu').removeClass('on');
  });

  // 모바일버전 서브메뉴 오픈
  $('#gnb > ul > li').each(function () {
    if ($(this).find('ul').length > 0) {
      $(this).find('> a').append('<span class="material-icons mobile">navigate_next</span>');
    }
  });

  $('#header .open-btn').on('click', function () {
    $('#header .open-btn').addClass('hidden');
    $('#header .close-btn').removeClass('hidden');
    $('#gnb > ul > li.on > a').trigger('click');
    enable();
  });

  $('#header .close-btn').on('click', function () {
    $('#header .open-btn').removeClass('hidden');
    $('#header .close-btn').addClass('hidden');
    disable();
  });

  $('#gnb > ul > li > a').on('click focusin', function (e) {
    if ($(window).width() < 1024) {
      if ($(this).parent().find('ul').length > 0) {
        e.preventDefault();
        var height = 0;
        $(this).next().find('> li').each(function () {
          height += $(this).outerHeight(true);
        });
        $(this).next().css({'height': height + 'px'});
        $(this).find('span.material-icons').addClass('rotate');
        $(this).parent().siblings().find('ul').css({'height': '0px'});
        $(this).parent().siblings().find('span.material-icons').removeClass('rotate');
      }
    }
  });

  $(window).on('resize', function () {
    if ($(window).width() >= 1024) {
      $('#gnb > ul > li > ul').removeAttr('style');
      if ($('#gnb').hasClass('open') === true) {
        disable();
      } 
    } else if ($('#gnb').hasClass('open') === true){
      $('#header .open-btn').trigger('click');
    }
  });

  // 토글버튼 활성화
  const openBtn = document.querySelector('.open-btn');
  const closeBtn = document.querySelector('.close-btn');
  const gnbEl = document.querySelector('#gnb');
  const topMenu = document.querySelector('#header .top-menu');
  openBtn.addEventListener('click', function () {
    header.classList.add('black');
    header.classList.remove('active');
    gnbEl.classList.add('open');
    topMenu.classList.add('open');
    openBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', function () {
    header.classList.add('black');
    header.classList.add('active');
    gnbEl.classList.remove('open');
    topMenu.classList.remove('open');
    openBtn.classList.remove('hidden');
    closeBtn.classList.add('hidden');
  });

  
  // now navigation
  function setCurrentNav() {
    var bodyClass = $('body').attr('class');
    var classArray = bodyClass.split(' ');
    if (classArray[0] === 'main') return false;
    $('#gnb > ul > li').each(function () {
      if ($(this).attr('data-menu') === classArray[1]) {
        $(this).addClass('on');
      } else {
        $(this).removeClass('on');
      }
    });
    $('#gnb > ul > li > .sub-menu > li').each(function () {
      if ($(this).attr('data-link') === classArray[2]) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }
});

// service menu include
$('.service-menu-include').load('../include/service-menu.html');

// footer include
$('.footer-include').load('../include/footer.html', function () {
  // TO-TOP 버튼 보이기/숨기기
  const header = document.querySelector('#header');
  const headerHeight = header.getBoundingClientRect().height;
  window.addEventListener('scroll', _.throttle(function () {
    if (window.pageYOffset > headerHeight) {
      toTopBtn.classList.remove('invisible');
    } else {
      toTopBtn.classList.add('invisible');
    }
  }, 300));

  // TO-TOP 버튼 클릭시 상단이동
  const toTopBtn = document.querySelector('#to-top');
  const wrapper = document.querySelector('#wrapper');
  toTopBtn.addEventListener('click', function () {
    wrapper.scrollIntoView({behavior:"smooth"});
  });
});

  // btn menu selected
  $('.btn-menu-include').load('../include/btn-menu.html', function () {
    setCurrentNav();
    // now navigation
    function setCurrentNav() {
      var bodyClass = $('body').attr('class');
      var classArray = bodyClass.split(' ');
      if (classArray[0] === 'main') return false;
      $('#btn-menu li').each(function () {
        if ($(this).attr('data-link') === classArray[2]) {
          $(this).addClass('selected');
        } else {
          $(this).removeClass('selected');
        }
      });
    }
  })

