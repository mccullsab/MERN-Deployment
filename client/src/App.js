import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Dashboard from './views/Dashboard';
import CreatePage from './views/CreatePage';
import DetailsPage from './views/DetailsPage';
import UpdatePage from './views/UpdatePage';



function App() {
  return (
    <div className="App">
      <div className='d-flex p-2 justify-content-between'>
        <h1>Store Finder</h1>
        <Link to='/'>Go Back Home</Link>
      </div>
      <Routes>
        <Route path='/' element={<Dashboard/> } />
        <Route path='/stores/new' element={<CreatePage/> } />
        <Route path='/stores/:id' element={<DetailsPage/>} />
        <Route path='/stores/:id/edit' element={<UpdatePage/>} />
      </Routes>
    </div>
  );
}

export default App;
