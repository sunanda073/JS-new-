const name="Sunanda"
const repoCount= "50"

//console.log(name + repoCount + " Value")

//Backticks (String interpolation)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String("Candy crush");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('y'));

const newString= gameName.substring(0,4);
console.log(newString);

const anotherString= gameName.slice(-11,4);
console.log(anotherString);

const newStringone = "   sunanda    ";
console.log(newStringone.trim());

const url="https://sunanda.com/sunanda%20chakraborty";
console.log(url.replace('%20','-'));
console.log(url.includes('apple'));

const newStringtwo= new String('Sunanda Chakraborty hi doraemon');
console.log(newStringtwo.split(' '));