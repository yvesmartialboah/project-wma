import React, { useState, useEffect } from "react"
import { styles } from './styles';
import withHOC from '../../../../_Shared/Lib/index'

const RecapInfoCompanyComponent = ({ navigation, lib, route }) => {
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
        saveCompany
    } = lib

    const {
        useSelector,
        useDispatch
    } = Redux

    const {
        updateCleanCompany,
    } = ReduxAction

    const {
        getCompany,
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
    const data_INFO_Company = useSelector(getCompany);
    const data_user = useSelector(getuser);
    const [loader, setLoader] = useState(false);

    const featureLoad = () => {
        setLoader(false)
    }

    useEffect(() => {
        // console.log(data_INFO_Company, 'data_INFO_Company')
        // console.log(data_user[0].token, 'data_user')
    }, []);

    const saveData = () => {
        // const url = 'http://45.13.59.98/api_kankumussa/api/enregisterEntreprise?token=' + data_user[0].token; //server Plesk Us
        const url = Api_Base + saveCompany + data_user[0].token; //server Plesk Us
        console.log(url, 'url')
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // --- InfoGeneral ---
                numero: data_INFO_Company[0].numero_tel, //- VU
                // prenoms: data_INFO_Company[0].prenom,
                // civilite: data_INFO_Company[0].civilite,
                // sexe: data_INFO_Company[0].sex,
                // situation_matrimoniale: data_INFO_Company[0].situation_matrimoniale,
                // date_naissance: data_INFO_Company[0].date_naissance,
                lieu_naissance:  "xxxx",
                // lieu_naissance: data_INFO_Company[0].lieu_de_naissance,
                // nationalite: data_INFO_Company[0].nationalite,
                // profession: data_INFO_Company[0].profession,
                // --- InfoGeneral ---

                // --- SitGeoContact ---
                region: data_INFO_Company[0].region, //- VU
                cercle: data_INFO_Company[0].cercle, //- VU
                commune: data_INFO_Company[0].commune, //- VU
                quartier: data_INFO_Company[0].quartier, //- VU
                // addresse: data_INFO_Company[0].addresse,
                // other_numero: data_INFO_Company[0].other_numero,
                // region_id: data_INFO_Company[0].region,
                // cercle_id: data_INFO_Company[0].cercle,
                // commune_id: data_INFO_Company[0].commune,
                // quartier_id: data_INFO_Company[0].quartier,
                adresse: data_INFO_Company[0].addresse, //- VU
                other_numero: data_INFO_Company[0].other_numero, //- VU
                autre_contact: data_INFO_Company[0].other_numero, //- VU
                autorite_delivrance: data_INFO_Company[0].autorite_delivrance, //- VU
                other_autorite: data_INFO_Company[0].other_autorite, //- VU
                // --- SitGeoContact ---

                categorie: data_INFO_Company[0].categorie, //- VU
                denomination: data_INFO_Company[0].denomination, //- VU
                raison_social: data_INFO_Company[0].raison_sociale, //- VU
                secteur_activite: data_INFO_Company[0].secteur_activite, //- VU
                representant_legal: data_INFO_Company[0].representant_legal, //- VU
                contact_representant_legal: data_INFO_Company[0].contact_rep_legal, //- VU
                email: data_INFO_Company[0].email, //- VU
                fax: data_INFO_Company[0].fax, //- VU

                // --- PieceContrat ---
                type_piece: data_INFO_Company[0].type_piece, //- VU
                numero_piece: data_INFO_Company[0].numero_piece, //- VU
                date_delivrance: data_INFO_Company[0].date_delivrance, //- VU
                date_expiration: data_INFO_Company[0].date_expiration, //- VU
                type_client: null, //- VU
                // origine: null,
                image_client: null,
                image_contrat_signe: data_INFO_Company[0].signature_numerique,
                img_piece: data_INFO_Company[0].img_piece,
                img_contrat: data_INFO_Company[0].img_contrat,
                image_signature_numerique: data_INFO_Company[0].signature_numerique,
                // --- SitGeoContact ---
            })
        })
            .then((responses) => responses.json())
            .then((response) => {
                console.log(response, 'response')
                featureLoad()
                console.log(typeof response, 'responsex')
                // if (response.status == 200) {
                if (response.code == 200) {
                    Toast.show({
                        type: 'success',
                        text1: "F??licitation",
                        text2: 'Les donn??es ont bien ??t?? enregistr??es ????????',
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
                        text2: "Veuillez r??essayer svp.",
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
                                        Num??ro d'entreprise : {data_INFO_Company[0].numero_tel}
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
                                        Cat??gorie : {data_INFO_Company[0].categorie}
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
                                        D??nomination : {data_INFO_Company[0].denomination}
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
                                        Raison sociale : {data_INFO_Company[0].raison_sociale}
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
                                        Secteur d'activite : {data_INFO_Company[0].secteur_activite}
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
                                        R??presentant l??gal : {data_INFO_Company[0].representant_legal}
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
                                        Contact du repr??sentant : {data_INFO_Company[0].contact_rep_legal}
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
                                        Email : {data_INFO_Company[0].email}
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
                                        Fax : {data_INFO_Company[0].fax}
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
                                        Region :  {data_INFO_Company[0].region}
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
                                        cercle :  {data_INFO_Company[0].cercle}
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
                                        commune :  {data_INFO_Company[0].commune}
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
                                        quartier :  {data_INFO_Company[0].quartier}
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
                                        addresse :  {data_INFO_Company[0].addresse}
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
                                        commune :  {data_INFO_Company[0].commune}
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
                                        Autre contact :  {data_INFO_Company[0].other_numero}
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
                                        Type de piece :  {data_INFO_Company[0].type_piece}
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
                                        Numero de piece :  {data_INFO_Company[0].numero_piece}
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
                                        Date de delivrance :  {data_INFO_Company[0].date_delivrance}
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
                                        Date d'expiration :  {data_INFO_Company[0].date_expiration}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>


                    {/*  */}
                    {/* <Text>d</Text> */}

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
                                        Autorit?? de d??livrance :  {data_INFO_Company[0].autorite_delivrance}
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
                                        Autres Autorit?? :  {data_INFO_Company[0].other_autorite}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>

                    {/* Ape??u Image Pi??ce */}
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                        <View style={styles.imgV2}>
                            <Text style={{ alignText: 'center', fontWeight: 'bold', fontSize: 14, }}>
                                Image de la pi??ce
                            </Text>
                            <View style={{ marign: 0, top: 0 }}>
                            </View>
                            <Image source={{ uri: route.params.img.piece }} style={styles.img_frame} />
                        </View>
                    </View>

                    {/* Ape??u Image Contrat - Autre Image de la pi??ce */}
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                        <View style={styles.imgV2}>
                            <Text style={{ alignText: 'center', fontWeight: 'bold', fontSize: 14, top: 0 }}>
                                Autre Image de la pi??ce
                            </Text>
                            <View style={{ marign: 0, top: 0 }}>
                                <Image source={{ uri: route.params.img.contrat }} style={styles.img_frame} />
                            </View>

                        </View>
                    </View>

                    {/* Ape??u Image de la signature */}
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                        <View style={styles.imgV2}>
                            <Text style={{ alignText: 'center', fontWeight: 'bold', fontSize: 14, top: 0 }}>
                                Image de la signature
                            </Text>
                            <View style={{ marign: 0, top: 0 }}>
                                <Image source={{ uri: route.params.img.img_signature }} style={styles.img_frame} />
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
                                // console.log('object')
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

export default withHOC(RecapInfoCompanyComponent)
