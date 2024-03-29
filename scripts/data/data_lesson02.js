import { getRndInteger } from '../common/randomIntegers.js';

export const lesson02 = {
  table: {
    lesson: 'lesson_02',
    lessonName: 'Урок 2',
    lessonTheme: 'Глагольная связка*',
    moreInformation: [
      '*В русском она опускается, в хинди — нет, сравни:',
      'Я — Рам. (т.е. «я есть Рам.») <br/> मैं राम हूँ। (букв. «я Рам есть.»)',
      '**Так как в хинди у местоимений третьего лица ед.ч. нет различий в роде, то в будущем для всех родов в русском (он, она, она) буду пользоваться только одной, мужской формой местоимения «он», что бы избежать повторений, например:',
      'я есть, ты есть, <b>он есть</b>, мы есть, вы есть, Вы есть, они есть (а не: он, она, оно есть).',
    ],
    lines: [
      ['', 'Ед. ч.', '', 'Мн. ч.', ''],
      ['1. лицо', 'मैं हूँ', 'я есть', 'हम हैं', 'мы есть'],
      ['2. лицо', 'तू है', 'ты есть', 'तुम हो', 'ты, вы есть'],
      ['', '', '', 'आप हैं', 'Вы есть'],
      ['3. лицо', 'यह है', 'он, она, оно есть**', 'ये हैं', 'они есть'],
      ['', 'वह है', '', 'वह हैं', ''],
    ],
    playableWordsPosition: [11, 13, 21, 23, 33, 41, 43, 51, 53],
    songNames: [
      'me_hu',
      'hum_he',
      'tu_he',
      'tum_ho',
      'ap_he',
      'yeh_he',
      'ye_he',
      'vah_he',
      'vah_hen',
    ],
  },
  song: {
    link: 'audio_lesson_02/02_Dard_Jaga_Ke_Thes_Lagake',
    name: 'dard_jaga_ke',
    start: 0,
    end: 50.2,
    linesStart: [25, 31, 37, 43],
    textLinesHindi: [
      'दर्द जगा के ठेस लगा के',
      'चले गए वह चले गए',
      'नैनों में समा के मन तड़पा के',
      'चले गए वह चले गए ',
    ],
    textLinesTranscripton: [
      'dard jagā ke ṭhes lagā ke',
      'cale gae vo cale gae',
      'nainoṁ meṁ samā ke man taṛpā ke',
      'cale gae vo cale gae',
    ],
    textLinesTranslaton: [
      'Разбудив во мне боль, наносивши мне удар,',
      'он ушёл, он ушёл.',
      'Заполнив мой кругозор собой, дав сердцу трепетать,',
      'он ушёл, он ушёл.',
    ],
  },
  vocabulary: {
    quisletLing: 'https://quizlet.com/_apeirq?x=1qqt&i=1zuvh8',
    lesson: 'lesson_02',
    words: [
      'नए शब्द',
      'अन्तर',
      'अपना ',
      'अब',
      'अब तक',
      'अब तो',
      'अमानत',
      'अरमान',
      'अल्हड़',
      'आना',
      'आ जाना',
      'आइना ',
      'आँख',
    ],
    wordsTranscription: [
      'naye śabd',
      'antar',
      'apnā',
      'ab',
      'ab tak',
      'ab to',
      'amānat',
      'armān',
      'alhaṛ',
      'ānā',
      'ā jānā',
      'āinā',
      'āṁkh',
    ],
    wordsTranslaton: [
      'Новые слова',
      'разница, отличие',
      'свой, собственный',
      'сейчас, теперь',
      'до сих пор',
      'ну а теперь',
      'залог, заложенная вещь',
      'мечта',
      'беззаботный, глупый',
      'приходить',
      'придти',
      'зеркало',
      'глаз, око',
    ],
    wordsMP3: [
      'naye_shabd',
      'antar',
      'apna',
      'ab',
      'ab_tak',
      'ab_to',
      'amanat',
      'arman',
      'alhar',
      'ana',
      'a_jana',
      'aina',
      'akh',
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
