import { AppBar, Toolbar, Typography, Grid, IconButton } from "@material-ui/core"
import React,{useState , useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../images/image52.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import './styles.css'

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "none",
    boxShadow: "none",
  },

  SearchIcon: {
    width: '18px',
    height: '18px',
  },
  mobile :{
    width: '24px',
    height: '24px',
  }, 
   root :{
    flexGrow: 1,
  }
}))
const Navbar = () => {
  const [mobileView, setmobileView] = useState(false)

  
  useEffect(() => {
    const setResponsiveness = () => {
      let screenwidth = window.innerWidth > window.screen.width ? window.screen.width : window.innerWidth;
      return screenwidth < 800
        ? setmobileView(true)
        : setmobileView(false);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  const classes = useStyles()
  const mobileBar = () => (
    <ul className="navbar">
      <li className="mobileicon">
      <IconButton size="small" >
                <SearchIcon style={{ color: '#FFFFFF' }} className={classes.mobile} />
              </IconButton >
      </li>
      <li className="mobileicon">
      <IconButton size="small" >
                <ShoppingBasketOutlinedIcon style={{ color: '#FFFFFF' }} className={classes.mobile} />
              </IconButton >
      </li>
      <li className="mobileicon">
      <IconButton size="small" >
                <MenuIcon style={{ color: '#FFFFFF' }} className={classes.mobile} />
              </IconButton >
      </li>
    </ul>
    
  )
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
         <div className="img-header"><img src={logo} alt="/" /> </div>

            {mobileView ? mobileBar() : <ul className="navbar">
              <IconButton size="small" >
                <SearchIcon style={{ color: '#FFFFFF' }} className={classes.SearchIcon} />
              </IconButton >
              <li className="desktop">

                <Typography style={{ fontSize: '16px', fontFamily: 'Open Sans', fontStyle: 'normal', lineHeight: '26px' }}>

                  Search
                           </Typography></li>
              <li className="desktop"><Typography style={{ fontSize: '16px', fontFamily: 'Open Sans', fontStyle: 'normal', lineHeight: '26px' }}>

                Help
                  </Typography></li>
              <li className="desktop"><Typography style={{ fontSize: '16px', fontFamily: 'Open Sans', fontStyle: 'normal', lineHeight: '26px' }}>

                Account
                  </Typography></li>
              <li className="desktop"> <IconButton size="small" >
                <ShoppingBasketOutlinedIcon style={{ color: '#FFFFFF' }} className={classes.SearchIcon} />
              </IconButton ></li>
            </ul>}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
