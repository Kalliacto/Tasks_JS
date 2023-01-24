let dates = "23.04.1996 07.10.2002 15.08.1945";
let newDate = dates.split(" ");
let newDateTwo = [];

for (let i = 0; i < newDate.length; i++) {
    newDateTwo.push(newDate[i].split(".").join("/"));
}

console.log(newDateTwo);
