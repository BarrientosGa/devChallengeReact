import React from 'react'
import Sidebar from './Sidebar'
import DateScreem from './DateScreem'
import ViewResults from './ViewResults'
import { useStyles } from './styles/viewResultsStyle'
import { Container, Box, Toolbar } from '@mui/material'


const Dashboard = () => {
    const classes = useStyles()
    return (
        <>

            <DateScreem />



            <Toolbar />

            <Container sx={{ display: "flex" }}>

                <Sidebar />

                <Box className={classes.box_view}>
                    <ViewResults />
                </Box>

            </Container>
        </>
    )
}

export default Dashboard