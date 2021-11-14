import React, { useState, useEffect } from "react"
import { styles } from './styles';
import withHOC from '../../../../_Shared/Lib/index'

const RecapInfoCompanyOffComponent = ({ navigation, lib, route }) => {
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
    } = lib

    const {
        insertNewTodoCompany,
    } = RealmCrud

    const {
        useSelector,
        useDispatch
    } = Redux

    const {
        updateCleanCompany,
    } = ReduxAction

    const {
        getCompany,
        getuser,
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

    useEffect(() => {
        // console.log(data_INFO_Company, 'data_INFO_Company')
    }, []);

    // const saveData = () => {
    //     Toast.show({
    //         type: 'success',
    //         text1: "Félicitation",
    //         text2: 'Les données ont bien été enregistrées 🎉🎊',
    //         position: 'top',
    //         visibilityTime: 4000,
    //         autoHide: true,
    //     })
    //     // Retour à la page d'accueil
    //     navigation.navigate('Dashboard')
    // }

    const saveData = () => {

        const newTodoCompany = {
            id: Math.floor(Date.now() / 1000),
            firstuser: data_user[0].id,

            // Info General
            numero: data_INFO_Company[0].numero_tel, //- VU
            categorie: data_INFO_Company[0].categorie, //- VU
            denomination: data_INFO_Company[0].denomination, //- VU
            raison_social: data_INFO_Company[0].raison_sociale, //- VU
            secteur_activite: data_INFO_Company[0].secteur_activite, //- VU
            representant_legal: data_INFO_Company[0].representant_legal, //- VU
            contact_representant_legal: data_INFO_Company[0].contact_rep_legal, //- VU
            email: data_INFO_Company[0].email, //- VU
            fax: data_INFO_Company[0].fax, //- VU
            // Info General

            // Situation géographique
            // region: '',
            // cercle: '',
            region: data_INFO_Company[0].region, //- VU
            cercle: data_INFO_Company[0].cercle, //- VU
            commune: data_INFO_Company[0].commune, //- VU
            quartier: data_INFO_Company[0].quartier, //- VU
            adresse: data_INFO_Company[0].addresse, //- VU
            other_numero: data_INFO_Company[0].other_numero, //- VU
            autorite_delivrance: data_INFO_Company[0].autorite_delivrance, //- VU
            other_autorite: data_INFO_Company[0].other_autorite, //- VU
            // Situation géographique

            // --- PieceContrat ---
            type_piece: data_INFO_Company[0].type_piece, //- VU
            numero_piece: data_INFO_Company[0].numero_piece, //- VU
            date_delivrance: data_INFO_Company[0].date_delivrance, //- VU
            date_expiration: data_INFO_Company[0].date_expiration, //- VU
            // img_piece: 'neant',
            // img_contrat: 'neant',
            // img_piece: data_INFO_Company[0].img_piece,
            // img_contrat: data_INFO_Company[0].img_contrat
            // --- SitGeoContact ---
        };
        console.log(newTodoCompany, 'newTodoCompany')
        insertNewTodoCompany(newTodoCompany)
            .then((response) => {
                // console.log(response, 'response insert')
                Toast.show({
                    type: 'success',
                    text1: "Félicitation",
                    text2: 'Les données ont bien été enregistrées 🎉🎊',
                    position: 'top',
                    visibilityTime: 4000,
                    autoHide: true,
                })
                // Retour à la page d'accueil
                navigation.navigate('Dashboard')
            })
            .catch((error) => {
                console.log(`Insertion échouée ${error}`);
                Toast.show({
                    type: 'error',
                    text1: "Erreur interne",
                    text2: "Les données n'ont pas été enregistrées",
                    position: 'top',
                    visibilityTime: 4000,
                    autoHide: true,
                })
            });
    }

    return (

        <NativeBaseProvider>
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
                                        Numéro d'entreprise : {data_INFO_Company[0].numero_tel}
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
                                        Catégorie : {data_INFO_Company[0].categorie}
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
                                        Dénomination : {data_INFO_Company[0].denomination}
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
                                        Répresentant légal : {data_INFO_Company[0].representant_legal}
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
                                        Contact du représentant : {data_INFO_Company[0].contact_rep_legal}
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
                                    Autorité de délivrance :  {data_INFO_Company[0].autorite_delivrance}
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
                                    Autres Autorité :  {data_INFO_Company[0].other_autorite}
                                    </Text>
                                </View>
                                <View style={styles.v3}>
                                    <AntDesign name="checkcircleo" size={22} color="black" />
                                </View>
                            </View>
                        </Stack>
                    </TouchableOpacity>


                    <Box></Box>
                    <VStack space={2} ml={5} mr={5}>
                        <Button
                            // onPress={()=> {}}
                            onPress={() => {
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

export default withHOC(RecapInfoCompanyOffComponent)
