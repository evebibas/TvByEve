//infoItem.js
import { hideLightbox } from "../lightbox.js";
export default class infoItem {
    constructor(parentElem, name, date, rating, image, language) {
        this.parentElem = parentElem;
        this.name = name;
        this.date = date;
        this.rating = rating;
        this.image = image;
        this.language = language;
    }

    render() {
        this.parentElem.innerHTML = ''; // Vide le contenu existant

        const lightboxContent = `
             <div class="light_inside">
                        <img src="${this.image}" class="col-4 float-start me-2">
                        <h2>${this.name}</h2>
                        <div>
                             <div>Date: ${this.date}</div>
                             <div>Language: ${this.language}</div>
                             <div>Rating: ${this.rating ? `<div> ${this.rating} </div>` : `<div> This show has no rate </div>`} </div>
                        </div>
                        <button id="close_id_btn" class="btn btn-danger">Close</button>
                    </div>
        `;
        this.parentElem.innerHTML = lightboxContent;
        // console.log('444444444444444',div);

        // this.parentElem.appendChild(div);
        // console.log('555555555555555',div);

        document.getElementById('close_id_btn').addEventListener('click', () => {
            hideLightbox();
        });
    }
}
