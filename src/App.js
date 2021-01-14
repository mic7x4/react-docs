import './App.css';
import Tick from './Tick';
import Toggle from './Toggle';
import Welcome from './Welcome';

function App(){
  return (
    <div className="App">
      <Welcome name="Black Hustle" />
      <Tick/>
      <Toggle></Toggle>
    </div>
  );
}

export default App;
