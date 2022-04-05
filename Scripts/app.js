import {library} from "./data.js"

export const translate = (input) => {
 if (!input) {
   return "Please type a sentence"
 } else {
   const splitInput = input.toLowerCase().split("");
   let result = ""
   splitInput.forEach(letter => {
     if (!result) {
      result += `${library[letter]}`;
     } else {
     result += ` ${library[letter]}`;
     }
   })
   return result;
 }
}
