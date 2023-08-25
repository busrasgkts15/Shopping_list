
const alert = document.querySelector('.alert')
const clearBtn = document.querySelector(".clear-btn");
var input = document.querySelector('#shopping')
var shoppingArray = []
let selected

clearBtn.addEventListener("click", clearItems);

let shoppingList = document.getElementById('shopping-form')
shoppingList.addEventListener('submit', addShoppingArray)


const alertFunction = (title, message) => `
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`

function addShoppingArray(event) {
    event.preventDefault()
    var shopingitem = { id: shoppingArray.length + 1, name: input.value }
    if (input.value && !selected) {
        shoppingArray.push(shopingitem)
        console.log(shoppingArray)
        addItem(shopingitem)
        input.value = ""
    } else if (input.value && selected) {
        shoppingArray[selected - 1] = shopingitem.name
        addItem(shopingitem)
        input.value = ""
        selected = null
    } else {
        alert.innerHTML = alertFunction(
            "!",
            "Bir değer giriniz"
        )
    }
}


var shoppingListDOM = document.querySelector('#shoppingList')


const addItem = (shopping) => {
    var liDOM = document.createElement('li')
    var deletebutton = document.createElement('button')
    var editbutton = document.createElement('button')
    liDOM.classList.add('list-group-item')
    if (!selected) {
        liDOM.innerHTML = `${shopping.name}`
        liDOM.id = 'li-' + shopping.id
        shoppingListDOM.append(liDOM)
    } else {
        liDOM.innerHTML = `${input.value}`
        liDOM.id = 'li-' + selected
        document.getElementById('li-' + selected).innerHTML = `${input.value}`

    }

    deletebutton.className = 'btn btn-danger'
    deletebutton.innerHTML = 'Sil'
    deletebutton.id = shopping.id


    liDOM.appendChild(deletebutton)




    deletebutton.onclick = (e) => deleteList(e)


    editbutton.className = 'btn btn-success'
    editbutton.innerHTML = 'Düzenle'
    editbutton.id = shopping.id


    liDOM.appendChild(editbutton)

    editbutton.onclick = (e) => editItem(e)

}

function clearItems() {
    shoppingListDOM.innerHTML = ""
    let i = shoppingArray.length
    shoppingArray.splice(0, i)
    console.log("yeni array: ", shoppingArray)
}

function editItem(e) {

    shopping.value = shoppingArray[e.target.id - 1].name;
    selected = e.target.id

}
// Sil butonlarını aktifleştir.

function deleteList(e) {
    shoppingArray = shoppingArray.filter(x => x.id.toString() !== e.target.id)
    console.log(shoppingArray)
    document.getElementById('li-' + e.target.id).remove()
}


