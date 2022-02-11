const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// .THEN VER.
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config).then(res => res.json()).then(data => {
//         jokeEl.innerHTML = data.joke
//     })
//     // *NOTE*.then(data => console.log(data) <--Gives you an object that looks like 
//     // Object
//     //     id: "1oGYLu4T7Ed"
//     //     joke: "Why is Peter Pan always flying? Because he Neverlands."
//     //     status: 200
// }

// ASYNC AWAIT VER.

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
    

}