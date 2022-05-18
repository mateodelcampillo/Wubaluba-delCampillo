import NavBar from './components/NavBar/NavBar.js'
import CardList from "./components/CardList/CardList"
import CardFunction from './components/Productos/Card'
import './App.css';
import { Container, Grid } from '@mui/material';


function App() {
  return (
    <div className="NavBar">
      <NavBar />
      <CardList/>
      
      </div >
  )
}

export default App;
