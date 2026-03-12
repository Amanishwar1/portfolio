const typingElement = document.querySelector(".typing")

const words = [
"Web Developer",
"Frontend Developer",
"UI Designer",
"javascript Developer"
]

let wordIndex = 0
let letterIndex = 0
let currentWord = ""
let isDeleting = false

function type(){

currentWord = words[wordIndex]

if(isDeleting){
letterIndex--
}else{
letterIndex++
}

typingElement.textContent = currentWord.substring(0, letterIndex)

let speed = isDeleting ? 60 : 120

if(!isDeleting && letterIndex === currentWord.length){
speed = 1000
isDeleting = true
}

else if(isDeleting && letterIndex === 0){
isDeleting = false
wordIndex = (wordIndex + 1) % words.length
speed = 300
}

setTimeout(type, speed)

}

type()