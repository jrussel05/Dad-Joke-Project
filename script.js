const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYN/AWAIT

async function generateJoke() {
    const config = {       
        headers: {
            Accept: 'application/json',
    },
 }
    
    const res = await fetch('https://icanhazdadjoke.com', config) 

    const data = await res.json()

    jokeEl.innerHTML = data.joke
}

// USING .then()
// function generateJoke() {
//     const config = {       
//         headers: {
//             Accept: 'application/json',
//     },
//  }
    
//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())       
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })   
// }


// https://icanhazdadjoke.com/api

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch