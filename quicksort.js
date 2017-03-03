// function quickSort(array, func){
//   if(array.length<2)return array;
//
//   if (!func)func = function(a, b){return a - b};
//   let pivot = array[0];
//   //make a better pivot if time permits
//   let left = [];
//   let right = [];
//   console.log(pivot);
//     for (let i = 1;i < array.length;i++){
//       if (func(pivot, array[i]) > 0){
//       //array item is less than pivot
//         left.push(array[i]);
//       } else {
//       //array item is more than or equal to pivot
//         right.push(array[i]);
//       }
//
//     }
//     left.push(array[0]);
//     quickSort(left,func);
//     quickSort(right,func);
//     console.log(left.concat(right));
//     return left.concat(right);
//
// }

// driver method
function quickSort(array, func){
  if(!func){
    func = compareTo;
  }
  quickSort(array, 0, arr.length - 1, func);
}

// main quickSort method (use some extra parameters for recursive calls)
function quickSort(arr, left, right, func){

  if(arr.length > 1){

    var mid = pivotStrategy2(arr, left, right); // function call return pivot index (total 3 pivot selection functions made)
    var temp = partition(arr, left, right, mid); // partition the arr

    // recursive calls
    if(left < temp - 1){
      quickSort(arr,left,temp - 1);
    }
    if(temp < right){
      quickSort(arr, temp, right);
    }
  }
  return arr;
}

function partition(arr, left, right, mid){
  var pivot = arr[mid];
  //swap
  // var buf = arr[mid];
  // arr[mid] = arr[right];
  // arr[right] = buf;
  //
  // var temp = left;
  // for(var i = temp; i<= right - 1; i++){
  //   if(compareTo(arr[i],pivot)){
  //     //swap
  //     var buf = arr[i];
  //     arr[i] = arr[temp];
  //     arr[temp] = buf;
  //     temp++;
  //   }
  // }
  // //swap
  // var buf = arr[temp];
  // arr[temp] = arr[right];
  // arr[right] = buf;
  // return temp;

  while(left <= right){
    while(arr[left] < pivot){
      left++;
    }
    while(arr[right] > pivot){
      right--;
    }
    if(left <= right){
      //swap
      var buf = arr[left];
      arr[left] = arr[right]
      arr[right] = buf;

      left++;
      right--;
    }
  }
  return left;
}

function pivotStrategy1(arr, left, right){
  return left;
}

function pivotStrategy2(arr, left, right){
  var mid = Math.floor((left + right) / 2);
  return mid;
}

//TODO
function pivotStrategy3(arr, left, right){
  var mid = Math.floor(arr.length / 2);
  var h = arr[left];
  var t = arr[right];
  var m = arr[mid];

  if(true){
    return 0;
  }
  if(true){
    return 0;
  }
  if(true){
    return 0;
  }
  if(true){
    return 0;
  }
  if(true){
    return 0;
  }
  if(true){
    return 0;
  }else{
    return mid;
  }
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
