'use strict';
var oneMonthButton = document.querySelector('.subscriptions__months-item--one-month');
var sixMonthButton = document.querySelector('.subscriptions__months-item--six-month');
var twelveMonthButton = document.querySelector('.subscriptions__months-item--twelve-month');
var monthsButtons = document.querySelectorAll('.subscriptions__months-item');
var exercizes = document.querySelectorAll('.schedule__exerсize');
var time8Oclock = document.querySelector('.schedule__time--8');
var time12Oclock = document.querySelector('.schedule__time--12');
var time18Oclock = document.querySelector('.schedule__time--18');
var time20Oclock = document.querySelector('.schedule__time--20');
var monday = document.querySelector('.schedule__monday');
var tuesday = document.querySelector('.schedule__tuesday');
var wednesday = document.querySelector('.schedule__wednesday');
var thursday = document.querySelector('.schedule__thursday');
var friday = document.querySelector('.schedule__friday');
var saturday = document.querySelector('.schedule__saturday');
var sunday = document.querySelector('.schedule__sunday');

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
if (oneMonthButton) {
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
}
if (sixMonthButton) {
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
}
if (twelveMonthButton) {
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
}

// расписание
var switchExercizeActiveClass = function (exercize) {
  exercize.addEventListener('click', function () {
    exercize.classList.toggle('schedule__exerсize--active');
  });
};

