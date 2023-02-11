Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

//-------------------------------------
function removeEveryOther(arr){
let i = 0;
 while (arr[i] +1) {
   arr.splice(i+1,1);
    i++;
 }

return arr;
}

//-------------------------------------

function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}

removeEveryOther([1,2,3,4,5,6,76])
