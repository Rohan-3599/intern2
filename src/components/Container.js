import React,{useEffect} from 'react'
import { Box , Container ,  Grid, Typography } from '@material-ui/core'
import Navbar from './Navbar'
import Vectorcircle from './vectorcircle'
import useStyles from './hookstyles'
import userReview from './userReview';
import vector2 from '../images/Vector2.png'
import vector3 from '../images/Vector3.png'
import Upcomingcard from './Upcomingcard'
import Reviewcard from './Reviewcard'
import {useSelector , useDispatch} from 'react-redux'
import { getData } from '../redux/action'

const Divcontainer = () => {
  const classes = useStyles();
  const data = useSelector((state) => state);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <Container direction="column" className={classes.container} maxWidth="sm">
      <Grid item className="grid1" >
        <Navbar />
        <div className="div-gradient">
          <Typography className={classes.cari}>
            HJ Estate
</Typography>
        </div>
        <div className="div-text">
          <Typography className={classes.text}>
            Live from their sofa to yours. Get closer to your favourite houses, and never miss out.
          </Typography>
        </div>
        <div className="div-circle">
          <Vectorcircle />
          <Vectorcircle />
          <Vectorcircle />
          <Vectorcircle />

        </div>
      </Grid >
      <Grid item container className="grid2" justify="center" >
        <div className="new-div">
          
          <div component="div" className="grid-container">
            <div className="upcoming">
              <Typography style={{
                fontFamily: 'Libre Baskerville', fontSize: '32px', fontStyle: 'normal', fontWeight: 600, lineHeight: '40px', letterSpacing: '0em', textAlign: 'left',  color: 'rgb(51, 51, 51)',
              }}>Explore Rentals</Typography>
            </div>
            <div className="view">
                <Typography style={{
                  fontFamily: 'Nunito', fontSize: '16px', fontStyle: 'normal', fontWeight: 700, lineHeight: '24px', letterSpacing: '0em', color: '#fff', backgroundColor: '#77b800', padding: '4px 16px' , borderRadius: '8px'
                }}>View All</Typography>
              </div>
            </div>
          {/* </Grid> */}
          <div className="element">

          </div>
          <Grid container justify="center" alignItems="stretch" spacing={3} direction="row" style={{ marginTop: '20px' }}>
            {data.map((detail) => (
              <Upcomingcard detail={detail}/>
            ))}
          </Grid>
          <Grid container style={{ marginTop: '114px', position:'relative' }} >
            <div className="upcoming">
              <Typography style={{
                fontFamily: 'Libre Baskerville', fontSize: '32px', fontStyle: 'normal', fontWeight: 600, lineHeight: '40px', letterSpacing: '0em', textAlign: 'left', color: 'rgb(51, 51, 51)',
              }}>Reviews</Typography>
              <div className="review">
              <Typography style={{
                  fontFamily: 'Nunito', fontSize: '16px', fontStyle: 'normal', fontWeight: 600, lineHeight: '24px', letterSpacing: '0em', textAlign: 'right', color: 'rgb(51, 51, 51)', marginTop: '4px'
                }}>1</Typography>
                <Typography style={{
                  fontFamily: 'Nunito', fontSize: '16px', fontStyle: 'normal', fontWeight: 600, lineHeight: '24px', letterSpacing: '0em', textAlign: 'right', color: 'rgb(51, 51, 51)', opacity: 0.6, marginTop: '4px'
                }}>/12</Typography>
                <img src={vector2} className="vector2" alt="/" />
                <img src={vector3} className="vector3" alt="/" />
              </div>
            </div>

          </Grid>
          <div className="element">

          </div>
          <Grid container justify="center" alignItems="stretch" spacing={3} direction="row" style={{ marginTop: '20px' }}>
            {userReview.map((review) => (
              <Reviewcard review={review} />
            ))}
          </Grid>
        </div>
      </Grid>
    </Container>
  )
}

export default Divcontainer
