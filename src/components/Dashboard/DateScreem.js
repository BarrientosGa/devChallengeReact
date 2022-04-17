import React, { useEffect, useState, useRef } from 'react'
import moment from 'moment';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useStyles } from './styles/dateStyle';
import { Box, Container } from '@mui/material'
import { getCases } from '../../redux/casesSlice/casesSlice';
import { useSelector, useDispatch } from 'react-redux'
import { format, isAfter } from 'date-fns'
import AdapterMoment from "@mui/lab/AdapterMoment";
import { sweetAlertMixin } from '../Utils/Alert/AlertState';



const DateScreem = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { clients } = useSelector(state => state.client)
    const [desde, setDesde] = useState(null);
    const [hasta, setHasta] = useState(null);
    const [isDate, setIsDate] = useState(false)
    const debounceRef = useRef();
    const ide = clients.map(({ id }) => {
        return id
    })

    useEffect(() => {

        if (debounceRef.current) {
            clearInterval(debounceRef.current);
        }
        // ver que ninguna de las dos fechas esten vacias
        if ((desde && hasta) !== null) {
            setDesde(moment(desde).format('YYYY-MM-DD'))
            setHasta(moment(hasta).format('YYYY-MM-DD'))
            setIsDate(true)
            /* console.log(desde);
            console.log(hasta); */
        }
    }, [desde, hasta])



    useEffect(() => {
        if (debounceRef.current) {
            clearInterval(debounceRef.current);
        }
        // ver que el año de la fecha "hasta" sea mayor al año de "desde"

        if ((isDate) && (moment(hasta).isAfter(desde))) {

            dispatch(getCases({ id: ide[0], desde, hasta }))
        }
    }, [desde, hasta, isDate, dispatch])


    return (
        <Container>
            <Box className={classes.datePicker}>
                <LocalizationProvider dateAdapter={AdapterMoment}  >
                    <DatePicker
                        label='Desde'
                        value={desde}
                        onChange={(newValue) => {
                            setDesde(newValue);
                        }}

                        /* inputFormat='yyyy-mm-dd' */
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                        label='Hasta'
                        value={hasta}
                        onChange={(newValue) => {
                            setHasta(newValue);
                        }}
                        /* inputFormat='yyyy-mm-dd' */
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>


            </Box>
        </Container>




    )
}

export default DateScreem