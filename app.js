let tasks = [];

function createTask(title, category) {
  return {
    id: Date.now(),
    title,
    category,
    completed: false
  };
}

function addTask() {
  const title = document.getElementById('task-input').value;
  const category = document.getElementById('category-input').value;
  if (title) {
    const task = createTask(title, category);
    tasks.push(task);
    renderTasks();
    document.getElementById('task-input').value = '';
  }
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'p-2 bg-white rounded flex justify-between';
    li.innerHTML = `${task.title} (${task.category}) <button onclick="deleteTask(${task.id})" class="text-red-500">Delete</button>`;
    taskList.appendChild(li);
  });
}