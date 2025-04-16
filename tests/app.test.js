const createTask = require('../app').createTask;

test('should create a task with title and category', () => {
  const task = createTask('Write report', 'Work');
  expect(task.title).toBe('Write report');
  expect(task.category).toBe('Work');
  expect(task.id).toBeDefined();
  expect(task.completed).toBe(false);
});

test('should create a task with different category', () => {
  const task = createTask('Buy groceries', 'Personal');
  expect(task.title).toBe('Buy groceries');
  expect(task.category).toBe('Personal');
  expect(task.id).toBeDefined();
  expect(task.completed).toBe(false);
});