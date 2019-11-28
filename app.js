'use strict';

// hover effect for menu items in desktop layout
$(document).ready(function () {
  $('li').hover(function () {
    $(this).css('background-color', 'rgb(164, 208, 255)');
    console.log('It happened!');
  }, function () {
    $(this).css('background-color', '');
  });
})

// burger menu to X on click
function burgerToX(x) {
  x.classList.toggle('changeMenu');
  $('#menuContainer').toggle();
}


