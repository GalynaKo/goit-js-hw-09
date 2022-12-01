//Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body>
// на случайное значение используя инлайн стиль. При нажатии на кнопку «Stop»,
// изменение цвета фона должно останавливаться.

 const refs = {
  startBtn: document.querySelector('[data-start]'),
 stopBtn: document.querySelector('[data-stop]'),
 body: document.querySelector('body')

 }
 
 //Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }

//Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна (disabled).
//
//change its color
let color;
// function start
 const startOn = () => {
  color = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();//come arrivare al bgColor e cambiarlo

  },1000)
  refs.startBtn.setAttribute('disabled', true);
}
const stopOn = () => {
  refs.startBtn.disabled = false;

  clearInterval(color);
  
};

refs.startBtn.addEventListener('click', startOn);
refs.stopBtn.addEventListener('click', stopOn);


 