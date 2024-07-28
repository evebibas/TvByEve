//appTv.js

import { createList } from "./tvList.js"; // Importer la fonction createList depuis tvList.js

const init = () => {
    doApi()
}

const doApi = async () => {
    let url = `https://api.tvmaze.com/search/shows?q=lego`;
    let resp = await axios.get(url);
    console.log(resp.data);
    createList(resp.data);
    
}


init();

export {doApi} ;