import "./Card.css"
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const CardFunction = ({ image, title, price, identify }) => {
const [count, setCount] = useState(0)
const removeCount = ()=>{
    if(count > 0){setCount(count - 1)}
}
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img id={identify} src={`./${image}`} />

                    </div>
                    <p>{title}</p>
                    <span>${price}</span>
                    <div className="count-item">
                        <Button onClick={removeCount}>-</Button>
                        <p>{count}</p>
                        <Button onClick={()=>{setCount(count + 1)}}>+</Button>
                    </div>
                    <Button variant='contained'>Mostrame un poco</Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default CardFunction