function swap(a, b){
  const buf = a;
  a = b;
  b = buf;
}

function bubbleSort(input, func){
  let counter = 0;
  if(!func){
    func = compareTo;
  }

  for (let j = 0;j < input.length;j++){
    for (let i = 0;i < input.length - 1 - j;i++){
      if (func(input[i], input[i + 1]) > 0){// input[i] > input[i+1]
        const buf = input[i];
        input[i] = input[i + 1];
        input[i + 1] = buf;
      }
    }
  }
  return input;
}


function compareTo(p1, p2){
  if(typeof p1 === 'number' && typeof p2 === 'number')return p1-p2;
  else{
    //return p1.charCodeAt(0) - p2.charCodeAt(0);
    for(let i = 0; i < Math.floor(Math.min(p1.length, p2.length)); i++){
      if(p1[i] !== p2[i]){
        return p1.charCodeAt(i) - p2.charCodeAt(i);
      }
    }
    return p1.length - p2.length;
  }
}


var a = 'a'
var b = 'b'

console.log(a-b);