var hoverActiveExercize = function (exercize) {

  exercize.addEventListener('mouseenter', function () {
    if (exercize.classList.contains('schedule__exerсize--monday')) {
      monday.style.background = '#ed0233';
      monday.style.border = '2px solid #ed0233';
      monday.style.color = '#ffffff';
    }
  });
  exercize.addEventListener('mouseleave', function () {
    if (exercize.classList.contains('schedule__exerсize--monday')) {
      monday.style.background = '#ffffff';
      monday.style.border = '2px solid #1c3374';
      monday.style.color = '#1c3374';
    }
  });

  exercize.addEventListener('mouseenter', function () {
    if (exercize.classList.contains('schedule__exerсize--tuesday')) {
      tuesday.style.background = '#ed0233';
      tuesday.style.border = '2px solid #ed0233';
      tuesday.style.color = '#ffffff';
    }
  });
  exercize.addEventListener('mouseleave', function () {
    if (exercize.classList.contains('schedule__exerсize--tuesday')) {
      tuesday.style.background = '#ffffff';
      tuesday.style.border = '2px solid #1c3374';
      tuesday.style.color = '#1c3374';
    }
  });

  exercize.addEventListener('mouseenter', function () {
    if (exercize.classList.contains('schedule__exerсize--wednesday')) {
      wednesday.style.background = '#ed0233';
      wednesday.style.border = '2px solid #ed0233';
      wednesday.style.color = '#ffffff';
    }
  });
  exercize.addEventListener('mouseleave', function () {
    if (exercize.classList.contains('schedule__exerсize--wednesday')) {
      wednesday.style.background = '#ffffff';
      wednesday.style.border = '2px solid #1c3374';
      wednesday.style.color = '#1c3374';
    }
  });

  exercize.addEventListener('mouseenter', function () {
    if (exercize.classList.contains('schedule__exerсize--thursday')) {
      thursday.style.background = '#ed0233';
      thursday.style.border = '2px solid #ed0233';
      thursday.style.color = '#ffffff';
    }
  });
  exercize.addEventListener('mouseleave', function () {
    if (exercize.classList.contains('schedule__exerсize--thursday')) {
      thursday.style.background = '#ffffff';
      thursday.style.border = '2px solid #1c3374';
      thursday.style.color = '#1c3374';
    }
  });

  exercize.addEventListener('mouseenter', function () {
    if (exercize.classList.contains('schedule__exerсize--friday')) {
      friday.style.background = '#ed0233';
      friday.style.border = '2px solid #ed0233';
      friday.style.color = '#ffffff';
    }
  });
  exercize.addEventListener('mouseleave', function () {
    if (exercize.classList.contains('schedule__exerсize--friday')) {
      friday.style.background = '#ffffff';
      friday.style.border = '2px solid #1c3374';
      friday.style.color = '#1c3374';
    }
  });

  exercize.addEventListener('mouseenter', function () {
    if (exercize.classList.contains('schedule__exerсize--saturday')) {
      saturday.style.background = '#ed0233';
      saturday.style.border = '2px solid #ed0233';
      saturday.style.color = '#ffffff';
    }
  });
  exercize.addEventListener('mouseleave', function () {
    if (exercize.classList.contains('schedule__exerсize--saturday')) {
      saturday.style.background = '#ffffff';
      saturday.style.border = '2px solid #1c3374';
      saturday.style.color = '#1c3374';
    }
  });

  exercize.addEventListener('mouseenter', function () {
    if (exercize.classList.contains('schedule__exerсize--sunday')) {
      sunday.style.background = '#ed0233';
      sunday.style.border = '2px solid #ed0233';
      sunday.style.color = '#ffffff';
    }
  });
  exercize.addEventListener('mouseleave', function () {
    if (exercize.classList.contains('schedule__exerсize--sunday')) {
      sunday.style.background = '#ffffff';
      sunday.style.border = '2px solid #1c3374';
      sunday.style.color = '#1c3374';
    }
  });

  exercize.addEventListener('mouseenter', function () {
    if (exercize.classList.contains('schedule__exerсize--8:00')) {
      time8Oclock.style.background = '#ed0233';
      time8Oclock.style.border = '2px solid #ed0233';
      time8Oclock.style.color = '#ffffff';
    }
  });
  exercize.addEventListener('mouseleave', function () {
    if (exercize.classList.contains('schedule__exerсize--8:00')) {
      time8Oclock.style.background = '#ffffff';
      time8Oclock.style.border = '2px solid #1c3374';
      time8Oclock.style.color = '#1c3374';
    }
  });
  exercize.addEventListener('mouseenter', function () {
    if (exercize.classList.contains('schedule__exerсize--12:00')) {
      time12Oclock.style.background = '#ed0233';
      time12Oclock.style.border = '2px solid #ed0233';
      time12Oclock.style.color = '#ffffff';
    }
  });
  exercize.addEventListener('mouseleave', function () {
    if (exercize.classList.contains('schedule__exerсize--12:00')) {
      time12Oclock.style.background = '#ffffff';
      time12Oclock.style.border = '2px solid #1c3374';
      time12Oclock.style.color = '#1c3374';
    }
  });
  exercize.addEventListener('mouseenter', function () {
    if (exercize.classList.contains('schedule__exerсize--18:00')) {
      time18Oclock.style.background = '#ed0233';
      time18Oclock.style.border = '2px solid #ed0233';
      time18Oclock.style.color = '#ffffff';
    }
  });
  exercize.addEventListener('mouseleave', function () {
    if (exercize.classList.contains('schedule__exerсize--18:00')) {
      time18Oclock.style.background = '#ffffff';
      time18Oclock.style.border = '2px solid #1c3374';
      time18Oclock.style.color = '#1c3374';
    }
  });
  exercize.addEventListener('mouseenter', function () {
    if (exercize.classList.contains('schedule__exerсize--20:00')) {
      time20Oclock.style.background = '#ed0233';
      time20Oclock.style.border = '2px solid #ed0233';
      time20Oclock.style.color = '#ffffff';
    }
  });
  exercize.addEventListener('mouseleave', function () {
    if (exercize.classList.contains('schedule__exerсize--20:00')) {
      time20Oclock.style.background = '#ffffff';
      time20Oclock.style.border = '2px solid #1c3374';
      time20Oclock.style.color = '#1c3374';
    }
  })
};

var addListenersToExercizes = function () {
  if (exercizes) {
    for (var i = 0; i < exercizes.length; i++) {
      switchExercizeActiveClass(exercizes[i]);
      hoverActiveExercize(exercizes[i]);
    }
  }
};

addListenersToExercizes();

window.main = {
  getWindowWidth: getWindowWidth
};
