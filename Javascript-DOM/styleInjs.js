

const sections = document.querySelectorAll('section');

for(const section of sections){

    section.style.border = '2px solid steelblue';

    section.style.marginBottom = '5px'

    section.style.borderRadius = '15px';

    section.style.paddingLeft = '7px';

    section.style.backgroundColor = 'lightgray';

}



// const placesContainer = Document.getElementById('places-container');

const placesContainer = document.getElementById('places-container');

placesContainer.classList.add('yellow-bg');
