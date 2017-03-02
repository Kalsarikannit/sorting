function swap(a, b){
  const buf = a;
  a = b;
  b = buf;
}

function bubbleSort(input){
  let counter = 0;

  for (let j = 0;j < input.length;j++){
    for (let i = 0;i < input.length - 1 - j;i++){
      if (input[i] > input[i + 1]){
        //console.log(input);
        const buf = input[i];
        input[i] = input[i + 1];
        input[i + 1] = buf;
        console.log(input);
      }
    }
  }
  return input;
}
