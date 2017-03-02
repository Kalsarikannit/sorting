
function mergeSort(input){

  if(input.length < 2){
    return input;
  }else{
    let index = Math.floor(input.length / 2);
    let left = mergeSort(input.slice(0,index));
    let right = mergeSort(input.slice(index));
    return merge(left, right);
  }

}

function merge(left, right){
  let arr = [];
  while(left.length > 0 && right.length > 0){
    console.log('left',left);
    console.log('right',right);
    console.log('arr',arr);
    if(left[0] < right[0]){
      arr.push(left.shift());
    }else{
      arr.push(right.shift());
    }
  }
  if(left.length === 0){
    arr = arr.concat(right);
  }else{
    arr = arr.concat(left);
  }
  console.log('return arr', arr);
  return arr;
}
