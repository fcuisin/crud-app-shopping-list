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

    list.push(item);
  }

  return fetchAllItems(list);

}

function updateItem(index) {
  const item = list.find((m, i) => {
    return i == index;
  });
}

const form = document.getElementById("form");
form.addEventListener("submit", createItem);
