let words = ["Заказ", "Такси", "Доход"];

function countingPalindrome(array) {
    let result = [0, 0];
    
    words.forEach((element) => {
        element = element.toLowerCase();
        let newElement = element.toLowerCase().split("").reverse().join('');
        if (element === newElement) {
             result[0] += 1;
        } else {
            result[1] += 1;
        }
        
    });
    return result;
};

countingPalindrome(words);
