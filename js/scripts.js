// Co-authored-by: Anton Ch <anton3ch@icloud.com>"
//Business
function ToDoList() {
  this.tasks = {};
  this.currentId = 0;
}

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
};

ToDoList.prototype.assignId = function() {
  this.currentId++;
  return this.currentId;
};

ToDoList.prototype.deleteTask = function(id) {
  if (this.tasks[id] === undefined) {
    return "You ain't got no task";
  }
  let taskDescription =  this.tasks[id].description;
  delete this.tasks[id];
  return "Successfully deleted task: " + taskDescription;
};

ToDoList.prototype.findTask = function(id) {
  if (this.tasks[id] !== undefined) {
    return this.tasks[id];
  }
  return false;
};

function Task(name, description) {
  this.name = name;
  this.description = description; 
}



//UI

let toDoList = new ToDoList();

function listTasks(toDoListToDisplay) {
  const toDoListDiv = document.querySelector("div#to-do-list");
  toDoListDiv.innerText = null;
  const ul = document.createElement("ul");
  Object.keys(toDoListToDisplay.tasks).forEach(function(property) {
    const task = toDoListToDisplay.findTask(property);
    const li = document.createElement("li");
    li.append(task.name);
    li.setAttribute("id", task.id)
    ul.append(li);
  });
  toDoListDiv.append(ul);
}

function showTaskDescription(event) {
  const task = toDoList.findTask(event.target.id);
  document.getElementById("output-description").innerText = task.name + ": " + task.description;
  document.querySelector("div#output").removeAttribute("class");
  document.querySelector("button.delete").setAttribute("id", event.target.id);
}

function handleDelete(event) {
  toDoList.deleteTask(event.target.id);
  document.querySelector("div#output").setAttribute("class", "hidden");
  document.querySelector("button.delete").removeAttribute("id");
  listTasks(toDoList);
}

function handleSubmission(event) {
  event.preventDefault();
  const inputtedTaskName = document.getElementById("task-name").value;
  const inputtedTaskDescription = document.getElementById("task-description").value;
  const newTask = new Task(inputtedTaskName, inputtedTaskDescription);
  toDoList.addTask(newTask);
  listTasks(toDoList);
  document.getElementById("task-name").value = null;
  document.getElementById("task-description").value = null;
}

document.getElementById("form").addEventListener("submit", handleSubmission);
document.getElementById("to-do-list").addEventListener("click", showTaskDescription);
document.querySelector("button.delete").addEventListener("click", handleDelete);