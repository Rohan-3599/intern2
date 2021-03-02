import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from './components/Container'
import CssBaseline from '@material-ui/core/CssBaseline';
import './components/styles.css';
import Footer from './components/Footer'
const useStyles = makeStyles((theme) => {
} )
const App = () => {
    const classes = useStyles();
    return (
        
    <React.Fragment>
      <CssBaseline />
      <Container />
      <Footer />
    </React.Fragment>
    )
}

export default App
