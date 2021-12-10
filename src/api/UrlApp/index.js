// Api - Application  console.log(typeof data, 'data')

// const url_Base = ''
const Api_Base = 'https://api.kankoumoussa.org/api/'

const searchNumero = 'kankumussa/kyc/clients/search/numero/' // Recherche de l'existance du numéro 

const loginApp = 'login' // Connexion à l'api

const saveParticular = 'enregisterParticulier?token=' // Enregistrement des Particuliers

const saveCompany = 'enregisterEntreprise?token=' // Enregistrement des Entreprises

const statPeriode = 'stat2/' // Statistique Période

const transfertDataParticularApi = 'enregisterParticuliers' // Transfert de données des Particuliers

const transfertDataCompanyApi = 'enregisterEntreprises' // Transfert de données des Entreprises

export {
    Api_Base,
    loginApp,
    searchNumero,
    saveParticular,
    saveCompany,
    statPeriode,
    transfertDataParticularApi,
    transfertDataCompanyApi
}