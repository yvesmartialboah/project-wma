import {
    INFO_PARTICULAR, 
    UPDATE_INFO_PARTICULAR, 
    UPDATE_INFO_PARTICULAR_CLEAN,
    INFO_COMPANY,
    UPDATE_INFO_COMPANY,
    UPDATE_INFO_COMPANY_CLEAN,
    UPDATE_INFO_USER
} from "./actionTypes";

/* -------------------(PARTICULAR)------------------- */

// action = {type: NOM_TYPE, payload: data}
export const fetchInfoAction = (data) => ({
    type: INFO_PARTICULAR,
    payload: data
})

// Mettre à jour les données du process (PARTICULAR)

export const updateInfoParticular = (id, param) => ({
    type: UPDATE_INFO_PARTICULAR,
    payload: {
        id,
        param
    }
})

export const updateCleanP = (id, param) => ({
    type: UPDATE_INFO_PARTICULAR_CLEAN,
    payload: {
        id,
        param
    }
})

/* -------------------(PARTICULAR)------------------- */


/* -------------------(COMPANY)------------------- */

// action = {type: NOM_TYPE, payload: data}
export const fetchInfoActionCompany = (data) => ({
    type: INFO_COMPANY,
    payload: data
})

// Mettre à jour les données du process (PARTICULAR)

export const updateInfoCompany = (id, param) => ({
    type: UPDATE_INFO_COMPANY,
    payload: {
        id,
        param
    }
})

export const updateCleanCompany = (id, param) => ({
    type: UPDATE_INFO_COMPANY_CLEAN,
    payload: {
        id,
        param
    }
})

/* -------------------(COMPANY)------------------- */


/* -------------------(USER)------------------- */

export const updateInfoUser = (findId, param) => ({
    type: UPDATE_INFO_USER,
    payload: {
        findId,
        param
    }
})

/* -------------------(USER)------------------- */



