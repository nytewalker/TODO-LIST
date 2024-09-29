import React from 'react';
import { Todo } from './todo';

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="flex items-center justify-between p-4 mb-2 bg-white text-black rounded-md shadow-md transition-transform transform hover:scale-105">
      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="form-checkbox h-5 w-5 text-green-500 focus:ring focus:ring-green-200"
        />
        <span className={`${todo.completed ? 'line-through opacity-50' : ''} text-lg`}>
          {todo.title}
        </span>
      </label>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-all ease-in-out duration-200 transform hover:scale-105"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
