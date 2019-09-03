import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome'
import Greet from './Components/Greet'
import ClickOk from './Components/ClickOk'
import EventTest from './Components/EventTest'
import ParentComponent from './Components/ParentComponent'
import NameList from './Components/NameList'

class App extends Component {
  render() {
    return (
      <div className="App">
     { /*<Welcome/>
      <Greet name="Asante" nickName="Bobbie React"/>*/}
     {/*<ClickOk/>*/} 
     {/*<EventTest/>*/}
     {/*<ParentComponent/>*/}
     <NameList/>

      </div>
    );
  }
}

export default App;
