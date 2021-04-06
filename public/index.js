const form = document.getElementById('searchJoke');
const ul = document.getElementById('jokeReturn');

const appendJoke = (joke) => {
    const li = document.createElement('li');
    li.textContent = `${joke.joke}`;
    ul.appendChild(li);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    try {
    const fd = new FormData(form);
        console.log(fd);
    const fetchJoke = async () => {
        await fetch(`/api/v1/jokes/${fd.get('search-term')}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
        // body: JSON.stringify({
        //     joke: fd.get('joke')
        // }),
    })
    const fetchString = JSON.stringify(fetchJoke());
}
        appendJoke(fetchString);
        console.log(fetchJoke());
    } catch (err) {
        console.log(err.message)
    }
    
});