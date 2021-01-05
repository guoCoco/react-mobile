let nextTodoId = 0;

export const addTodo = value => ({
  type: 'ADD',
  id: ++nextTodoId,
  value
});
