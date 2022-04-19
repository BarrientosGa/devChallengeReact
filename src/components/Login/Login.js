import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useStyles } from './styles/loginStyle'
import { validationSchema } from './Validation/validation'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/authSlice/authSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from '../Utils/Spinner/Spinner'
import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

const Login = () => {
    const classes = useStyles()
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { token, status } = useSelector(state => state.user)
    const { handleSubmit, handleBlur,
        touched, errors, handleChange } = useFormik({
            enableReinitialize: true,
            initialValues: {
                email: '',
                password: ''
            },
            validationSchema: validationSchema,
            onSubmit: (values) => {
                dispatch(loginUser(values))
            }
        })

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token, navigate])

    return (
        <Container sx={{ marginTop: '25vh' }}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Paper sx={{ padding: '40px', backgroundColor: '#DADCE2' }} elevation={5}>
                    <Typography variant='h4' className={classes.title_form}>Inicie sesión</Typography>
                    <TextField
                        type="email"
                        name='email'
                        sx={{ marginTop: '25px' }}
                        placeholder="Ingrese su email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && errors.email}
                        helperText={touched.email && errors.email}
                        fullWidth
                    />

                    <TextField
                        type="password"
                        name='password'
                        sx={{ marginTop: '30px' }}
                        placeholder="Ingrese su password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && errors.password}
                        helperText={touched.password && errors.password}
                        fullWidth
                    />

                    {status === "Loading" ? <Box className={classes.box_spinner}><Spinner width={30} heigth={30} /></Box> :
                        <Box className={classes.box_btn}>
                            <Button type="submit" variant="contained">Enviar</Button>
                        </Box>
                    }
                </Paper >
            </form>
        </Container>
    )
}

export default Login