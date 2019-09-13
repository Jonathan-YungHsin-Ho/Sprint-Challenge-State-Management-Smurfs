import React from 'react';
import './App.css';

import SmurfForm from './SmurfForm';
import SmurfMod from './SmurfMod';
import SmurfList from './SmurfList';

const App = () => {
  return (
    <div className='App'>
      {/* <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div> */}
      <h1>Welsmurf to Smurf Village!</h1>
      <div className='forms-wrapper'>
        <SmurfForm />
        <span>or...</span>
        <SmurfMod />
      </div>
      <SmurfList />
    </div>
  );
};

export default App;
