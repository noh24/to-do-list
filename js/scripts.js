// Make a to do list page where people can add tasks to create a list of things to do.

// Add an option for users to indicate a task is done.
// Allow users to remove a task from the list.
// Use test-driven development to write your business logic, and include the tests in your README.md. After every passing test, make sure to commit your code.

// Co-authored-by: Anton Ch <anton3ch@icloud.com>"

//Business

//object list
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
//object task
function Task(description, status) {
  this.description = description; 
  this.status = status;
}


//UI




