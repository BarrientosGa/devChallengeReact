import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getClient } from '../../redux/clientsSlice/clientsSlice'
import { Drawer, Typography, List, ListItem, Toolbar, Divider } from '@mui/material'
import { useStyles } from './styles/sidebarStyles'

const Sidebar = ({ variant, open, onClose }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { clients } = useSelector(state => state.client)
    useEffect(() => {

        dispatch(getClient())

    }, [dispatch])

    return (
        <Drawer
            className={classes.drawer}
            sx={{ backgroundColor: '#E5E5E5' }}
            variant={variant}
            open={open}
            onClose={onClose ? onClose : null}
            classes={{ paper: classes.drawerPaper }}

        >
            <Toolbar />
            <Divider />
            <Typography variant="h6" color="initial" sx={{ marginLeft: '15px' }}>Cliente</Typography>
            <List>
                {clients.map(({ name, id }) => (
                    <ListItem key={id}>
                        <Typography color="initial">{name}</Typography>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default Sidebar