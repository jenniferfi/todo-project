var list = document.getElementById('list');
var itemInput = document.getElementById('item');
var button = document.getElementById('button');

class Item {
    constructor (itemInput) {
        this.itemInput = itemInput;
    }
}

var arrItems = [];

function addItem() {
    let itemValue = itemInput.value;

    var item = new Item (itemValue);

    arrItems.push(item);

    console.dir(arrItems);
}
