let array = [[1,2,3],[1,2],[1,2,3,4]];

const sortArray = (arr) => {
    const sortArr = (a,b) => {
        if (a == b) return 0;
        if (a > b) return 1;
        if (a < b) return -1;
        }
    arr.sort(sortArr);
    console.log(arr);
};

sortArray(array);

// ----------------------------------


const compare = (a, b) => {
  if (a.length == b.length) return 0;
  if (a.length < b.length) return -1;
  if (a.length > b.length) return 1;
}

array.sort(compare);
