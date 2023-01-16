let users = [
    {login: "user1", role: "Admin"},
    {login: "user2", role: "State user"},
    {login: "user3", role: "Moderator"},
    {login: "user2", role: "State user"},
];
//Поиск количества элементов содержащих более 1 слова

function findfMoreThanOneWord (vulue) {
    let countResult = 0;
    for(let i = 0; i < vulue.length; i++) {
        if (((vulue[i].role).split(' ')).length > 1) {
        countResult++;
        }
    }
        
    console.log(countResult);
};
findfMoreThanOneWord (users);


//Поиск индекса элемента содержего более 1 слова

function findfMoreThanOneWord (vulue) {
    for(let i = 0; i < vulue.length; i++) {
        if (((vulue[i].role).split(' ')).length > 1) {
            console.log(vulue.indexOf(vulue[i]));
        }
    }
};
findfMoreThanOneWord (users);
