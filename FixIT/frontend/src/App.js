import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </div>
);

export default App;