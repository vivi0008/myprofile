import React from 'react'
import { Grid, Typography, Container, makeStyles, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "black",
        paddingTop: 30
    },
    textHeader: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    paerSkill: {
        padding: theme.spacing(2),
        textAlign: 'center',
        alignSelf: 'center',
    },
    gridSkill: {
        display: 'flex',
        alignItems:'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    textSkill: {
        fontSize: 18,
    },
    centerPaper:{
        flexGrow:1,
        alignSelf:'center'
    }
}))

const MySkill = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Typography className={classes.textHeader}>MY SKILLS</Typography>
                <Grid container spacing={3} className={classes.gridSkill} >
                    <Grid item md={3} sm={6} xs={12} className={classes.centerPaper}>
                        <Paper elevation={3} className={classes.paerSkill} style={{ backgroundColor: "#282d33" }}><Typography className={classes.textSkill} style={{ color: "#61dafb" }}><b>React Native</b></Typography></Paper>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Paper elevation={3} className={classes.paerSkill} style={{ backgroundColor: "#282d33" }}><Typography className={classes.textSkill} style={{ color: "#61dafb" }}><b>ReactJs</b></Typography></Paper>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Paper elevation={3} className={classes.paerSkill} style={{ backgroundColor: "#407e37" }}><Typography className={classes.textSkill} style={{ color: "white" }}><b>NodeJs</b></Typography></Paper>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Paper elevation={3} className={classes.paerSkill} style={{ backgroundColor: "#1b1560" }}><Typography className={classes.textSkill} style={{ color: "white" }}><b>NoSQL</b></Typography></Paper>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Paper elevation={3} className={classes.paerSkill} style={{ backgroundColor: "#305e6e" }}><Typography className={classes.textSkill} style={{ color: "#db8604" }}><b>MySQL</b></Typography></Paper>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Paper elevation={3} className={classes.paerSkill} style={{ backgroundColor: "#3298ea" }}><Typography className={classes.textSkill} style={{ color: 'white' }}><b>Docker</b></Typography></Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default MySkill