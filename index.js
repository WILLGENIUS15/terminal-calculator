/**
 * To run the program, open terminal. run 'node index.js'
 */
const prompt = require('./prompt');

console.log("Welcome to Fidel Calculator");
/**
 * Prints all the instructions
 */
function help(){
    console.log("1. Addition");
    console.log('2. Subtraction');
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Check whether a number is even");
    console.log("6. Check whether a number is odd");
    console.log("7. Print the sum of numbers before a given number");
    console.log("8. Square");
    console.log("9. Exit");
}

/**
 * Addition
 */
function add(a,b) {
    return a + b;
}

/**
 * Subtract
 */
function subtract(a, b) {
     return a - b;
}

/**
 * Multiply
 */
function multiply(a, b) {
     return a * b;
}

/**
 * Divide
 */
function divide(a, b) {
     return a / b;
}

// You can add, change or remove functions where necessaryfu
function even (a){
    if (a % 2 === 0){
         console.log( Even )
    }else {
        console.log(  odd)
    }

}
  

async function main() {
    help();
    var choice = await prompt('\n>> ');
    switch(choice) {
        case 1:
            // Request first number
            var first = await prompt('Enter first number: ');
            // Request second number
            var second = await prompt('Enter second number: ');
            // Get the result
            var result = add(first, second);
            console.log('\nThe result is: ' + result + '\n');
            main();
            break;
        case 2:
             // Request first number
             var first = await prompt('Enter first number: ');
             // Request second number
             var second = await prompt('Enter second number: ');
             // Get the result
             var result = subtract(first, second);
             console.log('\nThe result is: ' + result + '\n');
             main();
             break;
            
        case 3:
             // Request first number
             var first = await prompt('Enter first number: ');
             // Request second number
             var second = await prompt('Enter second number: ');
             // Get the result
             var result = multiply(first, second);
             console.log('\nThe result is: ' + result + '\n');
             main();
             break;
        case 4:
            // Request first number
            var first = await prompt('Enter first number: ');
            // Request second number
            var second = await prompt('Enter second number: ');
            // Get the result
            var result = (first, second);
            console.log('\nThe result is: ' + result + '\n');
            main();
            break;
        case 5:
            /* Check whether a number is even */
            var first = await prompt('Enter first number: ');
            var result = even(first)
              if(result === 2 || result  ){

              }
            break;
        case 6:
            /* Check whether a number is odd */
            break;
        case 7:
            /* Get the sum of numbers before a given number */
            break;
        case 8:
            /* Square */
            break;
        case 9:
            process.exit(); // Already done
            break;
        default:
            console.log("Command not found.\n");
            main();
    }
}

main()

