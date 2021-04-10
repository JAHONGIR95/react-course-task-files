import { useEffect, useState } from 'react';

import TodoItem from './Components/TodoItem/binder';

import './Assets/styles/App.scss';

function App() {

  const [ todoText, setTodoText ] = useState('');
  const [ todosList, setTodosList ] = useState([])

  const formSubmit = (e) => {
    e.preventDefault();
    if(todoText.length > 0){
      todosList.push(
        {
         id: 0,
         title: todoText
        }
       )
    }
     setTodoText('');
    // console.log(todosList);
  }
function localStorage(){
  alert('saqlandi')
  window.localStorage.setItem('todosInfo', JSON.stringify(todosList))
}

useEffect(()=>{
  setTodosList(JSON.parse(window.localStorage.getItem('todosInfo')))
}, [])

  return (
    <div className="container">
      <div className="col-md-6 offset-3">
      
      <div className="card mt-5">
        <div className="card-header">
          <h1>Qaydlar soni: {todosList.length}</h1>
        </div>
        <div className="card-body">
          <form className="d-flex" onSubmit={formSubmit}>
            <input 
              type="text"
              className="form-control me-3"
              value={todoText}
              onChange={ (e)=> setTodoText(e.target.value) }
            />
            <button type="submit" className="btn btn-success">Qo'shish</button>
          </form>
          
          <TodoItem.Group>
           {
             todosList.map((item) => (
               <TodoItem.Options
                title={item.title}
                key={item.id}
              />
             ))
           }
          </TodoItem.Group>
        </div>
        <div className="card-footer d-flex justify-content-end">
          <button className="btn btn-danger me-3">Tozalash</button>
          <button className="btn btn-primary" onClick={localStorage}>Saqlash</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
