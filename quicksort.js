function quickSort(array, func){
  if(array.length<2)return array;

  if (!func)func = function(a, b){return a - b};
  let pivot = array[0];
  //make a better pivot if time permits
  let left = [];
  let right = [];
  console.log(pivot);
    for (let i = 1;i < array.length;i++){
      if (func(pivot, array[i]) > 0){
      //array item is less than pivot
        left.push(array[i]);
      } else {
      //array item is more than or equal to pivot
        right.push(array[i]);
      }

    }
    left.push(array[0]);
    quickSort(left,func);
    quickSort(right,func);
    console.log(left.concat(right));
    return left.concat(right);

}
