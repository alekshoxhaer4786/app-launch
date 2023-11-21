/* filename: complex_code.js */

// This code is a complex implementation of a task scheduler
// It simulates a real-life scenario of scheduling tasks and prioritizing them based on due date and urgency

class Task {
  constructor(name, dueDate, priority) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class TaskScheduler {
  constructor() {
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
  }

  removeTask(task) {
    this.taskList = this.taskList.filter((t) => t !== task);
  }

  scheduleTasks() {
    console.log("Scheduling tasks...");
    this.taskList.sort((a, b) => {
      if (a.dueDate < b.dueDate) return -1;
      if (a.dueDate > b.dueDate) return 1;
      if (a.priority > b.priority) return -1;
      if (a.priority < b.priority) return 1;
      return 0;
    });

    this.taskList.forEach((task, index) => {
      console.log(`${index + 1}. ${task.name}`);
    });
  }
}

// Creating tasks
const task1 = new Task("Complete project", "2022-12-31", 2);
const task2 = new Task("Prepare presentation", "2022-12-15", 1);
const task3 = new Task("Review documentation", "2022-12-25", 3);

// Creating task scheduler
const taskScheduler = new TaskScheduler();

// Adding tasks to the scheduler
taskScheduler.addTask(task1);
taskScheduler.addTask(task2);
taskScheduler.addTask(task3);

// Scheduling tasks
taskScheduler.scheduleTasks();

// Output:
// Scheduling tasks...
// 2. Prepare presentation
// 3. Review documentation
// 1. Complete project