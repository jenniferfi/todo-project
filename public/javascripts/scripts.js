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

    console.dir(arrItems)
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/todos",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        "data": JSON.stringify(item)
    }

    $.ajax(settings).done(function () {
        console.log('Item logged in json');
    });

//Tähän jotain, mikä kutsuu lista-funktion (updateList), sitten kun palvelin-osuus on tehty

emptyForm();
}

function remove (id) {
//Poistaa itemin ID:n perusteella
}

function emptyForm() {
    document.getElementById('item').value ="";
}