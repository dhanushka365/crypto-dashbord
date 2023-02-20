import './App.css';
import Welcome from './WelcomeMessage';
import AppLayout from './AppLayout';
import { Component } from 'react';

class App extends Component {
  render(){
  return (
    <AppLayout>
      <Welcome name={"SL Crypto Dashboard V1"}/>
    </AppLayout> 
  );
  }
}

export default App;
