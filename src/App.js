import React, { Component } from 'react';
import './App.css';
import './components/osvariables/quantum';
import Quantum from './components/osvariables/quantum';
import Process from './components/processvariables/process';
import SchedullerChart from './components/charts/schedullerchart';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Quantum/>
      <Process/> 
      <SchedullerChart/>       
      </div>
    );
  }
}

export default App;
