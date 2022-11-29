//Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body>
// на случайное значение используя инлайн стиль. При нажатии на кнопку «Stop»,
// изменение цвета фона должно останавливаться.
const startBtn = document.querySelector('.data-start');
const stopBtn = document.querySelector('.data-stop');

startBtn.addEventListener('click', () =>{
  getRandomHexColor = setInterval(() => {
console.log('startBtn');
  },1000);
})
stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  //console.log(`Interval with id ${timerId} has stopped!`);
});
//Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна (disabled).
//const handleClick = () => {
 // console.log("Button was clicked");
//};

//button.addEventListener("click", handleClick);
//Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }

 