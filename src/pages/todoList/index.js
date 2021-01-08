import { useState } from 'react';

function TodoList() {

  const [todosList, setTodosList] = useState([{ id: 1, value: 'study' }]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (!input.trim()) return
    setTodosList([...todosList, {
      id: todosList.length + 1,
      value: input
    }]);

    setInput('');
  }

  return <div>
    <input type='text' value={input} onChange={(e) => setInput(e.target.value)} /> <button onClick={handleAdd}>添加</button>
    <ul>
      {
        todosList.map(todo => (
          <li key={todo.id}>
            {todo.value}
          </li>
        ))
      }
    </ul>
  </div>
}


// jsx

export default TodoList;
