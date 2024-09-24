'use client'
import { useFormik } from "formik"
import * as Yup from 'yup'
import InputForm from "../InputForm/InputForm"
import ErrorForm from "../ErrorForm/ErrorForm"

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .required('Debes poner tu nombre.'),
    email: Yup.string()
        .email('Debes ingresar un email válido.')
        .required('El email es obligatorio.'),
    password: Yup.string()
        .required('Debes ingresar una contraseña'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir.')
        .required('Debes confirmar tu contraseña.'),
})

export default function RegisterForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: RegisterSchema,
        onSubmit: (values) => console.log(values)
    })

    const { errors, handleChange, values } = formik
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Nombre completo:</label>
            <InputForm name='name' type='name' onChange={handleChange} value={values.name} placeholder="Nombre completo" />
            <ErrorForm error={errors.name} />

            <label htmlFor="email">Email:</label>
            <InputForm name='email' type='email' onChange={handleChange} value={values.email} placeholder="Email" />
            <ErrorForm error={errors.email} />

            <label htmlFor="password">Contraseña:</label>
            <InputForm name='password' type='password' onChange={handleChange} value={values.password} placeholder="Contraseña" />
            <ErrorForm error={errors.password} />

            <label htmlFor="confirmPassword">Confirmar contraseña:</label>
            <InputForm name='confirmPassword' type='password' onChange={handleChange} value={values.confirmPassword} placeholder="Confirmar contraseña" />
            <ErrorForm error={errors.confirmPassword} />

            <button type='submit'>REGISTRARSE</button>
        </form>
    )
}