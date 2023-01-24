let tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140.";

function newObject(tickets) {
let tickets2 = tickets.slice(0, -1).split(". ");
let tickets3 = '';
let ticketsObject = {};

for (let item of tickets2) {
    tickets3 = item.split(": ");
    
    ticketsObject[tickets3[0].toLowerCase()] = tickets3[1].split(', ');
}};

newObject(tickets);

// Результат
// {
//     "train" : ["AV432", "FS452", "OE402"],
//     "airplane" : ["DR578", "JN1089", "NDK140"]
// }
