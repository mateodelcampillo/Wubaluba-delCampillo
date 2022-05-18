import NavBar from './components/NavBar/NavBar.js'
import CardFunction from './components/Productos/Card'
import './App.css';
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <div className="NavBar">
      <NavBar />
      <Container>
        <Grid container className='container'>
          <Grid item md={3}>
            <CardFunction title = {"Rick Cool"} price={5}/>
          </Grid>
        </Grid>

      </Container>
    </div >
  )
}

export default App;
