import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/index.css';
import Home from './pages/Home';
// import Create from './pages/Create';
// import List from './pages/List';
// import Edit from './pages/Edit';
import Error404 from './pages/Error404'
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* <Route exact path='/list' element={<List />} />
        <Route exact path='/create' element={<Create />} />
        <Route exact path='/edit' element={<Edit />} /> */}
        <Route path='*' element={<Error404 />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
