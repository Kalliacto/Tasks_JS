let values = ["Строка",true,"Число","Объект","Не число",false,"Не объект"];

function newArray(array) {
    const index0 = array.indexOf(true);
    const lastIndex0 = array.lastIndexOf(true);
    const index1 = array.indexOf(false);
    const lastIndex1 = array.lastIndexOf(false);
    let newValues = [];
    for (let i = index0; i < lastIndex1+1; i++) {
        newValues.push(array[i]);
    }
    console.log(newValues);
}
newArray(values);
