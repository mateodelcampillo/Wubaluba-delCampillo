import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from './rick.png'

const NavBar = () => {
  return (

    <AppBar position="static">
      <Toolbar>
        <img src={logo} className="rickLogo" />
        <h2 className='nombre'>Wubaluba</h2>
        <ul className='lista'>
        <span><button>Inicio</button></span>
        <span><button>Productos</button></span>
        <span><button>Sobre Nosotros</button></span>
        </ul>
        <Button color="inherit">Login</Button>
        

      </Toolbar>
    </AppBar>

  )
}
export default NavBar