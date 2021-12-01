import { lesson01 } from './data/data_lesson01.js';
import { lesson02 } from './data/data_lesson02.js';
import { lesson03 } from './data/data_lesson03.js';
import { wordsGenerator} from './common/wordsGenerator.js';
import { songBlockGenerator } from './common/songBlockGenerator.js';
import { playSong } from './common/playSong.js';
import { tableGenerator } from './common/tableGenerator.js';

const startLesson = (lesson) => {
  tableGenerator(lesson);
  wordsGenerator(lesson);
  songBlockGenerator(lesson);
  playSong(lesson);
};

startLesson(lesson03);

const lesson1Btn = document.querySelector('.lesson1_btn')
lesson1Btn.addEventListener('click', () => {
  startLesson(lesson01);
});
const lesson2Btn = document.querySelector('.lesson2_btn')
lesson2Btn.addEventListener('click', () => {
  startLesson(lesson02);
});
const lesson3Btn = document.querySelector('.lesson3_btn')
lesson3Btn.addEventListener('click', () => {
  startLesson(lesson03);
});