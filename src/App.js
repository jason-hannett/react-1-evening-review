import React from 'react';
import './App.css';
import Coverimage from './Components/Coverimage'
import Fidgetclicker from './Components/Fidgetclicker'
import Friendslist from './Components/Friendslist'

function App() {
  return (
    <div className="App">
      <Coverimage/>
      <Fidgetclicker/>
      <Friendslist/>
    </div>
  );
}

export default App;
