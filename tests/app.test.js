const createTask = require('../app').createTask;

test('should create a task with title and category', () => {
  const task = createTask('Write report', 'Work');
  expect(task.title).toBe('Write report');
  expect(task.category).toBe('Work');
  expect(task.id).toBeDefined();
  expect(task.completed).toBe(false);
  expect(task.dueDate).toBeUndefined();
});

test('should create a task with different category', () => {
  const task = createTask('Buy groceries', 'Personal');
  expect(task.title).toBe('Buy groceries');
  expect(task.category).toBe('Personal');
  expect(task.id).toBeDefined();
  expect(task.completed).toBe(false);
});

test('should create a task with due date', () => {
  const dueDate = '2025-04-17T10:00';
  const task = createTask('Meeting', 'Work', dueDate);
  expect(task.title).toBe('Meeting');
  expect(task.category).toBe('Work');
  expect(task.dueDate).toBe(dueDate);
  expect(task.id).toBeDefined();
  expect(task.completed).toBe(false);
});