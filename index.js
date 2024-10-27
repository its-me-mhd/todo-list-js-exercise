// Array to keep track of each task as an object
const tasks = [];

// Create a new task by adding to the tasks array
function newTask(title) {
  const task = {
    title: title,
    complete: false
  };
  tasks.push(task);
}

// Mark a task as complete by setting the task's `complete` property to `true`
function completeTask(taskIndex) {
  tasks[taskIndex].complete = true;
}

// Print the state of a task to the console in a readable way
function logTaskState(taskIndex) {
  const task = tasks[taskIndex];
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
