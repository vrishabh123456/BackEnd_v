let alph = prompt("enter alphabetic string :");

let r = alphabetic_string(alph);
console.log("normal string:",alph);
console.log("sorted string :",r);

function alphabetic_string(string)

{
    return string.split('').sort().join('');
}