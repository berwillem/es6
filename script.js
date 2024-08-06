var todolistelement = document.querySelector(".todolist");
var inputelement = document.querySelector("input");
var todolist = [];
function addtodo(event) {
  event.preventDefault();
  if (inputelement.value !== "") {
    todolist.push(inputelement.value);
    inputelement.value = "";
    updateList();
  }
}

function updateList() {
  todolist.map((todo) => {
    todolistelement.innerHTML += `
    <li onclick="completed()"}" >${todo}</li> `;
  });
}

function completed() {
  event.target.classList.toggle("completed");
}
