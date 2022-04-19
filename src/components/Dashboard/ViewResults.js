import React from 'react'
import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Box, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { useStyles } from './styles/viewResultsStyle'
import TodayIcon from '@mui/icons-material/Today';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import Spinner from '../Utils/Spinner/Spinner'

const ViewResults = () => {
    const classes = useStyles()
    const { cases, status } = useSelector(state => state.case)

    return (
        <Paper className={classes.containerList}>
            <Table>
                <TableHead>
                    <TableRow className={classes.tr}>
                        <TableCell className={classes.th} align="left">Gestionado</TableCell>
                        <TableCell className={classes.th} align="left">ID Caso</TableCell>
                        <TableCell className={classes.th} align="left">Telefono</TableCell>
                        <TableCell className={classes.th} align="left">Dni</TableCell>
                        <TableCell className={classes.th} align="left">Grupo</TableCell>
                        <TableCell className={classes.th} align="left">Orden</TableCell>
                        <TableCell className={classes.th} align="left">Llamada</TableCell>
                        <TableCell className={classes.th} align="left">Estado</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {status === 'Loading' ? <Spinner className={classes.box_spinner} /> : cases.map(({ id, last_updated, case_uuid, phone, extra_metadata, case_duration, case_result }) => (
                        <TableRow
                            className={classes.tr}
                            key={id}
                        >
                            <TableCell className={classes.td}  component="th" scope="row" sx={{ display: 'flex', alignItems: 'center', color: 'red' }} >
                                <TodayIcon sx={{ color: '#AC0202' }} />
                                {last_updated}
                            </TableCell>

                            <TableCell className={classes.td} sx={{ color: '#274698' }}>
                                {case_uuid}
                            </TableCell>

                            <TableCell className={classes.td} sx={{ fontWeight: 'bold', color: '#274698' }}  >
                                {phone}
                            </TableCell>

                            <TableCell className={classes.td} sx={{ color: 'red' }}>
                                {extra_metadata.dni}
                            </TableCell>

                            <TableCell className={classes.td} sx={{ color: 'red' }} >
                                {extra_metadata.grupo}
                            </TableCell>

                            <TableCell className={classes.td} sx={{ color: 'red' }} >
                                {extra_metadata.orden}
                            </TableCell>

                            <TableCell className={classes.td} sx={{ display: 'flex', alignItems: 'center', color: 'red' }}>
                                <GroupWorkIcon sx={{ color: '#AC0202' }} />
                                {case_duration}
                            </TableCell>

                            <TableCell className={classes.td} sx={case_result.is_final === false ? { backgroundColor: '#E9C1C1' } : { backgroundColor: '#E1EEFD' }}>
                                {case_result.name}
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper >
    )
}

export default ViewResults