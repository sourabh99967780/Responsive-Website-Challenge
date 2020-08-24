"use strict";

var btnHamburger = document.querySelector('#btnHamburger');
var header = document.querySelector('.header');
var overlay = document.querySelector('.overlay');
var fadeElems = document.querySelectorAll('.has-fade');
var body = document.querySelector('body');
btnHamburger.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    body.classList.remove('noscroll');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    header.classList.add('open');
    body.classList.add('noscroll');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});