import './App.css';
import Header from './Components/Header/Navbar';
import Home from './Components/Home/Home';

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  console.log(process.env.REACT_APP_OTHER_VALE);
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
