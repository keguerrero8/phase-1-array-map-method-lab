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

// const titleCasedd = () => {
//   const titlecased = tutorials.map( function (sentence) {   
//     const words =  sentence.split(" ")
//     const titleWords = []
//     for (const word of words) {
//       titleWords.push(word[0].toUpperCase() + word.substr(1))
//     }
//     return titleWords.join(" ")
//     })
// }

// const titleCased

const titleCased = () => {
  const array = tutorials.map(element => 
    element.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
  )
  return array;
}






// //here we are assuming that we are recieving the sentence
// function titleCased(sentence) {
//   const words =  sentence.split(" ")
//   const titleWords = []
//   for (const word of words) {
//     titleWords.push(word[0].toUpperCase() + word.substr(1))
//   }
//   return titleWords.join(" ")
// }



