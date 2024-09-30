/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     const stack = [];
     const map = {
         '(': ')',
         '[': ']',
         '{': '}'
     };
 
     for (let i = 0; i < s.length; i++) {
         let char = s[i];
         
         if (map[char]) {
             // If it's an opening bracket, push to the stack
             stack.push(char);
         } else {
             // If it's a closing bracket, check if it matches the last opened one
             let last = stack.pop();
             if (map[last] !== char) {
                 return false;
             }
         }
     }
     return stack.length === 0;
};

function isValid(s) {
     
 }
 
 module.exports = { isValid };
 



