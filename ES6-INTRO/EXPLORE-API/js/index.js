function loadUsers2(){
    // console.log('button handler')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))

}

function displayUsers2(data){
    // console.log(data);
    for(const user of data){
        // console.log(user.email);
    }
}

function displayUsers2(data){
    const ul = document.getElementById('users-list');

    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}