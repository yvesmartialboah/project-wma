import * as yup from 'yup'

export const InfoGeneralYup = yup.object().shape({
    numero_tel: yup
        .number()
        .typeError('Veuillez spécifier un numéro svp.')
        .required('Le numéro de téléphone est requis !!!'),
    nom: yup
        .string()
        .min(2, ({ min }) => `Veuillez saisir au moins ${min} caractères !!!`)
        .required('Le nom est requis !!!'),
    prenom: yup
        .string()
        .min(2, ({ min }) => `Veuillez saisir au moins ${min} caractères !!!`)
        .required('Le prénom est requis !!!'),
    situation_matrimoniale: yup
        .string()
        .required("La situation matrimoniale est requise !!!"),
    lieu_de_naissance: yup
    .string()
    .required("Le lieu de naissance est requis !!!"),
    nationalite: yup
        .string()
        .required("La nationalité est requise !!!"),
    profession: yup
        .string()
        .required("La nationalité est requise !!!"),
    date_naissance: yup
        .date().required('La date de naissance est requise !!!'),

    // password: yup
    //     .string()
    //     .min(8, ({ min }) => `Password must be at least ${min} characters`)
    //     .required('Password is required'),
})