import * as yup from 'yup'

export const SitGeoContactPYup = yup.object().shape({
    confirm_password: yup
        .string()
        .min(6, ({ min }) => `Le mot de passe doit contenir ${min} caractères`)
        .required('Le mot de passe doit être identique'),
    // password: yup
    //     .string()
    //     .min(6, ({ min }) => `Le mot de passe doit contenir ${min} caractères`)
    //     .required('Le mot de passe est requis'),
})