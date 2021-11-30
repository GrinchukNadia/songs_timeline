import { generateGrammarStructure } from '../common/generateGrammarStructure.js';

export const tableGenerator = ({ table }) => {
  const grammarContaner = document.querySelector('.grammar__container');
  grammarContaner.innerHTML = generateGrammarStructure(table);

  const tableEl = document.querySelector('.gramma_table');

  const sres = table.lines.reduce((acc, el, i) => {
    const result = el.map((cellText, index) => {
      return `
          <div class="table_cell" data-cell="${i}${index}">${cellText}</div>
      `;
    });
    return [...acc, result.join('')];
  }, []);

  const res = sres.map((el, i) => {
    return `
      <div class="table_line" data-line="${i}">${el}</div>
    `;
  });

  tableEl.innerHTML = res.join('');

  table.playableWordsPosition.forEach((position, i) => {
    document.querySelector(`[data-cell="${position}"]`).innerHTML = `
     <audio id="${table.songNames[i]}" src="audio/audio_${table.lesson}/${
      table.songNames[i]
    }.mp3" preload="auto"></audio>
      <button
        class="word"
        onclick="document.getElementById('${table.songNames[i]}').play();"
      >
        ${document.querySelector(`[data-cell="${position}"]`).textContent}
      </button>
    `;
  });
};
