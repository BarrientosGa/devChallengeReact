import * as yup from 'yup';

export const validationSchema = yup.object({
    email: yup
        .string('Ingrese su email')
        .email('Ingrese una dirección de email valida')
        .required('Es necesario ingresa una dirección de email'),

    password: yup
        .string('Ingrese su contraseña')
        .min(6 , 'La contraseña debe tener un mínimo de 6 caracteres')
        .required('Es necesario ingresar la contraseña')
})
