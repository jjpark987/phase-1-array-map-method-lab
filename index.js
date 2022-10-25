const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newTutorials = tutorials.map(function(title) {
    const arrayOfWords = title.split(` `);

    const newArrayOfWords = arrayOfWords.map(function(word) {
        const finalWord = word[0].toUpperCase() + word.slice(1);
        return finalWord;
    });

    let finalTitle = ``;

    for(let i = 0; i < newArrayOfWords.length; i++) {
      if(i != newArrayOfWords.length - 1) {
        finalTitle += `${newArrayOfWords[i]} `;
      } else {
        finalTitle += newArrayOfWords[i];
      }
    };

    return finalTitle;
  });
  
  return newTutorials;
}