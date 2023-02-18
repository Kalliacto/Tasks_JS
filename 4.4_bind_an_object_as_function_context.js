let props = {
    name:'Анатолий',
    age:29,
    sayHi:()=>'привет'
};

function getValue() {
    console.log("Значения свойств объекта props (name: " + this.name + ", age: " + this.age + ")")
}

getValue = getValue.bind(props);
getValue();

//------------------------------2 вариант------------------------------
let s = 'Значения свойств объекта props ';
    function getValue(){
  if (Object.keys(props).length === 0) {
    s = s + '()';}
  for (let key in props) {
    if ((typeof props[key]) != "function") {
      if (s == 'Значения свойств объекта props '){
      s = s + `(${key}:`;
      s = s + ' ' + `${props[key]},`+ ' ';
      }
      else {
      s = s + `${key}:`;
      s = s + ' ' + `${props[key]}`+ ')';
      }
        }

    else if (s == 'Значения свойств объекта props ()') {
      s = s;
    }
    else if (s == 'Значения свойств объекта props '){s = s + '()';}


  }
  console.log(s);
}
getValue = getValue.call(props);

//-------------------------------3 вариант мой-----------------------------
let props = {
     name: "Анатолий", 
    age: 29,
    sayHi: ()=>"привет",
 };

function getvalue() {
   let text = "Значения свойств объекта props ("
    Object.entries(this).forEach(element => {
    if (typeof(element[1]) !== "function") {
        if (text === "Значения свойств объекта props (") {
            text += element[0] + ': ' + element[1];
        } else {
     text += ', ' + element[0] + ': ' + element[1];
        }
    }
    
})
    return text + ')';
}
props.getvalue=getvalue;
props.getvalue();

//-------------------------------4 вариант-----------------------------
const props = {
  name: 'Анатолий',
  age: 29,
  sayHi: () => 'привет',
};

function getValue() {
    const arr = [];

    for (let key in this) {
       if (typeof this[key] !== 'function') {
           arr.push(`${key}: ${this[key]}`);
          }
      }
    console.log(`Значения свойств объекта props (${arr.join(', ')})`);
    }

getValue = getValue.bind(props);
getValue();  // Значения свойств объекта props (name: Анатолий, age: 29)


