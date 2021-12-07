import React, { useState, useEffect } from "react"
import { styles } from './styles';
import withHOC from '../../../../_Shared/Lib/index'
import { CreateEntityParticular } from '../../../../api/CreateEntityParticular/index'

const RecapInfoParticularComponent = ({ navigation, lib, route }) => {
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
        AwesomeLoading,

        Api_Base,
        
    } = lib

    const {
        useSelector,
        useDispatch
    } = Redux

    const {
        updateInfoParticular,
        updateCleanP
    } = ReduxAction

    const {
        getParticular,
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
    const dispatch = useDispatch();
    const data_Info_Particular = useSelector(getParticular);
    const data_user = useSelector(getuser);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        // console.log(data_Info_Particular, 'data_Info_Particular')
        // console.log(data_user[0].token, 'data_user')
    }, []);

    const featureLoad = () => {
        setLoader(false)
    }

    const saveData = () => {
        const url = 'https://kankoumoussa.org/kankumussa/api/enregisterParticulier?token=' + data_user[0].token; //server Plesk Us
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // --- InfoGeneral ---
                numero: data_Info_Particular[0].numero_tel, //-Vu
                nom: data_Info_Particular[0].nom, //-Vu
                prenoms: data_Info_Particular[0].prenom, //-Vu
                civilite: data_Info_Particular[0].civilite, //-Vu
                sexe: data_Info_Particular[0].sex, //-Vu
                situation_matrimoniale: data_Info_Particular[0].situation_matrimoniale, //-Vu
                date_naissance: data_Info_Particular[0].date_naissance,  //-Vu
                lieu_naissance: data_Info_Particular[0].lieu_de_naissance, //-Vu
                nationalite: data_Info_Particular[0].nationalite, //-Vu
                profession: data_Info_Particular[0].profession, //-Vu
                // --- InfoGeneral ---

                // --- SitGeoContact ---
                region: data_Info_Particular[0].region,  //-Vu
                cercle: data_Info_Particular[0].cercle,  //-Vu
                commune: data_Info_Particular[0].commune,  //-Vu
                quartier: data_Info_Particular[0].quartier,  //-Vu
                adresse: data_Info_Particular[0].addresse, //-Vu
                // autre_contact: null, //-Vu
                other_numero: data_Info_Particular[0].other_numero, //-Vu
                autorite_delivrance: data_Info_Particular[0].autorite_delivrance,  //-Vu
                other_autorite: data_Info_Particular[0].other_autorite,  //-Vu
                // --- SitGeoContact ---

                categorie: data_Info_Particular[0].categorie,
                raison_social: data_Info_Particular[0].raison_sociale,
                secteur_activite: data_Info_Particular[0].secteur_activite, //-Vu
                representant_legal: data_Info_Particular[0].representant_legal,
                contact_representant_legal: data_Info_Particular[0].contact_rep_legal,
                email: data_Info_Particular[0].email, //-Vu
                fax: data_Info_Particular[0].fax, //-Vu

                // --- PieceContrat ---
                type_piece: data_Info_Particular[0].type_piece, //-Vu
                numero_piece: data_Info_Particular[0].numero_piece, //-Vu
                date_delivrance: data_Info_Particular[0].date_delivrance, //-Vu
                date_expiration: data_Info_Particular[0].date_expiration, //-Vu
                img_piece: data_Info_Particular[0].img_piece,  //-Vu
                img_contrat: data_Info_Particular[0].img_contrat,  //-Vu
                image_contrat_signe: data_Info_Particular[0].signature_numerique,  //-Vu
                image_signature_numerique: data_Info_Particular[0].signature_numerique  //-Vu
                // --- SitGeoContact ---
            })
        })
            .then((responses) => responses.json())
            .then((response) => {
                featureLoad()
                console.log( response, 'response')
                console.log(typeof response, 'responsex')
                console.log(response, 'response')
                // if (response.status == 200) {
                if (response.code == 200) {
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
                } else {
                console.log(response, 'response')

                    Toast.show({
                        type: 'error',
                        text1: "Erreur",
                        text2: "Veuillez réessayer svp.",
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
            });
    }
    // const saveData = () => {
    //     setLoader(true)
    //     CreateEntityParticular(featureLoad, navigation, Toast)
    // }

    return (

        <NativeBaseProvider>
            <AwesomeLoading indicatorId={5} size={50} isActive={loader} text="Chargement..." />
            <ScrollView>

                <Stack space={5} mt={0} height={'100%'}>
                    <HeaderComponent navigation={navigation} title={'Recapitulatif Enroll'} action={'Retour'} />
                    {/* title */}
                    {/* List Docs */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => {
                            // navigation.navigate('')
                        }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        Nom : {data_Info_Particular[0].nom}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        Prénom : {data_Info_Particular[0].prenom}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        Contact : {data_Info_Particular[0].numero_tel}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round2}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        Situation matrimoniale : {data_Info_Particular[0].situation_matrimoniale}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        Date de naissance : {data_Info_Particular[0].date_naissance}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        Lieu de naissance : {data_Info_Particular[0].lieu_de_naissance}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        Nationalite : {data_Info_Particular[0].nationalite}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        Profession : {data_Info_Particular[0].profession}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        Region :  {data_Info_Particular[0].region}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        cercle :  {data_Info_Particular[0].cercle}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        commune :  {data_Info_Particular[0].commune}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>

                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        quartier :  {data_Info_Particular[0].quartier}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>


                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        addresse :  {data_Info_Particular[0].addresse}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>


                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        commune :  {data_Info_Particular[0].commune}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>


                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        Autre contact :  {data_Info_Particular[0].other_numero}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>


                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        Type de piece :  {data_Info_Particular[0].type_piece}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>


                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        Numero de piece :  {data_Info_Particular[0].numero_piece}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>


                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        Date de delivrance :  {data_Info_Particular[0].date_delivrance}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>


                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        Date d'expiration :  {data_Info_Particular[0].date_expiration}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>


                    {/*  */}

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                    {/* <Text>d</Text> */}
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                        commune :  {data_Info_Particular[0].commune}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                    Autorité de délivrance :  {data_Info_Particular[0].autorite_delivrance}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
                                </View>
                                <View style={styles.v2}>
                                    <Text style={styles.txt_white}>
                                    Autres Autorité :  {data_Info_Particular[0].other_autorite}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>

                    {/* Apeçu Image Pièce */}
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                        <View style={styles.imgV2}>
                            <Text style={{ alignText: 'center', fontWeight: 'bold', fontSize: 14, }}>
                                Image de la pièce
                            </Text>
                            <View style={{ marign: 0, top: 0 }}>
                            </View>
                            <Image source={{ uri: route.params.img.piece }} style={styles.img_frame} />
                        </View>
                    </View>

                    {/* Apeçu Image Contrat - Autre Image de la pièce */}
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                        <View style={styles.imgV2}>
                            <Text style={{ alignText: 'center', fontWeight: 'bold', fontSize: 14, top: 0 }}>
                                Autre Image de la pièce
                            </Text>
                            <View style={{ marign: 0, top: 0 }}>
                                <Image source={{ uri: route.params.img.contrat }} style={styles.img_frame} />
                            </View>

                        </View>
                    </View>

                    <Box></Box>
                    <VStack space={2} ml={5} mr={5}>
                        <Button
                            // onPress={()=> {}}
                            onPress={() => {
                                setLoader(true)
                                saveData()
                            }}
                            style={styles.btn}
                            _text={{ color: 'white', fontWeight: 'bold' }}
                            startIcon={<AntDesign name="login" size={24} color="#fff" />}
                        >
                            Enregistrer
                        </Button>
                    </VStack>
                    <Box></Box>
                    <Box></Box>



                </Stack>
            </ScrollView>

        </NativeBaseProvider>
    )
}

export default withHOC(RecapInfoParticularComponent)
