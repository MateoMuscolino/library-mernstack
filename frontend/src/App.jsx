import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import ShowBook from "./pages/ShowBook";
import EditBook from './pages/EditBook';
import DeletBook from './pages/DeleteBook';
import CreateBook from './pages/CreateBook';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books/create" element={<CreateBook/>}/>
      <Route path="/books/details/:id" element={<ShowBook/>}/>
      <Route path="/books/edit/:id" element={<EditBook/>}/>
      <Route path="/books/delete/:id" element={<DeletBook/>}/>
    </Routes>
  )
};

export default App