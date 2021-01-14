import './App.css';
import Tick from './Tick';
import Welcome from './Welcome';

function App(){
  return (
    <div className="App">
      <Welcome name="Black Hustle" />
      <Tick/>
    </div>
  );
}

export default App;
