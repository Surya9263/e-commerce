import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Products/>
    </div>
  );
}

export default App;
