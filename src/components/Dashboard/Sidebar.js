import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getClient } from '../../redux/clientsSlice/clientsSlice'
import { Drawer, Typography, List, ListItem, Toolbar, Divider, Container } from '@mui/material'
import { useStyles } from './styles/sidebarStyles'

const Sidebar = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { clients } = useSelector(state => state.client)
    useEffect(() => {

        dispatch(getClient())

    }, [dispatch])

    return (

        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{ paper: classes.drawerPaper }}

        >
            <Toolbar />
            <Divider />
            <Typography variant="h4" color="initial">Cliente</Typography>
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