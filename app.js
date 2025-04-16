let tasks = [];

function createTask(title, category, dueDate) {
  return {
    id: Date.now(),
    title,
    category,
    dueDate,
    completed: false
  };
}

function addTask() {
  const title = document.getElementById('task-input').value;
  const category = document.getElementById('category-input').value;
  const dueDate = document.getElementById('due-date').value;
  if (title) {
    const task = createTask(title, category, dueDate);
    tasks.push(task);
    if (dueDate) setReminder(task);
    renderTasks();
    document.getElementById('task-input').value = '';
    document.getElementById('due-date').value = '';
  }
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function toggleComplete(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

function setReminder(task) {
  if (task.dueDate) {
    const timeDiff = new Date(task.dueDate) - Date.now();
    if (timeDiff > 0) {
      setTimeout(() => {
        alert(`Reminder: ${task.title} is due!`);
      }, timeDiff);
    }
  }
}

function renderTasks() {
  const taskList = document.getElementById('task-list');
  const filter = document.getElementById('filter-category').value;
  taskList.innerHTML = '';
  const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.category === filter);
  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'p-2 bg-white rounded flex justify-between';
    li.innerHTML = `
      <span class="${task.completed ? 'line-through' : ''}">
        ${task.title} (${task.category})${task.dueDate ? ' Due: ' + new Date(task.dueDate).toLocaleString() : ''}
      </span>
      <div>
        <button onclick="toggleComplete(${task.id})" class="text-green-500 mr-2">
          ${task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onclick="deleteTask(${task.id})" class="text-red-500">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
  updateProgress();
}

function updateProgress() {
  const completed = tasks.filter(task => task.completed).length;
  const total = tasks.length;
  const percentage = total ? Math.round((completed / total) * 100) : 0;
  document.getElementById('progress').textContent = `${percentage}% (${completed}/${total})`;
}