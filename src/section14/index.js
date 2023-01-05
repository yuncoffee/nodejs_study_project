#! /usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const answerCallback = (answer) => {
    if (answer === "y") {
        console.log("thanks")
        rl.close()
    } else if (answer === "n") {
        console.log("sorry")
        rl.close()
    } else {
        console.log("y or n please")
        rl.question("에제가 재밋읍니까? (y/n)", answerCallback)
    }
}

rl.question("에제가 재밋읍니까? (y/n)", answerCallback)
