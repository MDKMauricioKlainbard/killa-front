'use client'
import { useFormik } from "formik"
import InputForm from "../InputForm/InputForm"
import ErrorForm from "../ErrorForm/ErrorForm"
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Por favor, ingresá un email válido.')
        .required('Tenés que ingresar tu email.'),
    password: Yup.string()
        .required('No olvides introducir tu contraseña.')
})

export default function LoginForm() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            checkbox: false,
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })
    const { errors, values, handleChange } = formik;
    return (
        <form role="auth" aria-label='Autenticación' onSubmit={formik.handleSubmit}>
            <h3>Introducí tus datos</h3>

            <InputForm name="email" value={values.email} onChange={handleChange} type='email' placeholder="Email" />
            <ErrorForm error={errors.email}/>
            

            <InputForm name="password" value={values.password} onChange={handleChange} type='password' placeholder="Contraseña" />
            <ErrorForm error={errors.password} />

            <div>
                <label>
                    <InputForm name="checkbox" value={values.checkbox} type="checkbox" onChange={handleChange} placeholder="" />
                    Mantener sesión iniciada
                </label>
                <label><a>Olvidé mi contraseña</a></label>
            </div>
            <button type='submit'>CONTINUAR</button>
        </form>
    )
}