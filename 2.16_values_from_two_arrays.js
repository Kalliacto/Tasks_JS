let array_1 = [2, 4, 7, 8, 1];
let array_2 = [2, 5, 11, 6, 1];

function intersection (array1, array2) {
    let result = [];

    for (i=0;i < array1.length; i++) {
        for (j=0;j < array2.length; j++) {
            if (array1[i] == array2[j]) {
               result.push(array2[j]); 
            }
        }
    }
   
    return result;
};

intersection(array_1, array_2);

//----------------------------------  
let array_1 = [2, 4, 7, 8, 1];
let array_2 = [2, 5, 11, 6, 1];

function intersection(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) == true) {
            result.push(array1[i]);
        }
    }
    return result;
}
intersection(array_1, array_2);

//----------------------------------  
let array_1 = [2, 4, 7, 8, 1];
let array_2 = [2, 5, 11, 6, 1];

function intersection (array1, array2) {
    let result = [];

    array1.forEach(function (element) {
        if (array2.includes(element) == true) {
            result.push(element);
}
    });
   
    return result;
};

intersection(array_1, array_2);
