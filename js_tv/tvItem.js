//tvItem
import infoItem from "./infoItem.js"
import { showLightbox } from "../lightbox.js";
export default class tvItem {
    constructor(parentElem, name, year, rating, image,language) {
        this.parentElem = parentElem;
        this.name = name;
        this.year = year;
        this.rating = rating;
        this.image = image;
        this.language=language;
    }

    render() {
        let article = document.createElement("article");
        article.className = "col-md-4";
        this.parentElem.appendChild(article); 
        article.innerHTML = `
            <div class="border shadow p-2 h-100 overflow-hidden">
                <img src="${this.image}" class="flow-start me-2 col-4" alt="${this.name}">
                <h2>${this.name}</h2>
                <div>Année: ${this.year}</div>
                <div>Rating: ${this.rating ? `<div> ${this.rating} </div>` : `<div> This show has no rate </div>`} </div>
                <button class="btn btn-dark info-btn">Plus d'info</button>
            </div>
        `;
        let infoBtn = article.querySelector(".info-btn");
        infoBtn.addEventListener("click", () => {
            const lightboxElem = document.querySelector("#id_lightWindow");
            const info = new infoItem(lightboxElem, this.name, this.year, this.rating, this.image, this.language);
            info.render();
            showLightbox(this.name, this.year, this.rating, this.image, this.language);
        });
    }
}
