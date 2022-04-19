import React from 'react'
import { Box, AppBar, Toolbar, IconButton, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { logOut } from '../../../redux/authSlice/authSlice';
import { useDispatch } from 'react-redux';
import { useStyles } from '../styles/headerStyle';

const Header = ({ setAbrir }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
            <AppBar
                position="static"
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

                    <Box className={classes.container}>
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
    )
}

export default Header