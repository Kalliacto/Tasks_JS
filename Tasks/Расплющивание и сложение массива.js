const arr = [[3,4, [2,3]], [], [5, [1,2]]];

function flatSum(n) {
    let res = [];

    n.forEach(item => {
        if(Array.isArray(item)) {
            res = res.concat(flat(item));
        } else {
            res += item;
        }
    })
        
    return res.reduce((acc,next) => acc+ next);
}

console.log(flatSum(arr))
