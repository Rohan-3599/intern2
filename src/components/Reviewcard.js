import React from 'react'
import { Card, Grid, Typography , CardContent } from '@material-ui/core'
import useStyles from './hookstyles'

const Reviewcard = ({review}) => {
    const classes = useStyles();
    return (
        <Grid item lg={4} xs={4} sm={4} md={4} spacing={16} style={{position: 'relative'}} >
                <Card className={classes.user} key={review.id} >
                   
                   
                   <div className="header">
                   <img src={review.url} className="review-image" alt="/" />
                   <div className="name-info">
                   <Typography className={classes.newUser}>
                           {review.fullname}
                   </Typography>
                   <div className="small-box">
                   <img src={review.flag} className="flag" alt="/" />
                   <Typography className={classes.location}>
                     {review.location}
                   </Typography>
                   </div>
                   </div>
                   
                   </div>
                  <CardContent className={classes.cardContent} style={{display:'flex' }}>
                    <Typography variant="body2" className={classes.typoReview}  component="p">{review.text}</Typography>
                  </CardContent>
                  
                </Card>
               
                {/* <div className="background2"></div> */}
              </Grid>
    )
}

export default Reviewcard
