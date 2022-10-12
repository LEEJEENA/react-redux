import React from 'react';
import TodoList from './pages/TodoList'
import Todo from './pages/Todo'
import {BrowserRouter, Routes, Route} from "react-router-dom"


const App=() => {
  return (
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<TodoList/>}/>
            <Route  path="/todo/:id" element={<Todo/>}/>
          </Routes>
      </BrowserRouter>     
  )
}

export default App;
