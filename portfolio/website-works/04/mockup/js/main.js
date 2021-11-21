'use strict';

setCurrentNav();
  // now navigation
  function setCurrentNav() {
    var bodyClass = $('body').attr('class');
    var classArray = bodyClass.split(' ');
    $('.btn-menu li').each(function () {
      if ($(this).attr('data-link') === classArray[0]) {
        $(this).addClass('selected');
      } else {
        $(this).removeClass('selected');
      }
    });
  }