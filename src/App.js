import './App.css';

function App() {
  function formatName(user){
    return user.firstName + " " + user.lastName;

  }
  const user = {
     firstName:"Black",
     lastName:"Hustle"
  }
  return (
    <div className="App">
      <h1>{formatName(user)}</h1>
    </div>
  );
}

export default App;
