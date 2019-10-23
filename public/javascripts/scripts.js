var list = document.getElementById('list');
var itemInput = document.getElementById('item');
var button = document.getElementById('button');

class Item {
    constructor(itemInput) {
        this.itemInput = itemInput;
    }
}

var arrItems = [];

$(document).ready(updateList)
function updateList() {
  
    //console.dir(data);
    $.getJSON('/api/todos', function (data){
        $('#list').empty();
        for (let t of data) {
            $('#list').append(`<li>${t.itemInput}<button onclick="remove('${t.id}')">X</button></li>`)
        }
    })
}

function addItem(ev) {
    ev.preventDefault();
    let itemValue = itemInput.value;

    var item = new Item(itemValue);

    arrItems.push(item);

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
        updateList();
    });

    emptyForm();
}

$(document).ready(strikeItem)
function strikeItem() {
    $(document).on('click', 'li', function () {
        $(this).toggleClass('strike');
    });
}

function remove (id) {
    $.ajax({
        url: `http://localhost:3000/api/todos/${id}`,
        type: 'DELETE',
        success: function(result) {
            updateList();
        }
    });
}

function emptyForm() {
    document.getElementById('item').value = "";
}