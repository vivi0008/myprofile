import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function Header() {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <IconButton color="inherit" >
                        <Typography>HOME</Typography>
                    </IconButton>
                </Link>
            </MenuItem>

            <MenuItem>
                <IconButton color="inherit" href="/waiwarit-resume.pdf">
                    <Typography>RESUME</Typography>
                </IconButton>
            </MenuItem>

            <MenuItem>
                <Link to="/project" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <IconButton color="inherit" >
                        <Typography>HOME</Typography>
                    </IconButton>
                </Link>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar elevation={0}>
                <Toolbar>
                    <Typography className={classes.title} variant="h4" noWrap>
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}><b>WaritK</b></Link>
                    </Typography>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Link to="/"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <IconButton color="inherit" >
                                <Typography>HOME</Typography>
                            </IconButton>
                        </Link>
                        <IconButton color="inherit" href="/waiwarit-resume.pdf">
                            <Typography>RESUME</Typography>
                        </IconButton>
                        <Link to="/project"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <IconButton color="inherit" >
                                <Typography>PROJECT</Typography>
                            </IconButton>
                        </Link>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}

