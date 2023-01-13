layout =  "<div>10<span>14<p>25<p>39<p>8<p>101</p></p></p></p></span></div>";
let regex =/[<\D*>]/;
let numberlist = layout.split(regex);
let newpn = [];

function printArray(numberlist) {
  	for (let index = 0; index < numberlist.length; index++) {
    		if (typeof Number(numberlist[index]) === "number" && Number(numberlist[index]) >0){
			    newpn.push(Number(numberlist[index]));
		}
  	}
  	const changeArray = [];
  	for (let index = 0; index < newpn.length; index++) {
  	    if ((newpn[index]%2) != 0) {
  	        changeArray.push(newpn[index]);
  	    }
  	    else {
  	        changeArray.push((newpn[index])**2);
  	    }
  	}
	console.log(changeArray);
}
printArray(numberlist);

// Мой вариант через методы короче
let layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>";
let regex =/[<\D*>]/;
let numberlist = layout.split(regex).filter(item => item !== '');
// console.log(numberlist); Проверка
let newLayout = numberlist.map((e) => {
    if (e % 2 == 0) {
      return  e ** 2;
    } else {
        return  +e;
    }
})
console.log(newLayout);
