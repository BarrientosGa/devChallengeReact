import React from 'react'
import { Table, TableCell, TableContainer, TableHead, TableRow, Paper, TableBody } from '@mui/material';
import { useSelector } from 'react-redux';
/* import {useStyles} from './styles/viewResultsStyle' */






const ViewResults = () => {
    /* const classes = useStyles() */
    const { cases } = useSelector(state => state.case)

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Gestionado</TableCell>
                        <TableCell align="right">ID Caso</TableCell>
                        <TableCell align="right">Telefono</TableCell>
                        <TableCell align="right">Dni</TableCell>
                        <TableCell align="right">Grupo</TableCell>
                        <TableCell align="right">Orden</TableCell>
                        <TableCell align="right">Llamada</TableCell>
                        <TableCell align="right">Estado</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cases!==null && cases.map(({ id, last_updated, case_uuid, phone, extra_metadata, case_duration,case_result }) => (
                        <TableRow
                            key={id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >
                                {last_updated}
                            </TableCell>

                            <TableCell >
                                {case_uuid}
                            </TableCell>

                            <TableCell >
                                {phone}
                            </TableCell>

                            <TableCell >
                                {extra_metadata.dni}
                            </TableCell>

                            <TableCell >
                                {extra_metadata.grupo}
                            </TableCell>

                            <TableCell >
                                {extra_metadata.orden}
                            </TableCell>

                            <TableCell >
                                {case_duration}
                            </TableCell>

                            <TableCell >
                                {case_result.name}
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    )
}

export default ViewResults