import React from 'react'
import { Container, Grid, Typography, makeStyles, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        width: "100%",
        height: "80vh",
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    },
    textContent:{

    },
    buttonStyle:{
        backgroundColor:"#085b99",
        color:'white',
        width:theme.spacing(2) * 10,
        height:theme.spacing(2) * 3
    }
}))

const PageNotFound = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant="h1">404 ERROR</Typography>
            <Typography  variant="h3">Sorry, the page not page.</Typography>
            <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}><Button variant="contained" className={classes.buttonStyle} style={{marginTop:30}}>Go to Homepage</Button></Link>
        </div>
    )
}

export default PageNotFound