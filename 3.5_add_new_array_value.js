Пример значений переменных:

employee  = [
    ["firstName", "Ivan"], 
    ["lastName", "Ivanov"],
    ["hireDate", "21.10.2015"]
]

Пример результата:
[
    ["firstName", "Ivan"], 
    ["lastName", "Ivanov"],
    ["jobName", "IT PROG"]
]


//-----------------------------------------------------
let employee  = [["firstName","Ivan"],["hireDate","21.10.2015"],["hireDate","21.10.2015"]];


function foo(arr) {

 for (let i = 0; i < arr.length; i++) {
         if (((arr[i])[0]) == "hireDate"){
            arr.pop(arr[i]);
         }
    }
     for (let i = 0; i < arr.length; i++) {
         if (((arr[i])[0]) == "hireDate"){
            arr.pop(arr[i]);
         }
    }
        arr.push(["jobName", "IT PROG"]);

    return arr;
}

 console.log(foo(employee));
