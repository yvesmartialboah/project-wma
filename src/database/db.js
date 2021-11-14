/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */

/*
    Import Realm database Schema
*/
import Realm from "realm";
import { SCHEMA_PARTICULAR, SCHEMA_COMPANY } from "../redux/actionTypes";

/*
    Definition Models and properties
*/

export const TodoCompany = {
    name: SCHEMA_COMPANY,
    primaryKey: 'id',
    properties: {
        id: 'int',
        firstuser: 'int',
        // --- InfoGeneral ---
        numero: 'string',
        categorie: 'string',
        denomination: 'string',
        raison_social: 'string',
        secteur_activite: 'string',
        representant_legal: 'string',
        contact_representant_legal: 'string',
        email: 'string',
        fax: 'string',
        // --- InfoGeneral ---

        // --- SitGeoContact ---
        region: 'string',
        cercle: 'string',
        commune: 'string',
        quartier: 'string',
        adresse: 'string',
        other_numero: 'string',
        autorite_delivrance: 'string',
        other_autorite: 'string',
        // --- SitGeoContact ---

        // --- PieceContrat ---
        type_piece: 'string',
        numero_piece: 'string',
        date_delivrance: 'string',
        date_expiration: 'string',
        
        // --- SitGeoContact ---
        // name: { type: 'string', indexed: true },
        // done: { type: 'bool', default: false },
    },
};

export const TodoParticular = {
    name: SCHEMA_PARTICULAR,
    primaryKey: 'id',
    properties: {
        id: 'int',
        firstuser: 'int',
        // --- InfoGeneral ---
        civilite: 'string',
        sexe: 'string',
        numero: 'string',
        nom: 'string',
        prenoms: 'string',
        situation_matrimoniale: 'string',
        lieu_naissance: 'string',
        nationalite: 'string',
        profession: 'string',
        date_naissance: 'string',
        // --- InfoGeneral ---

        // --- SitGeoContact ---
        region: 'string',
        cercle: 'string',
        commune: 'string',
        quartier: 'string',
        adresse: 'string',
        other_numero: 'string',
        autorite_delivrance: 'string',
        other_autorite: 'string',
        // --- SitGeoContact ---

        // --- PieceContrat ---
        type_piece: 'string',
        numero_piece: 'string',
        date_delivrance: 'string',
        date_expiration: 'string',
        // --- SitGeoContact ---
    },
};


// function for TodoParticulars

/*
    Add TodoParticulars
*/
export const insertNewTodoParticular = (newTodoParticular) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let task1;
        task1 = realm.write(() => {
            // task1 = 
            realm.create(SCHEMA_PARTICULAR, newTodoParticular); // Insertion de tuple
            resolve(newTodoParticular);
        });
        console.log(`Add TodoParticular : ${task1.nom} & ${task1.type_piece} & ${task1}`);
        // console.log(`created two tasks: ${task1.name} & ${task1.creationDate} &  ${task1.map((task) => task.name + '' + task.done)}`);
    }).catch((error) => reject(error));
})

/*
    Delete All TodoParticular
*/
export const deleteAllTodoParticular = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let allTodoParticulars = realm.objects(SCHEMA_PARTICULAR);
            realm.delete(allTodoParticulars);
            resolve();
        });
    }).catch((error) => reject(error));
})


/*
    List All TodoParticular
*/
export const queryAllTodoParticular = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let allTodoParticulars = realm.objects(SCHEMA_PARTICULAR);
            resolve(allTodoParticulars);
        });
    }).catch((error) => reject(error));
})


// function for TodoCompanys

/*
    Add TodoCompanys
*/
export const insertNewTodoCompany = (newTodoCompany) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        // let task1;
        realm.write(() => {
            // task1 = 
            realm.create(SCHEMA_COMPANY, newTodoCompany); // Insertion de tuple
            resolve(newTodoCompany);
        });
        //console.log(`created two tasks: ${task1.name} & ${task1.creationDate} &  ${task1.map((task) => task.name + '' + task.done)}`);
    }).catch((error) => reject(error));
})

/*
    Delete All TodoCompany
*/
export const deleteAllTodoCompany = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let allTodoCompanys = realm.objects(SCHEMA_COMPANY);
            realm.delete(allTodoCompanys);
            resolve();
        });
    }).catch((error) => reject(error));
})


/*
    List All TodoCompanys
*/
export const queryAllTodoTodoCompany = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let allTodoCompanys = realm.objects(SCHEMA_COMPANY);
            resolve(allTodoCompanys);
        });
    }).catch((error) => reject(error));
})



/*
    Option database
*/

const databaseOptions = {
    path: 'wmaApp.realm',
    schema: [TodoCompany, TodoParticular],
    schemaVersion: 0 // Optional
};

// Export Schema
export default new Realm(databaseOptions);