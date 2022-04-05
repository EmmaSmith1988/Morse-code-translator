const library = {
 a: ".-",
 b: "-...",
 c: "-.-.",
 d: "-..",
 e: ".",
 f: "..-.",
 g: "--.",
 h: "....",
 i: "..",
 j: ".---",
 k: "-.-",
 l: ".-..",
 m: "--",
 n: "-.",
 o: "---",
 p: ".--.",
 q: "--.-",
 r: ".-.",
 s: "...",
 t: "-",
 u: "..-",
 v: "...-",
 w: ".--",
 x: "-..-",
 y: "-.--",
 z: "--..",
 ' ': "/"
}

// export const translate = (input) => {
//  if (!input) {
//    return "Please type a sentence"
//  } else {

//  }
// }

const splitInput = "hello world".split("")
console.log(splitInput);
let result = ""
splitInput.forEach(letter => {
  result += `${library[letter]} `;
})
console.log(result);
