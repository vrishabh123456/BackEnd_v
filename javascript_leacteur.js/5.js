/* 
    string => collection of charaters (array)
*/
let txt;
let str = "hello wolrd";
str = 'skill qode'

txt = "hello guys'what is name"
txt = 'hello guys"what is name'

console.log(txt);

/*
  string methos
  length ->property
  slice(start position, and position)
  substring(start position, and position)
  substr(start position, length)
  toUppercase -> upper case convert
  toLowercase -> lower case convert
  charAt -> return index charater
  charcodeAt -> return index charater ASCII value
  concat -> merge two string 
*/

//let data = "javascript isn the world's most popular programming language."

// console.log (data.length)

// console.log (data.sline(5,12));          // cript i
// console.log (data.slice(25));            // staring to rest of all string
// console.log (data.slice(-12,-3));        // last to counting

// console.log (data.substring(5,12));      // cript i 
// console.log (data.substring(25));        // staring to rest of all string
// console.log (data.substring(-12));       // counting to 0
// console.log (data.substring(-12,5))      // counting to 0

// // console.log(data.substr(5,12));       // cript is the
// console.log(data.substr(-15,12));        // mming langua

// console.log (data.toUppercase());
// console.log (data.toUppercase());

// console.log (data.charAt(0));
// console.log (data.chaecodeat(0));

// console.log (data.concat("hello wolrd","\n skillqode"));


let data = "javascript isn the world's most popular programming language."

// console.log(data.replace("world", "skillqode"))
// console.log(dara.replace(/world/i, "skillqode"))

// console.log(dara.seplaceall("world","skillqode"))

// let txt = "         hello world            ";
// console.log(txt);
// console.log(txt.trim());           // remove extra space
// console.log(txt.trimstart());        // remove extra space form start
// console.log(txt.trimEnd());        // remove extra space form end
// console.log("length is: "+(txt.trimend()).length);

// let txt = "1234" ;
// console.log(txt.padstart(8,"-"))
// console.log(txt.padend(8,"*"))

// console.log(data.split("a"))