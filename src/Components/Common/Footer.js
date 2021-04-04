import React from 'react'
import { makeStyles, Container, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        backgroundColor: 'black',
        paddingTop: 40,
        paddingBottom: 40
    },
    textCopyRight: {
        color: 'white',
        textAlign: 'center'
    },
    textContent: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        paddingBottom:20
    },
    content: {
        display: 'flex'
    }
})

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth="md" >
                <Grid container className={classes.content} direction="column">
                    <Typography className={classes.textContent}>I hope we can work together.</Typography>
                    <Typography className={classes.textCopyRight}>Email : warit.karnbunjob@gmail.com</Typography>
                    <Typography className={classes.textCopyRight}>Telephone : +66-86-328-1288</Typography>
                    <Typography className={classes.textCopyRight}>&copy; Copyright 2021 by Warit Karn.</Typography>
                    <Typography className={classes.textCopyRight}>Created by React</Typography>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer