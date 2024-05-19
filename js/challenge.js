// Define variables

let counter = 0
let likedCounter = 0;
let paused = 0

const countDisplayed = document.querySelector('#counter')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const heartBtn = document.querySelector('#heart')
const pauseBtn = document.querySelector('#pause')
const submitBtn = document.querySelector('#submit')

const commentForm = document.querySelector('#comment-form')

// Define intervals
let intervalOn
function startInterval(){
    if(!intervalOn){
        intervalOn = setInterval(function(){
            counter++
            countDisplayed.textContent = counter
            likedCounter = 0
        }, 1000)
    }
}
startInterval()

function stopInterval(){
    if(intervalOn){
        clearTimeout(intervalOn)
        intervalOn = null
    }
}

// Add event listeners to minus, plus, heart and pause buttons

minusBtn.addEventListener('click', () => {
    counter--
    countDisplayed.textContent = counter
})

plusBtn.addEventListener('click', () => {
    counter++
    countDisplayed.textContent = counter
})

document.querySelector('#heart').addEventListener('click', function(){
    likedCounter++
    if(likedCounter === 1){
        const li = document.createElement('li')
        li.id = `id${counter}`
        li.textContent = `${counter} has been liked 1 time`
        document.querySelector('#list').append(li)
    } else if(likedCounter > 1){
        document.querySelector(`#id${counter}`).textContent = `${counter} has been liked ${likedCounter} times`
    }

})

pauseBtn.addEventListener('click', () => {
    if(!intervalOn){
        plusBtn.disabled = false
        minusBtn.disabled = false
        heartBtn.disabled = false
        submitBtn.disabled = false
        pauseBtn.textContent = 'pause'
        startInterval()
    } else{
        plusBtn.disabled = true
        minusBtn.disabled = true
        heartBtn.disabled = true
        submitBtn.disabled = true
        pauseBtn.textContent = 'resume'
        stopInterval()
    }
})

// Display comments as submitted

commentForm.addEventListener('submit', event => {
    event.preventDefault()
    p = document.createElement('p')
    p.textContent = document.querySelector('#comment-input').value
    document.querySelector('#list').appendChild(p)
    commentForm.reset()
})