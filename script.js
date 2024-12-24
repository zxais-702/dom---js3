// // Elementlarni tanlab olish
// const timerElement = document.getElementById('timer');
// const startButton = document.getElementById('start');
// const stopButton = document.getElementById('stop');
// const resetButton = document.getElementById('reset');

// let intervalId = null;
// let seconds = 0;

// // Vaqtni formatlash funksiyasi
// function formatTime(sec) {
//   const hrs = Math.floor(sec / 3600);
//   const mins = Math.floor((sec % 3600) / 60);
//   const secs = sec % 60;
//   return `${hrs.toString().padStart(2, '0')}:``${mins.toString().padStart(2, '0')}:``${secs.toString().padStart(2, '0')};`
// }

// // Timerni yangilash funksiyasi
// function updateTimer() {
//   timerElement.textContent = formatTime(seconds);
// }

// // Start tugmasi bosilganda
// startButton.addEventListener('click', () => {
//   if (!intervalId) {
//     intervalId = setInterval(() => {
//       seconds++;
//       updateTimer();
//     }, 1000);
//   }
// });

// // Stop tugmasi bosilganda
// stopButton.addEventListener('click', () => {
//   clearInterval(intervalId);
//   intervalId = null;
// });

// // Reset tugmasi bosilganda
// resetButton.addEventListener('click', () => {
//   clearInterval(intervalId);
//   intervalId = null;
//   seconds = 0;
//   updateTimer();
// });
// Выбор элементов
// const timerelement = document.getElementById ('таймер');
// const startbutton = document.getElementById ('start');
// const stopbutton = document.getElementById ('stop');
// const resetbutton = document.getElementById ('сброс');

// let intervalId = null;
// let seconds = 0;

// // Функция форматирования времени
// function formattime(sec) {
//  const hrs = Math.пол(sec / 3600);
//  const mins = Math.пол ((sec % 3600) / 60);
//  const secs = 60% sec;
//  return ${hrs.toString ().padStart(2, '0')}:${Минс.toString ().padStart(2, '0')}:${secs.toString ().padStart (2, '0')};
// }

// // Функция обновления таймера
// function updatetimer () {
//  timerElement.textContent = formattime (секунды);
// }

// / При нажатии / Start
// startButton.addEventListener ('click', () = > {
//  если (!интервал) {
//  intervalId = setInterval (() = > {
//  ++seconds;
//  updateTimer();
//  }, 1000);
//  }
// });

// / Когда кнопка / Stop нажата
// stopButton.addEventListener ('click', () = > {
//  clearInterval(интервал);
//  интервал = null;
// }
