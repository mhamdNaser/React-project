import React, { useState } from 'react';

const Todo = () => {
  const [item, items] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    if (todo !== '') {
      items([...item, todo]);
      setTodo('');
    }
  };

  return (
    <div className='row p-5 justify-content-center'>
        <div className='col-lg-6'>
            <form className=" p-3 m-5">
                <input
                className="form-control border border-3 border-success"
                type="text"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
                />
                <div class="row g-2 mb-2 mt-3">
                    <button className="btn btn-success" type="submit" onClick={addTodo}>
                    Add
                    </button>
                </div>
            </form>
            <div className='col-lg-4  text-wrap'>
                <div className='row justify-content-center p-3 m-5 g-2'>
                    <div className='col-lg-6'>
                        <ul className='list-group list-group-horizontal'>
                            {item.map((todo, index) => (
                            <li className='list-group-item fs-3' key={index}>{todo}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Todo;