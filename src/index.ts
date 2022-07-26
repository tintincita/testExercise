
import {compare, getNumber, randomPrice} from './prix'

let lifes: number = getNumber("how many guesses? ")


let maxPrice: number = getNumber("max price of item? ")
let price: number = randomPrice(maxPrice)

let guess: number = 0
for (let i: number = lifes; i > 0; i--) {
    guess = getNumber("guess: ")
    if (compare(guess,price) === "=") {
        break
    }
    console.log('you have ', i - 1, ' guesses left');
}


