//import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form')
form.addEventListener('submit', onSubmitForm)

function onSubmitForm(e) {
  e.preventDefoult()
  const amountValue = parseInt(e.currentTarget.amount.value);
  const stepValue = parseInt(e.currentTarget.step.value);
  let delayValue = parseInt(e.currentTarget.delay.value);


for (let position = 1; position <= amountValue; position + 1) {

 delayValue += position === 1 ? 0  : stepValue;
 createPromise({ position, delay })
 .then(({ position, delay }) => {
   Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
 })
 .catch(({ position, delay }) => {
   Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
 });

}
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        PromiseRejectionEvent({ position, delay })
      }
    },delay)
  }
  )
  
}
//Напиши скрипт, который при сабмите формы вызывает 
//функцию createPromise(position, delay) столько раз,
//сколько ввели в поле amount. При каждом вызове 
//передай ей номер создаваемого промиса (position)
// и задержку учитывая введенную пользователем первую задержку (delay) и шаг (step).

//Дополни код функции createPromise так, чтобы она возвращала один промис,
// который выполянется или отклоняется через delay времени. 
//Значением промиса должен быть объект, в котором будут свойства position и delay
// со значениями одноименных параметров. Используй начальный код функции
// для выбора того, что нужно сделать с промисом - выполнить или отклонить.
