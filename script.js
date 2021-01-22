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
}

function createItem() {
  event.preventDefault();
  console.log(event);
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  if (name && (number > 0)) {
    console.log(number);
    const item = {
      name: name,
      number: number,
    }

    list.push(item);
  }

  return fetchAllItems(list);

}

const form = document.getElementById("form");
form.addEventListener("submit", createItem);
