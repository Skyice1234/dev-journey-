const addTodo = () => {
  const input = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  // Don't add empty tasks
  if(input.value.trim() === "") {
    alert("Please enter a task!")
    return;
  }

  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  todoItem.innerHTML = `
  <span onclick = "toggleDone(this)">${input.value}</span>
  <button class ="delete-btn" onclick="deleteTodo(this)">delete</button>
  `;

  
  todoList.appendChild(todoItem);
  input.value = "";
};

const toggleDone =(span) => {
    span.classList.toggle("done");
  };

  const deleteTodo = (button) => {
    const todoItem = button.parentElement;
    todoItem.remove();
  };
