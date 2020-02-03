//variables declared
const readlineSync = require('readline-sync')
let score = 0

const movies=  ["Hercules", "Incredibles", "Friday", "Dodgeball", "Deadpool", "None of the above"]

const userName = readlineSync.question("Wanna test your movie knowledge? y || n\n")

let myArray =  []


// let userGuess = prompt.question(`Hi there! You have ${maxRange} options for every ${maxGuesses} question asked to test your decision making in unique situations./n`)

const trivia = () => {

console.log("Herc, Herc, my man my dude, let's talk about this?")
let answer1 = readlineSync.keyInSelect(movies, )
if (answer1 === 0) {
    console.log(`${movies[answer1]} is the correct answer!`)
    score = score + 1
    console.log("Current score: " + score)
} else {
    myArray.push(answer1)
    console.log(myArray)
    console.log(`${movies[answer1]} is the wrong answer!`)
}

console.log("You married elast-girl!!?... and got Bizzay!!")
let answer2 = readlineSync.keyInSelect(movies,)
if (answer2 === 1) {
    console.log(`${movies[answer2]} is the correct answer!`)
    score = score + 1
    console.log("Current score: " + score)
} else {
    console.log(`${movies[answer2]} is the wrong answer!`)
}

console.log("How the hell did you get fired on your day off")
let answer3 = readlineSync.keyInSelect(movies, )
if (answer3 === 2) {
    console.log(`${movies[answer3]} is the correct answer!`)
    score = score + 1
    console.log("Current score: " + score)
} else {
    console.log(`${movies[answer3]} is the wrong answer!`)
}

console.log("If you could dodge a wrench , you can dodge a ball")
let answer4 = readlineSync.keyInSelect(movies, )
if (answer4 === 3) {
    console.log(`${movies[answer4]} is the correct answer!`)
    score = score + 1
    console.log("Current score: " + score)
} else {
    console.log(`${movies[answer4]} is the wrong answer!`)
}

console.log("No sugar? Dam*. Ya'll ain't never got two things that match. Either ya'll got kool-aid, no sugar. Peanut butter, no jelly. Ham, no burger. Dam*!")
let answer5 = readlineSync.keyInSelect(movies, )
if (answer5 === 2) {
    console.log(`${movies[answer5]} is the correct answer!`)
    score = score + 1
    console.log("Current score: " + score)
} else {
    console.log(`${movies[answer5]} is the wrong answer!`)  
}

console.log("I'm gonna remember that.. Remember it, write it down, take a picture, I don't give a f***!")
let answer6 = readlineSync.keyInSelect(movies, )
if (answer6 === 2) {
    console.log(`${movies[answer6]} is the correct answer!`)
    score = score + 1
    console.log("Current score: " + score)
} else {
    console.log(`${movies} is the wrong answer`)
}

console.log("I've got 24 hours to get rid of this bozo, or the entire scheme I've been setting up for 18years goes up in smoke and you are wearing his MERCHANDISE!!?!")
let answer7 = readlineSync.keyInSelect(movies, )
if (answer7 === 0) {
    console.log(`${movies[answer7]} is the correct answer!`)
    score = score + 1
    console.log("Current score " + score)
} else {
    console.log(`${movies} is the wrong answer`)
}

console.log("Nobody makes me bleed my own blood")
let answer8 = readlineSync.keyInSelect(movies, )
if (answer8 === 0) {
    console.log(`${movies[answer8]} is the correct answer!`)
    score = score + 1
    console.log("Current score" + score)
} else {
    console.log(`${movies} is the wrong answer!`)
}
console.log ("Looks ARE everything! Ever heard Dave Beckham speak? It’s like he mouth-sexed a can of helium. You think Ryan Reynolds got this far on a superior acting method?")
let answer9 = readlineSync.keyInSelect(movies, )
if (answer9 === 4) {
    console.log(`${movies[answer9]} is the correct answer!`)
    score = score + 1
    console.log("Current score" + score)
} else {
    console.log(`${movies[answer9]} is the wrong answer!`)
}

console.log("I can say Chichanga in seven languages")
let answer10 = readlineSync.keyInSelect(movies, )
if (answer10 === 4) {
    console.log(`${movies[answer10]} is the correct answer!`)
    score = score + 1
    console.log("Current score" + score)
} else {
    console.log(`${movies[answer10]} is the wrong answer!`)
}

let playAgain = readlineSync.question('Do you want to play again? y || n\n')

    playAgain = playAgain.toLowerCase()

if (playAgain === 'y'){
    trivia()
} else {
    console.log('Thanks for playing, Goodbye\n')
}


}

trivia()

