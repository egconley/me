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
  $('#appendMenu').append($('#menuContainer'));
  $('#menuContainer').slideToggle(200);
  $('#menuContainer li').css('padding', '3px');
}

// append advice string into p tag
// $('#appendAdvice').append('does it work?');
// $('#appendAdvice').append(adviceString);

// an idea from https://www.freecodecamp.org/forum/t/translating-a-json-data-to-html-element/137934/7
// fetch('http://localhost:3000/advice')
//     .then((res) => res.json())
//     .then((data) => {
//     loginBarner.innerHTML = `${JSON.stringify(data)}`;
//     console.log(data);
//     })


