import React, { useEffect, useState, useRef } from 'react'
import moment from 'moment';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useStyles } from './styles/dateStyle';
import { Box } from '@mui/material'
import { getCases } from '../../redux/casesSlice/casesSlice';
import { useSelector, useDispatch } from 'react-redux'
import AdapterMoment from "@mui/lab/AdapterMoment";
import { sweetAlertMixin } from '../Utils/Alert/AlertState';
import "moment/locale/es"


const DateScreem = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { clients } = useSelector(state => state.client)
    const [desde, setDesde] = useState(null);
    const [hasta, setHasta] = useState(null);
    const [isDate, setIsDate] = useState(false)
    const debounceRef = useRef();
    const ide = clients[0]

    const obtainCases = () => {
        if (debounceRef.current) {
            clearInterval(debounceRef.current);
        }
        if ((isDate) && (moment(hasta).isAfter(desde))) {
            debounceRef.current = setTimeout(() => {
                dispatch(getCases({ id: ide.id, desde, hasta }))
            }, 500)
        }
        else if (((isDate) && (moment(hasta).isBefore(desde)))) {
            return sweetAlertMixin('error', 'La fecha desde debe ser mayor o igual a hasta')
        }
    }

    useEffect(() => {
        if ((desde && hasta) !== null) {
            setDesde(moment(desde).format('YYYY-MM-DD'))
            setHasta(moment(hasta).format('YYYY-MM-DD'))
            setIsDate(true)
        }
    }, [desde, hasta])

    useEffect(() => {
        obtainCases()
    }, [desde, hasta, isDate, dispatch])

    return (
        <>
            <Box className={classes.box_datePicker}>
                <LocalizationProvider dateAdapter={AdapterMoment} locale='es' >
                    <DatePicker
                        label='Desde'
                        value={desde}
                        onChange={(newValue) => {
                            setDesde(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterMoment} locale='es' >
                    <DatePicker
                        label='Hasta'
                        value={hasta}
                        onChange={(newValue) => {
                            setHasta(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Box>
        </>
    )
}

export default DateScreem