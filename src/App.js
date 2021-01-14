import './App.css';
import LoginControl from './LoginControl';
import Tick from './Tick';
import Toggle from './Toggle';
import Welcome from './Welcome';

function App(){
  return (
    <div className="App">
      <Welcome name="Black Hustle" />
      <Tick/>
      <Toggle></Toggle>
      <LoginControl/>
    </div>
  );
}

export default App;
