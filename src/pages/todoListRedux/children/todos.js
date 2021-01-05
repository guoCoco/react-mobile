import { Fragment } from 'react';

function Todos({ todosList }) {
  return <Fragment>
    {
        todosList.map(todo => (
          <li key={todo.id}>
            {todo.value}
          </li>
        ))
      }
  </Fragment>
}

export default Todos;
