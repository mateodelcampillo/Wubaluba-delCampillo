import NavBar from './components/NavBar/NavBar.js'
import CardList from "./components/CardList/CardList"
import CardFunction from './components/Productos/Card.js';
import './App.css';
import { Container, Grid } from '@mui/material';
import SnackBar from "./components/SnackBar/SnackBar.js"
import Carrito from "./components/NavBar/Carrito"
import Modal from './components/Modal/Modal.js';
import { useState } from 'react'


function App() {
  const [open, setOpen] = useState(false)
  const handleClose = function(){
    setOpen(false)
  }
  return (
    <div className="NavBar">
      <NavBar />
      <div className='general-container'>
        <CardList title="NFT Rick!" />
      </div>
      <SnackBar>
        <p>Se agrego el producto 1</p>
      </SnackBar>

      <SnackBar>
        <button>Hola</button>
      </SnackBar>
      <button onClick={function(){setOpen(true)}}>Abrir Modal</button>
      <Modal handleClose={handleClose} open={open}/>
    </div >
  )
}

export default App;
