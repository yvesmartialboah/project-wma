import React, { useState, useEffect } from "react"
import { styles } from './styles';
import withHOC from '../../_Shared/Lib/index'

const TransfertsComponent = ({ navigation, lib, route }) => {
    const {
        nativebase,
        reactNative,
        MaterialIcons,
        MaterialCommunityIcons,
        AntDesign,
        Ionicons,
        SplashScreen,
        Animatable,
        DateTimePicker,
        media,
        colorApp,
        HeaderComponent,
        moment,
        Formik,
        Redux,
        ReduxAction,
        ReduxSelectors,
        Toast,
        realm,
        RealmCrud,
        AwesomeLoading,

        Api_Base,
        transfertDataParticularApi,
        transfertDataCompanyApi
    } = lib

    const {
        queryAllTodoParticular,
        deleteAllTodoParticular,
        queryAllTodoTodoCompany,
        deleteAllTodoCompany,
    } = RealmCrud

    const {
        useSelector,
        useDispatch
    } = Redux

    const {
        updateInfoParticular,
        updateCleanP
    } = ReduxAction

    const {
        getuser
    } = ReduxSelectors

    // Librairie Enfant
    const {
        StyleSheet,
        View,
        TouchableOpacity,
        StatusBar,
        ScrollView,
        Dimensions,
        ImageBackground,
        FlatList
    } = reactNative

    const {
        backgroungImage,
        logo
    } = media

    const {
        themeColor,
        themeFormLogin,
    } = colorApp

    const {
        Image,
        NativeBaseProvider,
        Box,
        Text,
        Heading,
        VStack,
        FormControl,
        Input,
        Button,
        Icon,
        HStack,
        Stack,
        Center,
        Radio,
        Select,
        CheckIcon,
        IconButton,
    } = nativebase

    const { height } = Dimensions.get('window');
    const [ClientRegisterLocal, setClientRegisterLocal] = useState(null);
    const [ClientRegisterLocalCount, setClientRegisterLocalCount] = useState(null);
    const [ClientCompanyLocal, setClientCompanyLocal] = useState(null);
    const [ClientCompanyLocalCount, setClientCompanyLocalCount] = useState(null);
    const [loader, setLoader] = useState(false);
    const data_user = useSelector(getuser);

    const featureLoad = () => {
        setLoader(false)
    }

    const getClientRegisterLocal = () => {
        queryAllTodoParticular().then((response) => {
            // console.log(response,`ClientRegisterLocal`);
            // console.log(response.length,`ClientRegisterLocal length`);
            setClientRegisterLocal(response);
            setClientRegisterLocalCount(response.length);
        }).catch((error) => {
            console.log(error, `error`);
        });
    }

    const getClientCompanyLocal = () => {
        queryAllTodoTodoCompany().then((response) => {
            // console.log(response,`ClientCompanyLocal`);

            setClientCompanyLocal(response);
            setClientCompanyLocalCount(response.length);
        }).catch((error) => {
            console.log(error, `error`);
        });
    }

    const TransfertDataClient = () => {
        // const url = 'http://45.13.59.98/api_kankumussa/api/enregisterParticuliers'; //server Plesk Us
        const url = Api_Base + transfertDataParticularApi + "?token=" + data_user[0].token; //server Plesk Us
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ClientRegisterLocal)
        })
            .then((responses) => responses.json())
            .then((response) => {
                featureLoad()
                // console.log(typeof response, 'responsex')
                console.log(response, 'response')
                // if (response.status == 200) {
                if (response.Nb_enregistrements_effectifs > 0) {
                    deleteAllTodoParticular().then((response) => {
                        console.log(response, `TodoParticularLocal`);
                        // console.log(response.length,`ClientCompanyLocal length`);
                        // setClientCompanyLocal(null);
                        // setClientCompanyLocalCount(0);
                    }).catch((error) => {
                        console.log(error, `error`);
                    });
                    Toast.show({
                        type: 'success',
                        text1: "Félicitation",
                        text2: 'Transfert réussie avec succès 🎉🎊',
                        position: 'top',
                        visibilityTime: 4000,
                        autoHide: true,
                    })
                    navigation.navigate('Dashboard', {
                        reload: {
                            date: new Date()
                        }
                    })
                } else {
                    Toast.show({
                        type: 'error',
                        text1: "Erreur",
                        text2: "échec du transfert veuillez reprendre.",
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
                console.log(error, 'erreur x');
                Toast.show({
                    type: 'error',
                    text1: "Erreur",
                    text2: "échec du transfert veuillez reprendre.",
                    position: 'top',
                    visibilityTime: 4000,
                    autoHide: true,
                })
            });

    }

    const TransfertDataEntreprise = () => {
        // const url = 'http://45.13.59.98/api_kankumussa/api/enregisterEntreprises'; //server Plesk Us
        const url = Api_Base + transfertDataCompanyApi + "?token=" + data_user[0].token; //server Plesk Us
        console.log(url, "url")
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ClientCompanyLocal)
        })
            .then((responses) => responses.json())
            .then((response) => {
                featureLoad()
                // console.log(typeof response, 'responsex')
                console.log(response, 'response')
                // if (response.status == 200) {
                if (response.Nb_enregistrements_effectifs > 0) {
                    deleteAllTodoCompany().then((response) => {
                        console.log(response, `ClientCompanyLocal`);
                        // console.log(response.length,`ClientCompanyLocal length`);
                        // setClientCompanyLocal(null);
                        // setClientCompanyLocalCount(0);
                    }).catch((error) => {
                        console.log(error, `error`);
                    });
                    Toast.show({
                        type: 'success',
                        text1: "Félicitation",
                        text2: 'Transfert réussie avec succès 🎉🎊',
                        position: 'top',
                        visibilityTime: 4000,
                        autoHide: true,
                    })
                    navigation.navigate('Dashboard', {
                        reload: {
                            date: new Date()
                        }
                    })
                } else {
                    Toast.show({
                        type: 'error',
                        text1: "Erreur",
                        text2: "échec du transfert veuillez reprendre.",
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
                console.log(error, 'erreur');
                Toast.show({
                    type: 'error',
                    text1: "Erreur",
                    text2: "échec du transfert veuillez reprendre.",
                    position: 'top',
                    visibilityTime: 4000,
                    autoHide: true,
                })
            });
    }


    useEffect(() => {
        // console.log(data_user[0].token, 'token')
        // console.log(route.params.reload.date, 'route.params.reload.date')
        getClientRegisterLocal()
        getClientCompanyLocal()
    }, [route.params.reload.date,data_user]);



    return (

        <NativeBaseProvider>
            <AwesomeLoading indicatorId={4} size={50} isActive={loader} text="Transfert de données en cours" />
            <ScrollView>

                <Stack space={5} mt={0} height={'100%'}>
                    <HeaderComponent navigation={navigation} title={'Transfert Data'} action={'Retour'} />
                    {/* title */}
                    {/* List Docs */}




                    {ClientRegisterLocal != null && (
                        ClientRegisterLocal.map((data, id) => (
                            <View
                                style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                            // onPress={() => {
                            //     // navigation.navigate('')
                            // }}
                            >
                                <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                                    <View style={styles.round}>
                                        <View style={styles.v1}>
                                            {/* <Text>d</Text> */}
                                        </View>
                                        <View style={styles.v2}>
                                            <Text style={styles.txt_white}>
                                                Nom : {data.nom} {data.prenom} - {data.numero}
                                            </Text>
                                        </View>
                                        <View style={styles.v3}>
                                            <AntDesign name="upload" size={22} color="black" />
                                        </View>
                                    </View>
                                </Stack>
                            </View>
                        ))
                    )}

                    {ClientCompanyLocal != null && (
                        ClientCompanyLocal.map((data, id) => (
                            <View
                                style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                            // onPress={() => {
                            //     // navigation.navigate('')
                            // }}
                            >
                                <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                                    <View style={styles.round}>
                                        <View style={styles.v1_1}>
                                            {/* <Text>d</Text> */}
                                        </View>
                                        <View style={styles.v2}>
                                            <Text style={styles.txt_white}>
                                                Rep Légal : {data.representant_legal} {data.categorie} - {data.numero}
                                            </Text>
                                        </View>
                                        <View style={styles.v3}>
                                            <AntDesign name="upload" size={22} color="black" />
                                        </View>
                                    </View>
                                </Stack>
                            </View>
                        ))
                    )}

                    {ClientRegisterLocalCount == 0 && ClientCompanyLocalCount == 0 && (
                        <View
                            style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        // onPress={() => {
                        //     // navigation.navigate('')
                        // }}
                        >
                            <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                                <View style={styles.round}>
                                    <View style={styles.v1}>
                                        {/* <Text>d</Text> */}
                                    </View>
                                    <View style={styles.v2}>
                                        <Text style={styles.txt_white}>
                                            Aucune données enregistrées
                                        </Text>
                                    </View>
                                    <View style={styles.v3}>
                                        <MaterialCommunityIcons name="null" size={22} color="black" />
                                        {/* <AntDesign name="checkcircleo" size={22} color="black" /> */}
                                    </View>
                                </View>
                            </Stack>
                        </View>
                    )}




                    <Box></Box>
                    <VStack space={2} ml={5} flexDirection={'row'} justifyContent={'space-around'} mr={5}>
                        {ClientRegisterLocalCount > 0 && (
                            <Button
                                // onPress={()=> {}}
                                onPress={() => {
                                    setLoader(true)
                                    TransfertDataClient()
                                }}
                                style={styles.btn}
                                _text={{ color: 'white', fontWeight: 'bold' }}
                                startIcon={<AntDesign name="upload" size={24} color="#fff" />}
                            >
                                Transferts clients
                            </Button>
                        )}
                        {ClientCompanyLocalCount > 0 && (
                            <Button
                                // onPress={()=> {}}
                                onPress={() => {
                                    setLoader(true)
                                    TransfertDataEntreprise()
                                }}
                                style={styles.btn2}
                                _text={{ color: 'white', fontWeight: 'bold' }}
                                startIcon={<AntDesign name="upload" size={24} color="#fff" />}
                            >
                                Transferts entreprises
                            </Button>
                        )}
                    </VStack>


                    <Box></Box>
                    <Box></Box>

                </Stack>
            </ScrollView>

        </NativeBaseProvider>
    )
}

export default withHOC(TransfertsComponent)
