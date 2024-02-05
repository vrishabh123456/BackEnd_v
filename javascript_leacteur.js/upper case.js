function capitalfitalletter(str)
{
   let words=str.split('');
   for(let i = 0; i < words.length; i++)
   {
      words[i]=words[i][0].uppercase()
   }
   let capitalizedstr = words.join('');
   return capitalizedstr;
}

let inputString