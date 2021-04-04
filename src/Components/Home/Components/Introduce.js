import React from 'react'
import { Grid, Container, Typography, Avatar, makeStyles, Divider, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: "black",
        paddingTop: 150,
        paddingBottom: 150
    },
    avatarImg: {
        width: '100%',
        height: 'auto',
        maxWidth: 400,
        alignSelf: 'center'
    },
    nameHighLight: {
        fontWeight: 'bold',
        fontSize: 48,
        color: 'white',
        textAlign:'center'
    },
    textContent: {
        display: 'flex',
        flexDirection: "column",
        color: 'white',
    },
    dividerStyle: {
        background: '#333333',
        width: "100%",
    },
    subName: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
    },
    textDetails: {
        fontSize: 24,
        color: 'white'
    },
    textHello:{
        fontSize:24,
        paddingTop:30
    }
}))

const Introduce = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <Grid container>
                    <Grid item md={6} xs={12} className={classes.textContent}>
                        <Avatar alt="" src="/facebookProfile.jpeg" className={classes.avatarImg} />
                    </Grid>
                    <Grid item md={6} xs={12} alignItems="center" className={classes.textContent} direction="column">
                        <Typography className={classes.textHello}>Hello, I'm</Typography>
                        <Typography className={classes.nameHighLight} style={{ marginBottom: 10 }}>Warit Karnbunjob</Typography>
                        <Divider className={classes.dividerStyle} />
                        <Typography align="center" style={{ marginTop: 10 }} className={classes.textDetails}>If you are looking for a new programmer{"\n"} Please come and check out my profile first.</Typography>
                        <Button href="/waiwarit-resume.pdf" variant="outlined" color="primary" style={{marginTop:20}}>Download Resume</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Introduce