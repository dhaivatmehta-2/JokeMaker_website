


document.getElementById('joke-button').addEventListener('click', getJoke);

function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
document.getElementById('joke').innerHTML = `Question: ${data.setup} <br> Ans: ${data.punchline}`;
        })
        .catch(error => console.error('Error:', error));
}



