import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from './rick.png'
import Carrito from "./Carrito.js"

const NavBar = () => {
  return (

    <AppBar position="static">
      <Toolbar>
        <a href='https://www.adultswim.com/videos/rick-and-morty' target="_blank"><img src={logo} className="rickLogo" /></a>
        <h2 className='nombre'>Wubaluba</h2>
        <ul className='lista'>
          <span><a id='secciones'>Inicio</a></span>
          <span><a id='secciones'>Productos</a></span>
          <span><a id='secciones'>Sobre Nosotros</a></span>
        </ul>
        <Button color="inherit">Login</Button>
        <Carrito />

      </Toolbar>
    </AppBar>

  )
}
export default NavBar