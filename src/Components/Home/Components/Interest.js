import React from 'react'
import {Grid, Typography, makeStyles, Container, Paper} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root:{
        paddingTop:40,
        paddingBottom:40
    },
    textHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    paperGrid:{
        display:'flex',
        paddingTop:20
    },
    paper:{
        padding:theme.spacing(2),
        textAlign:'center',
        backgroundColor:'#c42f2e',
    },
    textPaper:{
        fontSize:20,
        color:'white'
    }
}))

const Interest = () =>{
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <Typography className={classes.textHeader}>INTERESTED IN OR CURRENT STUDYING</Typography>
                <Grid container className={classes.paperGrid} spacing={3}>
                    <Grid item lg={4} md={6} xs={12}>
                        <Paper className={classes.paper} style={{ backgroundColor:"#085b99"}}><Typography className={classes.textPaper}><b>Flutter</b></Typography></Paper>
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <Paper className={classes.paper} style={{ backgroundColor:"#f68537"}}><Typography className={classes.textPaper}><b>Swift</b></Typography></Paper>
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <Paper className={classes.paper} style={{backgroundColor:"#323d47"}}><Typography className={classes.textPaper} ><b>Kotlin</b></Typography></Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Interest