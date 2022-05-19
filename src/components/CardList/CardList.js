
import "./CardList.css"
import CardFunction from '../Productos/Card'
import { Grid } from '@mui/material';

const CardList = ({title})=>{
    return(<>
        <h2>{title}</h2>
        <Grid container className='container'>
          <Grid item md={3}>
            <CardFunction title = {"Cool Rick"} price={5} image={"Cool-Rick.jpg"}/>
            
          </Grid>
          <Grid item md={3}>
            <CardFunction identify="stupid" title = {"Cool Rick 1"} price={6} image={"Stupid-Rick.jpg"}/>
          </Grid>
          <Grid item md={3}>
            <CardFunction title = {"Cool Rick 2"} price={7} image={"Weird-Rick.jpg"}/>
          </Grid>
          
        </Grid>
        </>
    )
}
export default CardList