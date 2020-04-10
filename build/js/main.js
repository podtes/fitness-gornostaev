'use strict';
var oneMonthButton = document.querySelector('.subscriptions__months-item--one-month');
var sixMonthButton = document.querySelector('.subscriptions__months-item--six-month');
var twelveMonthButton = document.querySelector('.subscriptions__months-item--twelve-month');
var monthsButtons = document.querySelectorAll('.subscriptions__months-item');

var trainerCard = document.querySelector('.subscriptions__tariffes-item--with-trainer');
var dailyCard = document.querySelector('.subscriptions__tariffes-item--daily');
var fullDayCard = document.querySelector('.subscriptions__tariffes-item--fullday');

var deactiveMonthButtons = function () {
  for (var i = 0; i < monthsButtons.length; i++) {
    if (monthsButtons[i].classList.contains('subscriptions__months-item--active')) {
      monthsButtons[i].classList.remove('subscriptions__months-item--active');
    }
  }
};
var getWindowWidth = function () {
  return window.innerWidth || document.body.clientWidth;
};

// листенеры переключения тарифов по месяцам
oneMonthButton.addEventListener('click', function () {
  deactiveMonthButtons();
  oneMonthButton.classList.add('subscriptions__months-item--active');
  trainerCard.querySelector('.subscriptions__shadow-price').textContent = '5000';
  trainerCard.querySelector('b').textContent = '5000';
  trainerCard.querySelector('p').textContent = '12 занятий';
  dailyCard.querySelector('.subscriptions__shadow-price').textContent = '1700';
  dailyCard.querySelector('b').textContent = '1700';
  fullDayCard.querySelector('.subscriptions__shadow-price').textContent = '2700';
  fullDayCard.querySelector('b').textContent = '2700';
});
sixMonthButton.addEventListener('click', function () {
  deactiveMonthButtons();
  sixMonthButton.classList.add('subscriptions__months-item--active');
  trainerCard.querySelector('.subscriptions__shadow-price').textContent = '30000';
  trainerCard.querySelector('b').textContent = '30000';
  trainerCard.querySelector('p').textContent = '60 занятий';
  dailyCard.querySelector('.subscriptions__shadow-price').textContent = '10200';
  dailyCard.querySelector('b').textContent = '10200';
  fullDayCard.querySelector('.subscriptions__shadow-price').textContent = '16200';
  fullDayCard.querySelector('b').textContent = '16200';
});
twelveMonthButton.addEventListener('click', function () {
  deactiveMonthButtons();
  twelveMonthButton.classList.add('subscriptions__months-item--active');
  trainerCard.querySelector('.subscriptions__shadow-price').textContent = '60000';
  trainerCard.querySelector('b').textContent = '60000';
  trainerCard.querySelector('p').textContent = '144 занятия';
  dailyCard.querySelector('.subscriptions__shadow-price').textContent = '20400';
  dailyCard.querySelector('b').textContent = '20400';
  fullDayCard.querySelector('.subscriptions__shadow-price').textContent = '32400';
  fullDayCard.querySelector('b').textContent = '32400';
});

window.main = {
  getWindowWidth: getWindowWidth
};
