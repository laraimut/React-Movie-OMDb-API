import React from 'react';

import './App.css';
import Nav from './component/nav'

import Users from './component/users'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Nav/>
         <Users/>
    </div>
  );
}

export default App;