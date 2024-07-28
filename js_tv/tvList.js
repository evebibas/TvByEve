//tvList.js

import tvItem from "./tvItem.js";

const createList = (json_ar) => {
    console.log('Entered in create List!');

    let parentElem = document.querySelector(".row.g-4");
    console.log('parentElem=>', parentElem);

    const renderFilteredItems = (filterText) => {
        parentElem.innerHTML = ''; // Clear the existing items

        json_ar.forEach(item => {
            let name = item.show.name;
            let year = item.show.premiered;
            let rating = item.show.rating.average;
            let language = item.show.language;
            let image = item.show.image ? item.show.image.medium : ''; 
            console.log('item.show.image.medium=>', item.show.image.medium);
            console.log('item.show.language=>', language);

            if (name.toLowerCase().includes(filterText.toLowerCase())) {

            let show = new tvItem(parentElem, name, year, rating, image,language);
            console.log('show=>', show);

            show.render();
            }
        });
};

renderFilteredItems('');

// Ajouter un gestionnaire d'événement pour la barre de recherche
const searchButton = document.getElementById('searchButton');
const searchBar = document.getElementById('searchBar');
console.log()
searchButton.addEventListener('click', (event) => {
    const filterText = searchBar.value;
    renderFilteredItems(filterText);
});
}

export { createList };
