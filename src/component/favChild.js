import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ReactCardFlip from 'react-card-flip';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux'
import { setMyFav, removeFav } from '../Data/Reducer';

export const FavChild = ({ item }) => {
    const [isFlipped, setFlipped] = useState(false)
    const [fav, setFav] = useState(true)
    const dispatch = useDispatch()
    const data = useSelector(state => state.Data)
    const { Fav } = data
    const remove=(item)=>{
dispatch(removeFav(item))
    }
    return (
        <div>
            {console.log(Fav)}
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <Card sx={{ width: 194, marginTop: 5, marginLeft: 1 }} key={item.id}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={item.image}
                        alt="Paella dish"
                        sx={{ objectFit: "contain" }}
                        onClick={() => setFlipped(!isFlipped)}
                    />
                </Card>
                <div>
                    <Card sx={{ width: 194, marginTop: 5, marginLeft: 1, height: 194 }}>
                        <CardHeader
                            title={item.name}
                            onClick={() => setFlipped(!isFlipped)}
                        />
                        <CardContent onClick={() => setFlipped(!isFlipped)}>
                            <label> Gender: {item.gender}</label><br />
                            <label> Status: {item.status}</label><br />
                            <label> Species: {item.species}</label>
                        </CardContent>
                        <CardActions disableSpacing sx={{ paddingTop: 0 }}>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon style={fav ? { color: "red" } : { color: "grey" }} onClick={() =>remove(item.id)} />
                            </IconButton>

                        </CardActions>

                    </Card>
                </div>
            </ReactCardFlip>
        </div>
    )
}
