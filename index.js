function theBeatlesPlay(musicians,instruments){
var array=[]
  for(let i=0;i<musicians.length;i++){
  array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
function johnLennonFacts(array){
  while(array<array.length){
    array.push(`${array}!!!`)
  }return array
}
function iLoveTheBeatles(n){
  var last=[]
  var i = 0
   function incrementVariable() {
  i = i + 1;
  return i;
}
do {
  console.log("i love the beatles!");
} while (incrementVariable() < n);
}