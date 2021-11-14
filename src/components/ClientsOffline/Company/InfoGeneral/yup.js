import * as yup from 'yup'

export const InfoGeneralYup = yup.object().shape({
    numero_tel: yup
        .number()
        .typeError('Veuillez spécifier un numéro svp.')
        .required('Le numéro de téléphone est requis !!!'),
    contact_rep_legal: yup
        .number()
        .typeError('Veuillez spécifier un numéro svp.')
        .required('Le contact du répresentant est requis !!!'),
    representant_legal: yup
        .string()
        .required("Le champ est requis !!!"),
    categorie: yup
        .string()
        .required('La catégorie est requise !!!'),
    secteur_activite: yup
        .string()
        .required("Le secteur d'activité est requis !!!"),
    denomination: yup
        .string()
        .required('La dénomination est requise !!!'),
    raison_sociale: yup
        .string()
        .required('La raison sociale est requise !!!'),
    email: yup
        .string()
        .required("L'addresse mail est requise !!!"),
    fax: yup
        .string()
        .required("Le Fax est requis !!!"),

    // password: yup
    //     .string()
    //     .min(8, ({ min }) => `Password must be at least ${min} characters`)
    //     .required('Password is required'),
})