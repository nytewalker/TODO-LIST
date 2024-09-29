import React, { useState } from 'react';

interface AddTodoProps {
  addTodo: (title: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-3 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 text-1xl p-3 text-purple-700 bg-white border-1 border-purple-500 rounded-md focus:outline-none focus:ring focus:ring-purple-400 transition-all"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-all ease-in-out duration-200 transform hover:scale-105"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
