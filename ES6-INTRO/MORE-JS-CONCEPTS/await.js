
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')

    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

async function loadUserAsync(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}