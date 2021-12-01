import { getRndInteger } from '../common/randomIntegers.js';

export const lesson03 = {
  table: {
    lesson: 'lesson_03',
    lessonName: 'Урок 3',
    lessonTheme: 'Притяжательные местоимения*',
    moreInformation: [
      '*В хинди они склоняются (т.е. меняют конечный гласный) по роду, числу и падежу:',
      'мой отец -	मेरा पिता',
      'мои братья	- मेरे भाई',
      'моя мать	- मेरी माता',
      'мои сёстры	- मेरी बहनें',
    ],
    lines: [
      ['', 'Ед. ч.', '', 'Мн. ч.', ''],
      ['1. лицо', 'मैं:', 'मेरा', 'हम:', 'हमारा'],
      ['2. лицо', 'तू:', 'तेरा', 'तुम:', 'तुम्हारा'],
      ['', '', '', 'आप:', 'आपका'],
      ['3. лицо', 'यह:', 'इसका', 'ये:', 'इनका'],
      ['', '	वह:', 'उसका', 'वह:', 'उनका'],
    ],
    playableWordsPosition: [
      11, 12, 13, 14, 21, 22, 23, 24, 33, 34, 41, 42, 43, 44, 51, 52, 53, 54,
    ],
    songNames: [
      'me',
      'mera',
      'ham',
      'hamara',
      'tu',
      'tera',
      'tum',
      'tumhara',
      'ap',
      'apka',
      'yeh',
      'iska',
      'ye',
      'inka',
      'vah',
      'uska',
      'vah',
      'unka',
    ],
  },
  song: {
    link: 'audio_lesson_03/03_are_yeh_kya_kiya_tune',
    name: 'are_yeh_kya_kiya',
    start: 0,
    end: 28.2,
    linesStart: [1, 12, 19, 23.5],
    textLinesHindi: [
      'तेरे दर से ख़ुशी माँगी',
      'मगर ग़म दे दिया तूने',
      'अरे यह क्या किया तूने',
      'अरे यह क्या किया तूने',
    ],
    textLinesTranscripton: [
      'tere dar se k͟huśī mām̐gī',
      'magar ġam de diyā tūne',
      'are ye kyā kiyā tūne',
      'are ye kyā kiyā tūne',
    ],
    textLinesTranslaton: [
      'Просила у твоей двери счастья,',
      'но ты мне дал печаль,',
      'ну что же ты натворил,',
      'ну что же ты натворил.',
    ],
  },
  vocabulary: {
    lesson: 'lesson_03',
    words: [
      'नये शब्द',
      'आँगन',
      'आगे',
      'आँचल',
      'आज',
      'आते ही',
      'आत्मा',
      'आरती',
      'आरती उतारना',
      'आराम',
      'आलम',
      'आशिक़ी',
      'आस',
    ],
    wordsTranscription: [
      'naye śabd',
      'ām̐gan',
      'āge',
      'ām̐cal',
      'āj',
      'āte hī',
      'ātmā',
      'ārtī',
      'ārtī utārnā',
      'ārām',
      'ālam',
      'āśiqī',
      'ās',
    ],
    wordsTranslaton: [
      'Новые слова',
      'двор',
      'дальше, далее, впереди, спереди',
      'подол, край сари',
      'сегодня',
      '(сразу же) придя',
      'душа',
      '«арти», индуистский обряд приветствия',
      'совершать обряд «арти», приветствовать кого л. этим обрядом',
      'отдых',
      'мир, вселенная',
      'любовь',
      'надежда',
    ],
    wordsMP3: [
      'naye_shabd',
      'agan',
      'age',
      'achal',
      'aj',
      'ate_hi',
      'atma',
      'arti',
      'arti_utarna',
      'aram',
      'alam',
      'ashiki',
      'as',
    ],
    id: [
      Date.now() + getRndInteger(0, 100),
      Date.now() + getRndInteger(0, 100),
      Date.now() + getRndInteger(0, 100),
      Date.now() + getRndInteger(0, 100),
      Date.now() + getRndInteger(0, 100),
      Date.now() + getRndInteger(0, 100),
      Date.now() + getRndInteger(0, 100),
      Date.now() + getRndInteger(0, 100),
      Date.now() + getRndInteger(0, 100),
      Date.now() + getRndInteger(0, 100),
      Date.now() + getRndInteger(0, 100),
      Date.now() + getRndInteger(0, 100),
      Date.now() + getRndInteger(0, 100),
    ],
  },
};

// export default lesson02;
