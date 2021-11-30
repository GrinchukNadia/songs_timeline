export const playSong = (lesson) => {
  const secondSong = document.querySelector(`#${lesson.song.name}`);

  secondSong.addEventListener('timeupdate', () => {
    if (Math.floor(secondSong.currentTime) === lesson.song.end) {
      secondSong.pause();
    }
  });

  const blockWithWords = document.querySelector('.lyrics_list');

  blockWithWords.addEventListener('click', (event) => {
    if (event.target.localName === 'button') {
      const timeId = event.target.id.slice(-1);
      secondSong.currentTime = lesson.song.linesStart[timeId];
      secondSong.play();
    }
  });
};