// lightbox.js
export const showLightbox = (name, year, rating, image) => {     
    document.querySelector("#id_lightWindow").style.display = "flex";
    console.log('------------------->',document.querySelector("#id_lightWindow"));
}

export const hideLightbox = () => {
    document.querySelector("#id_lightWindow").style.display = "none";
    console.log('============>',document.querySelector("#id_lightWindow .light_inside").innerHTML)
}