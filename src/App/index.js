import './App.css';
import Welcome from './WelcomeMessage';
import AppLayout from './AppLayout';
import { Component } from 'react';
import AppBar from './AppBar';

class App extends Component {
  render(){
  return (
    <AppLayout>
      <AppBar/>
      <Welcome name={"SL Crypto Dashboard V1"}/>
    </AppLayout> 
  );
  }
}

export default App;
