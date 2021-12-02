import { lesson01 } from './data/data_lesson01.js';
import { lesson02 } from './data/data_lesson02.js';
import { lesson03 } from './data/data_lesson03.js';
import { lesson04 } from './data/data_lesson04.js';
import { lesson05 } from './data/data_lesson05.js';
import { lesson06 } from './data/data_lesson06.js';
import { wordsGenerator } from './common/wordsGenerator.js';
import { songBlockGenerator } from './common/songBlockGenerator.js';
import { playSong } from './common/playSong.js';
import { tableGenerator } from './common/tableGenerator.js';

const startLesson = (lesson) => {
  tableGenerator(lesson);
  wordsGenerator(lesson);
  songBlockGenerator(lesson);
  playSong(lesson);
};

startLesson(lesson01);

const allLessonsObj = {
  lesson_01: ['lesson1_btn', lesson01, 'Урок 1'],
  lesson_02: ['lesson2_btn', lesson02, 'Урок 2'],
  lesson_03: ['lesson3_btn', lesson03, 'Урок 3'],
  lesson_04: ['lesson4_btn', lesson04, 'Урок 4'],
  lesson_05: ['lesson5_btn', lesson05, 'Урок 5'],
  lesson_06: ['lesson6_btn', lesson06, 'Урок 6'],
};

const startAllLesson = (lessons) => {
  const btnsContainer = document.querySelector('.next_btn__container');
  Object.values(lessons).forEach((el, i) => {
    btnsContainer.innerHTML += `
      <button class="${el[0]}">${el[2]}</button>
    `;
    btnsContainer.addEventListener('click', (e) => {
      if (el[0] === e.target.classList.value) {
        startLesson(el[1]);
      }
    });
    // console.log(e.target.classList.value);
    // document.querySelector(`.${el[0]}`).addEventListener('click', () => {
      //   startLesson(el[1]);
      // });
    });
};

startAllLesson(allLessonsObj);