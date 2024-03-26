
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  {Table } from './components/Table';
import {AddTable}  from "./components/AddTable";
import  EditTable from './components/EditTable';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Table/>}/>
      <Route path='/add' element={<AddTable/>}/>
      <Route path='/edit/:id' element={<EditTable/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
