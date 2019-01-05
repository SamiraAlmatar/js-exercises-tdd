function removeMiddle(words){
    var array = [];
    index = (words.length -1 )/ 2 ;
    array.push(words[index]);
    words.splice(index,1);
    return array;
}
 
module.exports = removeMiddle;