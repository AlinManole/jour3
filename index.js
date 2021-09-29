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

for(i = 0; i <= limit ; i++){
    console.log(i);
    total = total + i
}

console.log(total)

//06 - Reverse 




var sentence = "Hello Konexio ! "
var reverse = ""

for (i = 0; i <= sentence.length - 1; i++) {
    reverse = sentence[i] + reverse;
}
console.log(reverse);




// Bonus - 1

var fizzbuzz = 100
for( i = 0; i <= fizzbuzz ; i++) {
    if ( i % 15 === 0) {
        console.log('Fizzbuzz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else {
        console.log(i)
    }
}

// Bonus - 2

var total = 0;
var limit = 10;

while(i =< limit) {
    total += i;
    i++
}

console.log(total)