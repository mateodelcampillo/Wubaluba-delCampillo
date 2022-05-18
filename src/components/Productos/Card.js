import "./Card.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CoolRick from './Cool_Rick.jpg'
const CardFunction = (props) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={CoolRick} />
                    </div>
                    <p>{props.title}</p>
                    <span>{props.price}</span>
                    <Button variant='contained'>Mostrame un poco</Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default CardFunction