import React, { useRef } from 'react';

export default function TodoForm({
  submit,
}) {
  const newText = useRef();

  return (
    <div>
      <h2>Create your Todos</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        submit(newText.current.value);
        newText.current.value = '';
      }}
      >
        <input type="text" ref={newText} />
        <button type="submit">Create todo</button>
      </form>
    </div>
  );
}
