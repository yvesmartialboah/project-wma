import React, { useState, useEffect } from "react"
import { styles } from './styles';
import withHOC from '../../../../_Shared/Lib/index'

const RecapInfoParticularOfflineComponent = ({ navigation, lib }) => {
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
        insertNewTodoParticular,
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
        getParticular,
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
    const data_Info_Particular = useSelector(getParticular);
    const data_user = useSelector(getuser);

    useEffect(() => {
        // console.log(data_Info_Particular, 'data_Info_Particular')
    }, []);

    const saveData = () => {

        const newTodoParticular = {
            id: Math.floor(Date.now() / 1000),
            firstuser: data_user[0].id,

            // --- InfoGeneral ---
            civilite: data_Info_Particular[0].civilite, //-Vu
            sexe: data_Info_Particular[0].sex, //-Vu
            numero: data_Info_Particular[0].numero_tel, //-Vu
            nom: data_Info_Particular[0].nom, //-Vu
            prenoms: data_Info_Particular[0].prenom, //-Vu
            situation_matrimoniale: data_Info_Particular[0].situation_matrimoniale, //-Vu
            lieu_naissance: data_Info_Particular[0].lieu_de_naissance, //-Vu
            nationalite: data_Info_Particular[0].nationalite, //-Vu
            profession: data_Info_Particular[0].profession, //-Vu
            date_naissance: data_Info_Particular[0].date_naissance, //-Vu
            // --- InfoGeneral ---

            // --- SitGeoContact --- 
            region: data_Info_Particular[0].region, //-Vu
            cercle: data_Info_Particular[0].cercle, //-Vu
            commune: data_Info_Particular[0].commune, //-Vu
            quartier: data_Info_Particular[0].quartier, //-Vu
            adresse: data_Info_Particular[0].addresse, //-Vu
            
            // autre_contact: null, //-Vu
            other_numero: data_Info_Particular[0].other_numero, //-Vu
            autre_contact: data_Info_Particular[0].other_numero, //-Vu
            autorite_delivrance: data_Info_Particular[0].autorite_delivrance,
            other_autorite: data_Info_Particular[0].other_autorite,
            // --- SitGeoContact ---

            // --- PieceContrat ---
            type_piece: data_Info_Particular[0].type_piece, //-Vu
            numero_piece: data_Info_Particular[0].numero_piece, //-Vu
            date_delivrance: data_Info_Particular[0].date_delivrance, //-Vu
            date_expiration: data_Info_Particular[0].date_expiration, //-Vu

        };
        // console.log(newTodoParticular, 'newTodoParticular')
        insertNewTodoParticular(newTodoParticular)
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
                    <HeaderComponent navigation={navigation} title={'Recapitulatif Offline'} action={'Retour'} />
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
                            <View style={styles.round2}>
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


                    {/*  */}

                    {/* <TouchableOpacity
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        onPress={() => { }}
                    >
                        <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                            <View style={styles.round}>
                                <View style={styles.v1}>
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
                    </TouchableOpacity> */}

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

export default withHOC(RecapInfoParticularOfflineComponent)
