
//1.what do add

const placesList = document.getElementById('places-list')


// console.log(places-list);

//2.what do be added

const li = document.createElement('li');

li.innerText = 'pahartoli bon';

//3.add the child

placesList.appendChild(li);

//1.where to ad 

const mainContainer = document.getElementById('main-container');



// 2.what to be added

const section = document.createElement('section');

const h1 = document .createElement('h1');

h1.innerText = 'My food list';

section.appendChild(h1);


const ul = document.createElement('ul');

const li1 = document.createElement('li');

li1.innerText = 'biryani'

ul.appendChild(li1);


const li2 = document.createElement('li');

li2.innerText = 'borhani'

ul.appendChild(li2);



const li3 = document.createElement('li');

li3.innerText = 'salad'

ul.appendChild(li3);

section.appendChild(ul);


mainContainer.appendChild(section);



//set innerHTMLdirectly

const sectionDress = document.createElement('section');

sectionDress.innerHTML = `


<h1>My Dress section </h1>

<ul>

<li>t-shirt </li>
<li>shirt </li>
<li>lingi</li>
</ul>

`

mainContainer.appendChild(sectionDress);







