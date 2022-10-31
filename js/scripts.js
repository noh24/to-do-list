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
}

function Task(description) {
  this.description = description; 
  this.status = false;
}

let toDoList = new ToDoList();

//UI


const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const taskDescription = document.getElementById("task-description").value;
  
  let task = new Task(taskDescription);
  
  toDoList.addTask(task);
  const ul = document.querySelector("ul");
  let li = document.createElement("li");
  ul.append(li);
  li.innerText = toDoList.tasks[task.id].description;
  let button = document.createElement("button");
  button.setAttribute("class", "btn btn-secondary float-right");
  button.innerText = "delete";
  li.append(button);
  button.addEventListener("click", function() {
    if (toDoList.deleteTask(1)) {
      delete document.querySelector(li);
    };
  });
  // document.querySelector("input[name=task-description]") = null;
});