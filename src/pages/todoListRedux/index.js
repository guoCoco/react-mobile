import { connect } from 'react-redux';
import { useState } from 'react';
import { addTodo } from '../../store/todoListRedux/actions'
import Todos from './children/todos';

function TodoListRedux({ todosList, addTodo }) {
  
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (!input.trim()) return;
    addTodo(input);
    setInput('');
  }

  return <div>
    <input type='text' value={input} onChange={(e) => setInput(e.target.value)} /> <button onClick={handleAdd}>添加</button>
    <Todos todosList={todosList} />
  </div>
}

const mapStateToProps =  (state) => {
  return {
    todosList: state.todosList
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: value => dispatch(addTodo(value))
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoListRedux);
