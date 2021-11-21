'use strict';

// header include
$('.header-include').load('../include/header.html', function () {
  setCurrentNav();
  // header section
  var header = document.querySelector('#header');
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  $('#header .header__menu li a').on('click', function () {
    var index = $('#header .header__menu li').index($(this).parent());
    $('#header .header__menu li').removeClass('active');
    $('#header .header__menu li:eq(' + index + ')').addClass('active');
  });

  // now navigation
  function setCurrentNav() {
    var bodyClass = $('body').attr('class');
    var classArray = bodyClass.split(' ');
    if (classArray[0] === 'main') return false;
    $('#header .header__menu li').each(function () {
      if ($(this).attr('data-link') === classArray[1]) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }

  // gnb section
  var toggleBtn = header.querySelector('.toggle-btn');
  var closeBtn = header.querySelector('.close-btn');
  var gnbWrap = header.querySelector('.gnb-wrap');

  toggleBtn.addEventListener('click', function () {
    gnbWrap.classList.add('open');
    toggleBtn.classList.add('invisible');
    closeBtn.classList.remove('invisible');
    enable();
  });

  closeBtn.addEventListener('click', function () {
    gnbWrap.classList.remove('open');
    toggleBtn.classList.remove('invisible');
    closeBtn.classList.add('invisible');
    disable();
  });
});

// footer include
$('.footer-include').load('../include/footer.html', function () {
  // arrow up
  var arrowUp = document.getElementById('arrow-up');
  var wrapper = document.getElementById('wrapper');
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 200) {
      arrowUp.classList.add('visible');
    } else {
      arrowUp.classList.remove('visible');
    }
  });

  arrowUp.addEventListener('click', function () {
    wrapper.scrollIntoView({
      behavior: 'smooth'
    });
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
      if ($(this).attr('data-link') === classArray[1]) {
        $(this).addClass('selected');
      } else {
        $(this).removeClass('selected');
      }
    });
  }
})