import * as yup from 'yup'

export const SitGeoContactPYup = yup.object().shape({
    region: yup
        .string()
        .required("La situation matrimoniale est requise !!!"),
    cercle: yup
        .string()
        .required("Le cercle est requis !!!"),
    commune: yup
        .string()
        .required("La commune est requise !!!"),
    quartier: yup
        .string()
        .required("Le quartier est requis !!!"),
    addresse: yup
        .string()
        .required("L'addresse est requise !!!"),
    autorite_delivrance: yup
        .string()
        .required("L'autorité de délivrance est requise !!!"),
    other_autorite: yup
        .string(),
    other_numero: yup
        .number()
        .typeError('Veuillez spécifier un numéro svp.')
        .required('Le numéro de téléphone est requis !!!'),
    // password: yup
    //     .string()
    //     .min(8, ({ min }) => `Password must be at least ${min} characters`)
    //     .required('Password is required'),
})