export const generateGrammarStructure = (table) => {
  const annotation = table.moreInformation.map((el) => `<div>${el}</div>`);
  return `
    <h1 class="lesson_number">${table.lessonName}</h1>
    <h3 class="lesson_grammar">Грамматика</h3>
    <div class="lesson_theme">${table.lessonTheme}</div>
    <div class="gramma_table"></div>
    <div class="annotation">${annotation.join(' ')}</div>
  `;
};