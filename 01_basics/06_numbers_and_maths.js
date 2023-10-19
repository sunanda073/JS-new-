const score =890;
console.log(score);

const balance= new Number(900);
console.log(balance);
console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber1 = 23.8966;
console.log(otherNumber1.toPrecision(3));

const otherNumber2 = 123.8966;
console.log(otherNumber2.toPrecision(3));

const otherNumber3 = 1123.8966;
console.log(otherNumber3.toPrecision(3));

const hundreds=1000000;
console.log(hundreds.toLocaleString());

console.log(hundreds.toLocaleString('en-IN'));


//************* Maths ***************** (built-in object)

console.log(Math.PI);
console.log(Math.sqrt(25));
console.log(Math.ceil(2.3));
console.log(Math.floor(2.3));
console.log(Math.round(2.3));
console.log(Math.max(4, 8 , 9, 0,1));
console.log(Math.min(4, 8 , 9, 0,1));
console.log(Math.abs(-29));


console.log(Math.random()); // 0 to 1
console.log(Math.floor(Math.random()*10)+1); // 1 t0 10

const min=10;
const max=20;
console.log(Math.floor((Math.random()*(max-min))+min));