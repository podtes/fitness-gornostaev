'use strict';
(function () {
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
  var translateDaysWrapper = document.querySelector('.schedule__days-translate-wrapper');
  var scheduleWrapper = document.querySelector('.schedule__wrapper');
  var scheduleButton = document.querySelector('.schedule__button');
  var scheduleDays = document.querySelectorAll('.schedule__day');
  var trainerCard = document.querySelector('.subscriptions__tariffes-item--with-trainer');
  var dailyCard = document.querySelector('.subscriptions__tariffes-item--daily');
  var fullDayCard = document.querySelector('.subscriptions__tariffes-item--fullday');
  var telephoneInput = document.querySelector('input[type="tel"]');
  var nameInput = document.querySelector('input[type="text"]');

  var getWindowWidth = function () {
    return window.innerWidth || document.body.clientWidth;
  };

  var deactiveMonthButtons = function () {
    for (var i = 0; i < monthsButtons.length; i++) {
      if (monthsButtons[i].classList.contains('subscriptions__months-item--active')) {
        monthsButtons[i].classList.remove('subscriptions__months-item--active');
      }
    }
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
    });
  };
  var addListenersToExercizes = function () {
    if (exercizes) {
      for (var i = 0; i < exercizes.length; i++) {
        switchExercizeActiveClass(exercizes[i]);
        hoverActiveExercize(exercizes[i]);
      }
    }
  };
  var swipeTabletSchedule = function () {
    var initialPoint;
    var finalPoint;
    if (translateDaysWrapper && scheduleWrapper) {
      document.addEventListener('touchstart', function (evt) {
        evt.stopPropagation();
        initialPoint = evt.changedTouches[0];
      }, false);
      document.addEventListener('touchend', function (evt) {
        evt.stopPropagation();
        finalPoint = evt.changedTouches[0];
        var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
        if (xAbs > 20) {
          if (finalPoint.pageX < initialPoint.pageX) {
            translateDaysWrapper.style.transform = 'translateX(-459px)';
            scheduleWrapper.classList.add('schedule__wrapper--swiped-left');
          } else {
            translateDaysWrapper.style.transform = 'translateX(0)';
            scheduleWrapper.classList.remove('schedule__wrapper--swiped-left');
          }
        }
      }, false);
    }
  };

  // расписание мобильное
  var removeFirstDayClass = function () {
    if (scheduleDays) {
      for (var j = 0; j < scheduleDays.length; j++) {
        if (scheduleDays[j].classList.contains('schedule__day--first')) {
          scheduleDays[j].classList.remove('schedule__day--first');
          break;
        }
      }
    }
  };
  var selectRightDayAndCloseDaysList = function () {
    if (scheduleDays && scheduleButton && translateDaysWrapper) {
      for (var i = 0; i < scheduleDays.length; i++) {
        scheduleDays[i].addEventListener('click', function (evt) {
          removeFirstDayClass();
          evt.target.parentElement.classList.add('schedule__day--first');
          scheduleButton.classList.remove('schedule__button--on');
          translateDaysWrapper.classList.remove('schedule__days-translate-wrapper--open');
        });
      }
    }
  };
  var openDaysList = function () {
    if (scheduleButton && translateDaysWrapper) {
      scheduleButton.classList.toggle('schedule__button--on');
      translateDaysWrapper.classList.toggle('schedule__days-translate-wrapper--open');
    }
  };
  var scheduleButtonClickHandler = function () {
    openDaysList();
    selectRightDayAndCloseDaysList();
  };

  if (getWindowWidth() < 1199 && getWindowWidth() > 767) {
    swipeTabletSchedule();
  }

  if (getWindowWidth() < 767) {
    if (scheduleButton) {
      scheduleButton.addEventListener('click', scheduleButtonClickHandler);
    }
  }

  addListenersToExercizes();

  // небольшая валидация формы
  if (nameInput) {
    nameInput.addEventListener('input', function () {
      nameInput.setCustomValidity('');
      if (nameInput.validity.valid) {
        nameInput.setCustomValidity('');
      } else {
        nameInput.setCustomValidity('Введите свое имя, не используя цифры!');
      }
    });
  }

  if (telephoneInput) {
    telephoneInput.addEventListener('input', function () {
      telephoneInput.setCustomValidity('');
      if (telephoneInput.validity.valid) {
        telephoneInput.setCustomValidity('');
      } else {
        telephoneInput.setCustomValidity('Введите номер телефона без букв!');
      }
    });
  }

  window.main = {
    getWindowWidth: getWindowWidth
  };
})();
