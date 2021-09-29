// 01

var fruits = ["mango" , "lemon" , "blueberry"];
console.log(fruits);
console.table(fruits);

//02 - Access

var ingredients = ["eggs","milk","butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

//03 - Add and Remove 

var objects = ["pen" , "book" , "lamp"];

objects.unshift("chair");
console.log(objects);

objects.pop();
console.log(objects);

objects.push("laptop");
console.log(objects);

objects.shift();
console.log(objects);

//04 - Order


var numbers = [4,10,8,12,6];
numbers.reverse()
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);


//05 - Boucle

var total = 0;
var limit = 10;

for(var i = 0; i <= limit ; i++){
    total = total + i
}

console.log(total)

//06 - Reverse 




var sentence = "Hello Konexio ! "
var reverse = ""

for ( var i = 0; i < sentence.length - 1; i++) {
    reverse = sentence[i] + reverse;
}
console.log(reverse);




// Bonus - 1

var fizzbuzz = 100
for( var i = 0; i <= fizzbuzz ; i++) {
    if ( i % 3 === 0 && i % 5 === 0 ) {
        console.log('Fizzbuzz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 7 === 0) {
        console.log("")
    } else {
        console.log(i)
    }
}

// Bonus - 2

var total = 0;
var limit = 10;

var counter = 0

while (counter < limit) {
    counter++
    total = total + counter
    console.log(total)
}


// Bonus - 3

var mates = ["Marco","Eloi","Jong","Hélène","Rébecca","Kevin JM","Kévin","Salwa","Hanaa","Ahmed","Alin","Jeremy","Vincent","Bilal","Edouard","Chaïma","Syrine","Séverin","Karimou","Evan"]

// var random = mates[(Math.random() * mates.length)| 0]
// console.log(random)

    var random = mates[Math.floor(Math.random() * mates.length)]
    console.log(random)


// Bonus - 4


var randomArray = []

var min = 0;
var max = 100;

for ( var i = 0; i < 20 ; i++) {
    var number = Math.floor(Math.random() * (max - min + 1) +  min)
    randomArray.push(number)
}

console.table(randomArray)

var inMax = 0

for (var i = 0; i < randomArray.length; i++) {
    // console.log(randomArray[i])
    if (randomArray[i] > inMax) {
        inMax = randomArray[i]
    }
}
console.log(inMax)