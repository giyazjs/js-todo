const input = document.querySelector(".form-control");
console.log(input);
const btn = document.querySelector(".btn");
console.log(btn);
const listGroup = document.querySelector(".list-group");


const todoList = [
    {
    value: "Купить бананы",
    checked: false,
},
{   value: "Купить бананы",
    checked: true,
}
];
btn.addEventListener("click", function () {
  console.log(input.value);
    todoList.push({
        value: input.value,
        checked: false
    })
    console.log(todoList);
    listGroup.innerHTML = "";
    drawList();
  input.value = "";
});

function drawList() {
  for (let i = 0; i < todoList.length; i++) {
    listGroup.insertAdjacentHTML(
      "beforeend",
      `<li class="list-group-item list-group-item-${i % 2 === 0 ? "warning" : "info"}"><div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" ${todoList[i].checked ? "checked" : ""} id="flexSwitchCheckDefault">
        <label class="form-check-label ${todoList[i].checked ? "checkedText" : ""}" for="flexSwitchCheckDefault">
        ${todoList[i].value}
        </label>
        </li>`
    );
  }
}

drawList();
