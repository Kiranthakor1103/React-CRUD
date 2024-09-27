import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import Auth from './pages/Auth'; 
import ProductList from './pages/ProductList';
import CRUD from './pages/CRUD';
import Navbar from './components/Navbar'; 
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <h1>CRUD Application</h1>
          <Navbar /> 
          <br />
          <br />
          <Routes>
            <Route path="/" element={<Auth/>} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/crud" element={<CRUD />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
