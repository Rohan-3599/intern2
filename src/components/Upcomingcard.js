import React from 'react'
import {  Card, Grid, Typography, CardMedia,  CardContent } from '@material-ui/core'
import useStyles from './hookstyles'
import show from '../images/show.png'
import { useState} from 'react'
import Vector1 from '../images/Vector1.png'
import ticket from '../images/Ticket.png'
const Upcomingcard = ({detail}) => {
    const classes = useStyles();
    const [hover, sethover] = useState(false);
    return (
        <Grid item lg={3} xs={3} md={3} sm={3} style={{position: 'relative'}} >
                  <div className="line"></div>
                  {hover ? <img src={show} onMouseLeave={() => sethover(false)}  className="ticket" alt="/" /> :
                  <img src={ticket} onMouseOver={() => sethover(true)} className="ticket" alt="/" /> }
                <Card className={classes.card} key={detail.id} >

                  <CardMedia className={classes.media} image={detail.url} />

                  <div className={classes.details}>
                    <Typography variant="body2" className={classes.content} component="h2">{detail.category}</Typography>
                  </div>
                  <Typography className={classes.title} gutterBottom variant="h5" component="h2">{detail.name}</Typography>
                  <CardContent style={{display:'flex' }}>
                    <Typography variant="body2" className={classes.info}  component="p">{detail.extra}</Typography>
                    <img src={Vector1} className="arrow"/>
                  </CardContent>
                  
                </Card>
               
                {/* <div className="background"></div> */}
              </Grid>
    )
}

export default Upcomingcard
