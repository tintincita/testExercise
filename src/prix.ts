const read = require('readline-sync')

export const compare = (guessInput: number, priceInput: number) => {
    if (guessInput > priceInput) {
        console.log("nope, less than that");
        return "+"

    } else if (guessInput < priceInput) {
        console.log("more than that...");
        return "-"

    } else {
        console.log("got it!");
        return "="
    }

}

export const getNumber = (question: string) => {
    return read.questionInt(question)
}

export const randomPrice = (maxPrice: number) => {
    return Math.floor(Math.random() * maxPrice)
}