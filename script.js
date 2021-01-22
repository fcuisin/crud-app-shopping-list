const list = []

function fetchAllItems(list) {
  const table = document.getElementById("items");
  const counter = document.getElementById("counter");
  let data = "";
  list.forEach(function (item, index) {
    data += `<tr>
      <td>${item.name}</td>
      <td>${item.number}</td>
      <td><button class="btn-modify" value="${index}">Modify</button></td>
      <td><button class="btn-delete" value="${index}">Delete</button></td>
    </tr>
`
  });
  table.innerHTML = data;

  const itemsDisplayed = document.querySelectorAll(".btn-modify");
  itemsDisplayed.forEach( item => {

    item.addEventListener("click", function() {
      return updateItem(this.value);
    });

  });

  const itemsToDelete = document.querySelectorAll(".btn-delete");
  itemsToDelete.forEach( item => {

    item.addEventListener("click", function() {
      return deleteItem(this.value);
    });

  });
}

function createItem() {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  if (name && (number > 0)) {
    const item = {
      name: name,
      number: number,
    }

    if (document.getElementById("hidden-index").value.length > 0) {
      list.splice(document.getElementById("hidden-index").value,1,item);
      document.getElementById("form").reset();
      document.getElementById("hidden-index").value = "";
    } else {
      list.push(item);
      document.getElementById("form").reset();
    }
  }

  return fetchAllItems(list);

}

function updateItem(index) {
  const item = list.find((m, i) => {
    return i == index;
  });

  document.getElementById("name").value = item.name;
  document.getElementById("number").value = item.number;
  document.getElementById("hidden-index").value = index;
}

function deleteItem(index) {

  delete list[index];

  return fetchAllItems(list);

}

const form = document.getElementById("form");
form.addEventListener("submit", createItem);
