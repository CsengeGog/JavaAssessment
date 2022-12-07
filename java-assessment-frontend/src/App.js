import logo from './logo.svg';
import './App.css';
import NewUser from './components/NewUser';
import GetAllUser from './components/GetAllUser';

function App() {
  return (
    <div className="App">
      <NewUser></NewUser>
      <GetAllUser></GetAllUser>
    </div>
  );
}

export default App;
