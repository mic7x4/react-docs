import './App.css';
import Forms from './Forms';
import ListsandKeys from './ListsandKeys';
import LoginControl from './LoginControl';
import SelectTag from './SelectTag';
import TextArea from './TextArea';
import Tick from './Tick';
import Toggle from './Toggle';
import Welcome from './Welcome';

function App(){
  return (
    <div className="App" style={{padding:"40px"}}>
      {/* <Welcome name="Black Hustle" />
      <Tick/>
      <Toggle></Toggle>
      <LoginControl/>
      <ListsandKeys/> */}
      {/* <Forms/> */}
      {/* <TextArea/> */}
      <SelectTag/>
    </div>
  );
}

export default App;
