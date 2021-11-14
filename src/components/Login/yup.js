import * as yup from 'yup'

export const LoginYup = yup.object().shape({
    email: yup
        .string()
        .required("L'adresse mail est requise !!!"),
    password: yup
        .string()
        .min(4, ({ min }) => `Le mot de passe doit avoir ${min} caractères`)
        .required('Le mot de passe est requis !!!'),
})