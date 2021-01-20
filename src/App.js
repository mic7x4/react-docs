import './App.css';
import Calculator from './Calculator';
import CompositionInhertance from './CompositionInhertance';
import FilterableProductTable from './FilterableProductTable';
import Forms from './Forms';
import ListsandKeys from './ListsandKeys';
import LoginControl from './LoginControl';
import MultipleInputs from './MultipleInputs';
import SelectTag from './SelectTag';
import SignupDialog from './SignupDialog';
import TextArea from './TextArea';
import Tick from './Tick';
import Toggle from './Toggle';
import Welcome from './Welcome';

function App(){
  const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]; 
console.log(PRODUCTS);
  return (
    <div className="App" style={{padding:"40px"}}>
      {/* <Welcome name="Black Hustle" />
      <Tick/>
      <Toggle></Toggle>
      <LoginControl/>
      <ListsandKeys/> */}
      {/* <Forms/> */}
      {/* <TextArea/> */}
      {/* <SelectTag/> */}
      {/* <MultipleInputs/> */}
      {/* <Calculator/> */}
      {/* <CompositionInhertance/> */}
      <SignupDialog/>
      {/* <FilterableProductTable products={PRODUCTS}/> */}
      
    </div>
  );
}

export default App;
