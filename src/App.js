import NavBar from './components/NavBar/NavBar.js'
import CardList from "./components/CardList/CardList"
import CardFunction from './components/Productos/Card'
import './App.css';
import { Container, Grid } from '@mui/material';
import SnackBar from "./components/SnackBar/SnackBar.js"
import Carrito from "./components/NavBar/Carrito"


function App() {
  return (
    <div className="NavBar">
      <NavBar />
      <div className='general-container'>
        <CardList title="NFT Rick!" />
      </div>
      {/* <SnackBar>
        <p>Se agrego el producto 1</p>
      </SnackBar> */}

      {/* <SnackBar>
        <button>Hola</button>
      </SnackBar> */}
    </div >
  )
}

export default App;
