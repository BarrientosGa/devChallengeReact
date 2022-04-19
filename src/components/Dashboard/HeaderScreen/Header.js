import React from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography, Button, Grid } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { logOut } from '../../../redux/authSlice/authSlice';
import { useDispatch } from 'react-redux';
import { useStyles } from '../styles/headerStyle';

const Header = ({ setAbrir }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                className={classes.appbar}
                sx={{ backgroundColor: '#AC0202' }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                        onClick={() => setAbrir()}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ flexGrow: 1}}>
                        <Button
                            color="inherit"
                            onClick={() => dispatch(logOut())}
                            
                        >
                            <ExitToAppIcon sx={{ marginRight: '5px' }} />
                            Log out
                        </Button>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header