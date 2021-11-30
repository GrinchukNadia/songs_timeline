export const songBlockGenerator = ({ song }) => {
  const songContainer = document.querySelector('.song_container');

  const player = `
    <audio 
      id='${song.name}' 
      controls 
      src="audio/${song.link}.mp3" 
      preload="auto"
    ></audio>
  `;

  const lyricsLines = song.textLinesHindi.map((el, i) => {
    return `
    <div class="song_line">
      <div>
        <button class="word" id="${
          song.textLinesTranscripton[i].split(' ').join('_') + i
        }">${el}</button
        >
        <div>${song.textLinesTranscripton[i]}</div>
      </div>
      <div>${song.textLinesTranslaton[i]}</div>
    </div>
    `;
  });

  songContainer.innerHTML =
    player + '<div class="lyrics_list">' + lyricsLines.join(' ') + '</div>';
};