import {
  INFO_PARTICULAR,
  UPDATE_INFO_PARTICULAR,
  UPDATE_INFO_PARTICULAR_CLEAN
} from "../actionTypes"
import { particularModels } from "../Models/particularModels"

const defaultState = particularModels;

export const particularList = (state = defaultState, action) => {
  switch (action.type) {
    case INFO_PARTICULAR:
      // payload = [{}]
      return [...state, action.payload];

    case UPDATE_INFO_PARTICULAR:
      // map te retourne un nouveau state
      return state.map(param => {
        // console.log(param.id, 'param.id')
        // console.log(action.payload, 'action.payload')
        // console.log(action.payload.param, 'action.payload.param')
        // console.log(UPDATE_INFO_PARTICULAR, 'UPDATE_INFO_PARTICULAR')
        if (param.id === action.payload.id) {
          return {
            id: param.id,
            // --- InfoGeneral ---
            numero_tel: action.payload.param.numero_tel,
            nom: action.payload.param.nom,
            prenom: action.payload.param.prenom,
            civilite: action.payload.param.civilite,
            sex: action.payload.param.sex,
            situation_matrimoniale: action.payload.param.situation_matrimoniale,
            lieu_de_naissance: action.payload.param.lieu_de_naissance,
            nationalite: action.payload.param.nationalite,
            profession: action.payload.param.profession,
            date_naissance: action.payload.param.date_naissance,
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
            img_contrat: action.payload.param.img_contrat
            // --- SitGeoContact ---
          }
        } else {
          return param;
        }
      })
    case UPDATE_INFO_PARTICULAR_CLEAN:
      // map te retourne un nouveau state
      return state.map(param => {
        console.log(param, 'defaultState param')
        console.log(defaultState, 'defaultState')
        console.log(UPDATE_INFO_PARTICULAR_PieceContrat, 'UPDATE_INFO_PARTICULAR_PieceContrat')
        if (param.id === action.payload.id) {
          // console.log(action.payload.api, 'action.payload.api')
          return {
            id: param.id,

            // --- InfoGeneral ---
            civilite: null,
            sex: null,
            numero_tel: null,
            nom: null,
            prenom: null,
            situation_matrimoniale: null,
            lieu_de_naissance: null,
            nationalite: null,
            profession: null,
            date_naissance: null,
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
            img_contrat: null
            // --- SitGeoContact ---
          }
        } else {
          return param;
        }
      })
    default:
      return state;
  }
};
