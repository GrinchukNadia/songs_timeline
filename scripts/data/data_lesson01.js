import { getRndInteger } from '../common/randomIntegers.js';

export const lesson01 = {
  table: {
    lesson: 'lesson_01',
    lessonName: 'Урок 1',
    lessonTheme: 'Личные местоимения',
    moreInformation: [
      '*Вместо वे в современном языке чаще используется местоимение ед.ч. वहvo.',
    ],
    lines: [
      ['', 'Ед. ч.', '', 'Мн. ч.', ''],
      ['1. лицо', 'मैं', 'я', 'हम', 'мы (часто в поэзии: я)'],
      [
        '2. лицо',
        'तू',
        'ты (невежливое или очень интимное обращение)',
        'तुम',
        'ты, вы (обращение к равным)',
      ],
      ['', '', '', 'आप', 'Вы (вежливое обращение)'],
      ['3. лицо', 'यह', 'он, она, оно (вблизи)', 'ये', 'они (вблизи)'],
      ['', 'वह', 'он, она, оно (вдалеке)', 'वे*', 'они (вдалеке)'],
    ],
    playableWordsPosition: [11, 13, 21, 23, 33, 41, 43, 51, 53],
    songNames: ['me', 'hum', 'tu', 'tum', 'ap', 'yeh', 'ye', 'vah', 've'],
  },
  song: {
    link: 'audio_lesson_01/01_Dil_Ki_Duniya_Basa_Ke_Sanwariya',
    name: 'dil_ki_duniya',
    start: 0,
    end: 60.2,
    linesStart: [34, 39, 43, 50, 54],
    textLinesHindi: [
      'दिल की दुनिया बसा के सावरिया',
      'दिल की दुनिया बसा के सावरिया',
      'तुम ना जाने कहा खो गए खो गए',
      'साथ रहना था सारी उमरिया',
      'दूर नज़रों से क्यों हो गए हो गए',
    ],
    textLinesTranscripton: [
      'dil kī duniyā basā ke sāṁvariyā',
      'dil kī duniyā basā ke sāṁvariyā',
      'tum na jāne kahām̐ kho gae kho gae',
      'sāth rehnā thā sārī umariyā',
      'dūr nazroṁ se kyoṁ ho gae ho gae',
    ],
    textLinesTranslaton: [
      'Похитив мое сердце, о мой Кришна,',
      'похитив мое сердце, о мой Кришна,',
      'ты неизвестно куда запропастился,',
      'нам хотелось быть вместе всю жизнь,',
      'так зачем же ты у меня сгинул с глаз долой?',
    ],
  },
  vocabulary: {
    quisletLing: 'https://quizlet.com/_apeirq?x=1qqt&i=1zuvh8',
    lesson: 'lesson_01',
    words: [
      'नए शब्द',
      'अक्सर',
      'अगर',
      'अठखेली',
      'अदा',
      'अदावत',
      'अदावत करना',
      'अधूरा',
      'अंधा',
      'बहरा',
      'अंधा-बहरा',
      'अंधेर',
      'अंधेरा',
    ],
    wordsTranscription: [
      'naye śabd',
      'aksar',
      'agar',
      'aṭhkhelī',
      'adā',
      'adāvat',
      'adāvat karnā',
      'adhūrā',
      'aṁdhā',
      'bæhrā',
      'aṁdhā-bæhrā',
      'aṁdher',
      'aṁdherā',
    ],
    wordsTranslaton: [
      'Новые слова',
      'часто',
      'если, коль',
      'веселье, кокетство',
      'выполнение, исполнение, оплата',
      'враждебность, ненависть',
      'враждовать, ненавидеть',
      'незаконченный, неполный',
      'слепой',
      'глухой',
      'слепо-глухой',
      'беззаконие, несправедливость, насилие',
      'тёмный, мрачный',
    ],
    wordsMP3: [
      'naye_shabd',
      'aksar',
      'agar',
      'atkheli',
      'ada',
      'adavat',
      'adavat_karna',
      'adhura',
      'andha',
      'behera',
      'andha_behra',
      'andhir',
      'andhera',
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
// export default lesson01