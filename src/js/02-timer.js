import flatpickr from "flatpickr";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
dataInput: document.querySelector('#datetime-picker'),
startBtn: document.querySelector('[data-start]'),
timeValue: document.querySelector('.value')
}

refs.startBtn.addEventListener('click', onClickStart)

function onClickStart() {
  timer.start() 
} 

let momentTime = null;


  const timer = {
   intervalId: null,
   isActive:false,
   start() {
    if( this.isActive)return;
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now()
      const deliteTime = momentTime - currentTime;
      console.log(deliteTime)
      convertTime = convertMs(deliteTime);
      changeHtmlValues(convertTime)
      console.log(this.intervalId)
    }, 1000)
   }
}



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

const flatpickr = flatpickr('datetime-pickera', options);


  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
//Напиши скрипт таймера, который ведёт обратный отсчет до определенной даты.
// Такой таймер может использоваться в блогах и интернет-магазинах,
// страницах регистрации событий, во время технического обслуживания и т. д. 

//Добавь минимальное оформление элементов интерфейса.

//Функция convertMs() возвращает объект с рассчитанным оставшимся временем до конечной даты. Обрати внимание, что она не форматирует результат. То есть, если осталось 4 минуты или любой другой составляющей времени, то функция вернет 4, а не 04. В интерфейсе таймера необходимо добавлять 0 если в числе меньше двух символов. Напиши функцию addLeadingZero(value), которая использует метод метод padStart() и перед отрисовкой интефрейса форматируй значение.
//Для отображения уведомлений пользователю вместо window.alert() используй библиотеку notiflix.