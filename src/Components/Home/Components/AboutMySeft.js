import React from 'react'
import { Grid, Container, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        
    },
    textTopic: {
        fontSize: 36,
        textAlign:'center'
    },
    textDetails:{
        fontSize:20,
        textAlign:'center'
    },
    bg:{
        backgroundColor:"white",
        padding:20
    }
})

const AboutMySeft = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Container maxWidth="md" className={classes.bg}>
                <Grid container>
                    <Grid item>
                        <Typography className={classes.textTopic} style={{ paddingBottom: 20 }}><b>ABOUT MYSELF</b></Typography>
                        <Typography className={classes.textDetails}>I am a person who always likes to learn new things. I enjoy coding because when I do coding, I feel like I am developing something that must be useful to people. And I will feel very happy. If only knew they liked it.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default AboutMySeft