export const wordsGenerator = ({ vocabulary }) => {
  const wordsContainer = document.querySelector('.new_words__container');

  const result = vocabulary.words.map((el, i) => {
    return `
      <div class="new_words__line">
            <div class="new_words__word">
              <audio id="${vocabulary.wordsMP3[i]}" src="audio/audio_${vocabulary.lesson}/${vocabulary.wordsMP3[i]}.mp3" preload="auto"></audio>
              <button
                class="word"
                onclick="document.getElementById('${vocabulary.wordsMP3[i]}').play();"
              >
                ${el}
              </button>
            </div>
            <div class="new_words__word">${vocabulary.wordsTranscription[i]}</div>
            <div class="new_words__word">${vocabulary.wordsTranslaton[i]}</div>
          </div>
    `;
  });
  wordsContainer.innerHTML = result.join('');
};