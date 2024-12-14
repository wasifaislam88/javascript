

//1.where to add

const placesList = document.grtEelementById('places-list');

// console.log(placesList);

//2.what to be added

const li = document.createElement('li');

li.innerText = 'pahartoli bon';

//3.add the child

placesList.appendChild(li);


// 1.where to ad

const mainContainer = document.getEelementById('main-container');

//2.WHAT TO BE ADDED

const section = document.createElement('section');

const h1 = document.createElement('h1');

h1.innerText = 'my food list';

section.appendChild(h1);

const ul = document.createElement('ul');

constli1 = document.createElement('li');

li1.innerText =' biriyani'

ul.appendChild(li1);


constli2 = document.createElement('li');

li2.innerText =' bohanni'

ul.appendChild(li2);


constli3 = document.createElement('li');

li3.innerText =' bohanni'

ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);


//set innerhtml direcly

const sectionDress = document.createElement('section');

sectionDress.innerHTML = `

<h1>My dress section</h1>
<ul>
    <li>t-shirt</li>

    <li>t-shirt</li>

    <li>t-shirt</li>
    
</ul>

`

mainContainer.appendChild(sectionDress);



