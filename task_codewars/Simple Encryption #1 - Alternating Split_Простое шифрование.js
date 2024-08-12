Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.


function encrypt(text, n) {
    if (!text || n <= 0) return text;

    let answer = text;

    for (let j = 0; j < n; j++) {
        let odd = [],
            even = [];
        for (let i = 0; i < answer.length; i++) {
            i % 2 === 0 ? even.push(answer[i]) : odd.push(answer[i]);
        }
        answer = odd.concat(even).join('');
    }

    return answer;
}
//------------------------------------------------------------------------
function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;

    let answer = encryptedText;

    for (let j = 0; j < n; j++) {
        let middleStr = Math.floor(answer.length / 2),
            onePart = answer.slice(0, middleStr),
            twoPart = answer.slice(middleStr),
            result = '';

        for (let i = 0; i < twoPart.length; i++) {
            result += twoPart[i] + (onePart[i] ?? '');
        }
        answer = result;
    }

    return answer;
}
