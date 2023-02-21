import './App.css';
import Welcome from './WelcomeMessage';
import AppLayout from './AppLayout';
import { Component } from 'react';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';

class App extends Component {
  render(){
  return (
    <AppLayout>
      <AppProvider>
      <AppBar/>
      <Welcome name={"SL Crypto Dashboard V1"}/>
      </AppProvider>
    </AppLayout> 
  );
  }
}

export default App;
