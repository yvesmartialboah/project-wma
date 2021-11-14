import * as yup from 'yup'

export const PieceContratPYup = yup.object().shape({
    type_piece: yup
        .string()
        .required('Le champ est requis !!!'),
    numero_piece: yup
        .string()
        .min(2, ({ min }) => `Veuillez saisir au moins ${min} caractères !!!`)
        .required('Le champ est requis !!!'),
    date_delivrance: yup
        .date().required('La date de délivrance est requise !!!'),
    date_expiration: yup
        .date().required("La date d'expiration est requise !!!"),
    img_piece: yup.lazy((value) =>
        /^data/.test(value)
          ? yup.string()
              .trim()
              .matches(
                /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*)$/i,
                'Url invalide',
              )
              .required()
          : yup.string().required("L'image de la pièce est requise !!!"),
      ),
    img_contrat: yup.lazy((value) =>
        /^data/.test(value)
          ? yup.string()
              .trim()
              .matches(
                /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*)$/i,
                'Url invalide',
              )
              .required()
          : yup.string().required("L'image du contrat est requis !!!"),
      )
})