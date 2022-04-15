import React, { useEffect } from 'react'
import { useFormik, Formik, Field } from 'formik'
import './styles/style.css'
import { validationSchema } from './Validation/validation'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/authSlice/authSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from '../Utils/Spinner/Spinner'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { token, status } = useSelector(state => state.user)
    const { handleSubmit, handleBlur, handleReset,
        touched, errors, values, handleChange } = useFormik({
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
        <div className='container containerStyle'>
            <Formik >
                <form className='form' onSubmit={handleSubmit}>

                    <div className='paper shadow p-3 mb-5 bg-white rounded border'>

                        <h1 className='text-center'>Inicie sesión</h1>

                        <div className="form-group">

                            <Field
                                type="email"
                                name='email'
                                className="form-control input"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Ingrese su email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                            ) : null}
                        </div>

                        <div className="form-group">

                            <Field
                                type="password"
                                name='password'
                                className="form-control input"
                                id="exampleInputPassword1"
                                placeholder="Ingrese su contraseña"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.password && touched.password ? (
                                <div>{errors.password}</div>
                            ) : null}
                        </div>
                        {status === "Loading" ? <div className='div-spinner'><Spinner width={30} heigth={30} /></div>  :
                            <div className='div-btn'>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>
                        }

                    </div >
                </form>
            </Formik>

        </div>

    )
}

export default Login