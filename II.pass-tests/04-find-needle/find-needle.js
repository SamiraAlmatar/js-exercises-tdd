function findNeedle(words) {
 for(var i =0; i < words.length; i++){
     if(words[i] === 'needle'){
         return i;
     }
 }
}

module.exports = findNeedle;