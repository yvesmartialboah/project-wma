import axios from 'axios'
import {url_Base,create_Data} from '../UrlApp/index'
import { getParticular } from '../../redux/selectors';
import { useSelector } from "react-redux";

const data_Info_Particular = useSelector(getParticular);

export const CreateEntityParticular = async (featureLoad, navigation,Toast) => {
    try {
        // console.log('Dans CreateEntity')
        const response = await axios.post(url_Base + create_Data, {
            id: 1,
            numero: "",
            prenoms: "",
            nom: "",
            date_naissance: null,
            lieu_naissance: "",
            nationalite: "",
            profession: "",
            region_id: null,
            cercle_id: null,
            commune_id: null,
            village_quartier: "",
            adresse: "",
            autre_contact: "",
            image_client: "",
            image_contrat_signe: ""

        })
        
        console.log(response, 'response CreateEntity');
        if(response.code == 200){
            featureLoad()
            Toast.show({
                type: 'success',
                text1: "Félicitation",
                text2: 'Les données ont bien été enregistrées 🎉🎊',
                position: 'top',
                visibilityTime: 4000,
                autoHide: true,
            })
            navigation.navigate('Dashboard', {
                reload: {
                    date: new Date()
                }
            })
        }
        if(response.code != 200){
            featureLoad()
            Toast.show({
                type: 'error',
                text1: "Erreur",
                text2: "Une erreur s'est produite.",
                position: 'top',
                visibilityTime: 4000,
                autoHide: true,
            })
        }
    } catch (error) {
        featureLoad()
        Toast.show({
            type: 'error',
            text1: "Erreur",
            text2: 'Vérifier votre connexion internet.',
            position: 'top',
            visibilityTime: 4000,
            autoHide: true,
        })
        console.log(error, 'erreur interne updateUser');
    }
}

