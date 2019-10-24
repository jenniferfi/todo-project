var list = document.getElementById('list');
var itemInput = document.getElementById('item');
var button = document.getElementById('button');

class Item {
    constructor(itemInput) {
        this.itemInput = itemInput;
    }
}

var arrItems = [];

//Jennifer: Päivittää sivun todo-listan, ensin yhden kerran kun sivu on latautunut, sitten aina kun funktiota kutsutaan
$(document).ready(updateList)
function updateList() {
    //console.dir(data);
    $.getJSON('/api/todos', function (data) {
        $('#tbl').empty();
        for (let t of data) {
            $('#tbl').append(`<tr><td class="column">${t.itemInput}</td><td class="buttoncell"><button class="fa fa-trash" class="toright" onclick="remove('${t.id}')"></button></td></tr>`)
        }
    })
}

//Jennifer: lisää todo-itemin json tiedostoon (post-pyyntö/rest)
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

//Maria: yliviivaa itemin listassa kun sitä klikataan
$(document).ready(strikeItem)
function strikeItem() {
    $(document).on('click', 'tr', function () {
        $(this).toggleClass('strike');
    });
}

//Kaikki: taulukon sorttaus
$(document).ready(sort)
    function sort() {        
        $('#tbl').sortable();  
    };

//Jennifer: poistaa itemin listasta (delete-pyyntö/rest)
function remove(id) {
    $.ajax({
        url: `http://localhost:3000/api/todos/${id}`,
        type: 'DELETE',
        success: function (result) {
            updateList();
        }
    });
}

//Jennifer: tyhjentää lomakkeen kentän
function emptyForm() {
    document.getElementById('item').value = "";
}