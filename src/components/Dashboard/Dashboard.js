import React, { useState } from 'react'
import Sidebar from './Sidebar'
import DateScreem from './DateScreem'
import ViewResults from './ViewResults'
import { useStyles } from './styles/viewResultsStyle'
import { Box, Hidden } from '@mui/material'
import Header from './Header'

const Dashboard = () => {
    const classes = useStyles()
    const [abrir, setAbrir] = useState(false)
    return (
        <>
            <Header setAbrir={() => setAbrir(!abrir)} />
            <DateScreem />

            <Box sx={{ display: "flex" }}>
                <Hidden smDown>
                    <Sidebar variant="permanent" open={true} />
                </Hidden>

                <Hidden smUp>
                    <Sidebar variant="temporary" open={abrir} onClose={() => setAbrir(!abrir)} />
                </Hidden>

                <Box className={classes.box_view}>
                    <ViewResults />
                </Box>
            </Box>
        </>
    )
}

export default Dashboard