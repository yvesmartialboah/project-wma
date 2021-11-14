import axios from 'axios'
import { url_Base, login } from '../UrlApp/index'
export const LoginApp = (dispatch, featureLoad, navigation, Toast, emailAt, passwordAt) => {
    try {
        fetch(url_Base + login, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // email: emailAt,
                // password: passwordAt
                email: 'toto@yopmail.com',
                password: '00000000'
            })
        })
            .then((responses) => responses.json())
            .then((response) => {
                featureLoad()
                console.log(typeof response, 'responsex')
                console.log(response, 'response')
                // console.log(response.token, 'response token')
                // console.log(response.lol, 'response lol')
                if (response.token) {
                    Toast.show({
                        type: 'success',
                        text1: "Bon retour",
                        text2: 'Parmis nous 🎉🎊',
                        position: 'top',
                        visibilityTime: 4000,
                        autoHide: true,
                    })
                    // navigation.navigate('Dashboard', {
                    //   reload: {
                    //     date: new Date()
                    //   }
                    // })
                } else {
                    Toast.show({
                        type: 'error',
                        text1: "Erreur",
                        text2: "Email ou mot de passe érroné.",
                        position: 'top',
                        visibilityTime: 4000,
                        autoHide: true,
                    })
                }
                // console.log(typeof response.data, 'response data')
                // console.log(response.data.nom, 'response data nom')
                // console.log(response.status, 'response status')
            })
            .catch((error) => {
                featureLoad()
                // alert(error)
                Toast.show({
                    type: 'error',
                    text1: "Erreur",
                    text2: "Vérifier votre connexion internet.",
                    position: 'top',
                    visibilityTime: 4000,
                    autoHide: true,
                })
                console.log(error, 'erreur');
            });
    } catch (error) {
        featureLoad()
        console.log(error, 'erreur interne LoginApp');
    }
}

