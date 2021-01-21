const list = [
  {
    name:"citrus",
    number:3,
  },
  {
    name:"pomelos",
    number:1,
  }
]

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

  table.innerHTML += data;
}

fetchAllItems(list);
