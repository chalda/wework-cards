const API_URL = "https://deckofcardsapi.com/";

export function getNewDeck(){
    const path = "api/deck/new/shuffle/?deck_count=1";
    const url = API_URL + path;
    return fetch(url);
}

export function getCards(deckId){



} 

