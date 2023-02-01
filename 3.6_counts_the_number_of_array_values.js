Пример значений переменных:
let array = [
        [ "boolean", true ], 
        [ "number", 4 ],
        [ "string", "word" ],
        [ "object", {}]
    ]
    
Пример результата:
Количество строковых элементов в именованном массиве: 1

//----------------------------------------------------------------------
function countString(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
         if (typeof ((array[i])[1]) == "string")
            count +=1;
    }
    console.log("Количество строковых элементов в именованном массиве: " + count);
}
countString(array);
