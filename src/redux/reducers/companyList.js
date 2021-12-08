import {
  INFO_COMPANY,
  UPDATE_INFO_COMPANY,
  UPDATE_INFO_COMPANY_CLEAN
} from "../actionTypes"
import { companyModels } from "../Models/companyModels"

const defaultState = companyModels;

export const companyList = (state = defaultState, action) => {
  switch (action.type) {
    case INFO_COMPANY:
      // payload = [{}]
      return [...state, action.payload];

    case UPDATE_INFO_COMPANY:
      // map te retourne un nouveau state
      return state.map(param => {
        // console.log(param.id, 'param.id')
        // console.log(action.payload, 'action.payload')
        // console.log(action.payload.param, 'action.payload.param')
        // console.log(UPDATE_INFO_COMPANY, 'UPDATE_INFO_COMPANY')
        if (param.id === action.payload.id) {
          return {
            id: param.id,
            // --- InfoGeneral ---
            numero_tel: action.payload.param.numero_tel,
            lieu_naissance: action.payload.param.lieu_naissance, // Add
            categorie: action.payload.param.categorie,
            denomination: action.payload.param.denomination,
            raison_sociale: action.payload.param.raison_sociale,
            secteur_activite: action.payload.param.secteur_activite,
            representant_legal: action.payload.param.representant_legal,
            contact_rep_legal: action.payload.param.contact_rep_legal,
            email: action.payload.param.email,
            fax: action.payload.param.fax,
            // --- InfoGeneral ---

            // --- SitGeoContact ---
            region: action.payload.param.region,
            cercle: action.payload.param.cercle,
            commune: action.payload.param.commune,
            quartier: action.payload.param.quartier,
            addresse: action.payload.param.addresse,
            other_numero: action.payload.param.other_numero,
            autre_contact: action.payload.param.autre_contact,
            autorite_delivrance: action.payload.param.autorite_delivrance,
            other_autorite: action.payload.param.other_autorite,
            // --- SitGeoContact ---

            // --- PieceContrat ---
            type_piece: action.payload.param.type_piece,
            numero_piece: action.payload.param.numero_piece,
            date_delivrance: action.payload.param.date_delivrance,
            date_expiration: action.payload.param.date_expiration,
            img_piece: action.payload.param.img_piece,
            img_contrat: action.payload.param.img_contrat,
            // --- SitGeoContact ---

            // --- Signature Numérique CGU ---
            signature_numerique: action.payload.param.signature_numerique
            // --- Signature Numérique CGU ---
          }
        } else {
          return param;
        }
      })
    case UPDATE_INFO_COMPANY_CLEAN:
      // map te retourne un nouveau state
      return state.map(param => {
        console.log(param, 'defaultState param')
        console.log(defaultState, 'defaultState')
        console.log(UPDATE_INFO_COMPANY_CLEAN, 'UPDATE_INFO_COMPANY_CLEAN')
        if (param.id === action.payload.id) {
          // console.log(action.payload.api, 'action.payload.api')
          return {
            id: param.id,

            // --- InfoGeneral ---
            numero_tel: null,
            lieu_naissance: null,
            categorie: null,
            raison_sociale: null,
            secteur_activite: null,
            representant_legal: null,
            contact_rep_legal: null,
            email: null,
            fax: null,
            // --- InfoGeneral ---

            // --- SitGeoContact ---
            region: null,
            cercle: null,
            commune: null,
            quartier: null,
            addresse: null,
            other_numero: null,
            autre_contact: null,
            // --- SitGeoContact ---

            // --- PieceContrat ---
            type_piece: null,
            numero_piece: null,
            date_delivrance: null,
            date_expiration: null,
            img_piece: null,
            img_contrat: null,
            // --- SitGeoContact ---

            // --- Signature Numérique CGU ---
            signature_numerique: null
            // --- Signature Numérique CGU ---
          }
        } else {
          return param;
        }
      })
    default:
      return state;
  }
};
