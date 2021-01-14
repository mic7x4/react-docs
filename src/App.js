import './App.css';
import ListsandKeys from './ListsandKeys';
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
      <ListsandKeys/>
    </div>
  );
}

export default App;
