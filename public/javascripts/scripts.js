var list = document.getElementById('list');
var itemInput = document.getElementById('item');
var button = document.getElementById('button');

class Item {
    constructor (itemInput) {
        this.itemInput = itemInput;
    }
}

var arrItems = [];

//Tähän tulee updateList-funktio, joka päivittää sivun listan sillä tiedolla mitä löytyy json-tiedostossa

function addItem() {
    let itemValue = itemInput.value;

    var item = new Item (itemValue);

    arrItems.push(item);

    console.dir(arrItems);
    //Tähän vielä funktio joka POSTaa itemin json-tiedostoon

//Tähän jotain, mikä kutsuu lista-funktion (updateList), sitten kun palvelin-osuus on tehty

emptyForm();
}

function remove (id) {
//Poistaa itemin ID:n perusteella
}

function emptyForm() {
    document.getElementById('item').value ="";
}