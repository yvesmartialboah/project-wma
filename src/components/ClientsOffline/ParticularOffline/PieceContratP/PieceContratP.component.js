import React, { useState, useEffect } from 'react';
import { stylesPieceContratP } from './styles';
import withHOC from '../../../../_Shared/Lib/index'
import { PieceContratPYup } from './yup';

const PieceContratParticularOfflineComponent = ({ navigation, route, lib }) => {
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
        launchCamera,
        Toast,
        Redux,
        ReduxAction,
        ReduxSelectors,
        DatePicker
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
        Image, NativeBaseProvider,
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
    const hideSplash = () => {
        SplashScreen.hide();
    }

    useEffect(() => {
        hideSplash();
        // console.log(data_Info_Particular, 'data_Info_Particular Piece contrat')

        // console.log(route.params.action.status, 'find_number_user | new_inscription')
        // console.log(route.params.action.user_number, 'user_number')
        // console.log(route.params.action.user_id, 'user_id')
        setDate_stable_Ex(null)
        setDate_stable_del(null)
    }, [route.params.reload.date])

    // Date
    const [date, setDate] = useState(new Date());
    const [date_stable_del, setDate_stable_del] = useState(new Date());
    const [date_stable_Ex, setDate_stable_Ex] = useState(new Date());
    const [dateExpiration, setdateExpiration] = useState(null);
    const [dateDelivrance, setdateDelivrance] = useState(null);

    const [show, setShow] = useState(false);
    const [showEx, setshowEx] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [numero_tel, setNumero_tel] = useState(null);
    const [image_piece_view, setImage_piece_view] = useState(null);
    const [image_contrat_view, setImage_contrat_view] = useState(null);

    const onChange_Expiration = (event, selectedValue) => {
        // moment().format('Y-M-D', event)
        setdateExpiration(event);
        setshowEx(false);
    };
    const onChange_delivrance = (event, selectedValue) => {
        // moment().format('Y-M-D', event)
        setdateDelivrance(event);
        setDate_stable_del(event);
        setShow(false);
    };

    const showDatepickerDel = () => {
        setShow(true)
    }

    const showDatepickerEx = () => {
        setshowEx(true)
    }
    // Date

    const nextPage = (param) => {
        if (
            dispatch(
                updateInfoParticular(1, {
                    // Info General
                    civilite: data_Info_Particular[0].civilite,
                    sex: data_Info_Particular[0].sex,
                    numero_tel: data_Info_Particular[0].numero_tel,
                    nom: data_Info_Particular[0].nom,
                    prenom: data_Info_Particular[0].prenom,
                    situation_matrimoniale: data_Info_Particular[0].situation_matrimoniale,
                    date_naissance: data_Info_Particular[0].date_naissance, // -
                    // date_naissance: moment().format('Y-M-D', data_Info_Particular[0].date_naissance),
                    lieu_de_naissance: data_Info_Particular[0].lieu_de_naissance,
                    nationalite: data_Info_Particular[0].nationalite,
                    profession: data_Info_Particular[0].profession,
                    // Info General

                    // Situation géographique
                    region: data_Info_Particular[0].region,
                    cercle: data_Info_Particular[0].cercle,
                    commune: data_Info_Particular[0].commune,
                    quartier: data_Info_Particular[0].quartier,
                    addresse: data_Info_Particular[0].addresse,
                    other_numero: data_Info_Particular[0].other_numero,
                    autorite_delivrance: data_Info_Particular[0].autorite_delivrance,
                    other_autorite: data_Info_Particular[0].other_autorite,
                    // Situation géographique

                    // --- PieceContrat ---
                    // img_piece: param.img_piece,
                    // img_contrat: param.img_contrat,
                    type_piece: param.type_piece,
                    numero_piece: param.numero_piece,
                    // date_delivrance: moment().format('Y-M-D', param.date_delivrance),
                    date_delivrance: param.date_delivrance,
                    // date_expiration: moment().format('Y-M-D', param.date_expiration),
                    date_expiration: param.date_expiration,
                    // --- SitGeoContact ---

                })
            )
        ) {
            Toast.show({
                type: 'info',
                text1: "Fin de l'interview",
                text2: 'Affichage du recapitulatif 🎉🎊',
                position: 'top',
                visibilityTime: 4000,
                autoHide: true,
            })
            // Retour à la page d'accueil
            navigation.navigate('RecapInfoParticularOffline')
        }
    }

    // Capture Image
    const options = {
        noData: false,
        includeBase64: true,
        mediaType: 'photo',
        title: 'Uploader une image',
        takePhotoButtonTitle: 'Depuis la caméra',
        chooseFromLibraryButtonTitle: 'Depuis la galerie',
        maxWidth: 500,
        maxHeight: 500, // à ne pas négliger
        storageOptions: {
            skipBackup: true,
            path: 'Wma',
        },
        // Choose Parcel from Envoy
    };

    const takeShooterPiece = (setFieldValue) => {
        launchCamera(options, (response) => {
            // console.log(response.assets[0].base64, 'image base64 img piece');
            // console.log(response.assets[0].uri, 'responseX assets uri');
            // console.log(response, 'response');
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                setImage_piece_view(response.assets[0].uri)
                setFieldValue('img_piece', response.assets[0].base64)
            }
        });
    }

    const takeShooterContrat = (setFieldValue) => {
        launchCamera(options, (response) => {
            // console.log(response.assets[0].base64, 'image base64');
            // console.log(response.assets[0].uri, 'responseX assets uri');
            // console.log(response, 'response');
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                setImage_contrat_view(response.assets[0].uri)
                setFieldValue('img_contrat', response.assets[0].base64)
            }
        });
    }
    // Capture Image

    return (
        <ScrollView style={{ height }}>
            <NativeBaseProvider theme={themeFormLogin}>
                <Formik
                    validationSchema={PieceContratPYup}
                    initialValues={{
                        type_piece: '',
                        numero_piece: '',
                        date_delivrance: '', 
                        date_expiration: '',
                        // img_piece: '', 
                        // img_contrat: ''
                    }}
                    onSubmit={(values, actions) => {
                        // console.log(values.img_piece, 'img_piece')
                        // console.log(values.img_contrat, 'img_contrat')
                        setDate_stable_Ex(null)
                        setDate_stable_del(null)
                        actions.resetForm();
                        nextPage(values)
                    }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        setFieldValue,
                        values,
                        errors,
                        isValid,
                        touched,
                    }) => (
                        <Stack space={5} mt={0} height={'80%'}>
                            <HeaderComponent navigation={navigation} title={'Enrollment (Particulier)'} action={'Retour'} />

                            <View style={stylesPieceContratP.Vtitle}>
                                <View style={stylesPieceContratP.V2title}>
                                    <Text
                                        style={stylesPieceContratP.title}
                                    >
                                        3 - Pièces et Contrat Hors-connexion
                                    </Text>
                                </View>
                            </View>

                            {/* Type de pièce */}
                            <FormControl isRequired isInvalid={(errors.type_piece && touched.type_piece)}>
                                <View style={stylesPieceContratP.parentinputNum}>
                                    <View style={stylesPieceContratP.soninputNum}>
                                        <Select
                                            selectedValue={values.type_piece}
                                            minWidth={200}
                                            accessibilityLabel="Type de pièce"
                                            placeholder="Type de pièce"
                                            onValueChange={(itemValue) => {
                                                // handleChange(itemValue)
                                                setFieldValue('type_piece', itemValue)
                                            }}
                                            _selectedItem={{
                                                bg: "cyan.600",
                                                endIcon: <CheckIcon size={4} />,
                                            }}
                                        >
                                            <Select.Item label="CARTE NINA" value={"CARTE NINA"} />
                                            <Select.Item label="CNI - MALI" value="CNI - MALI" />
                                            <Select.Item label="CNI - ETRANGER" value="CNI - ETRANGER" />
                                            <Select.Item label="PASSEPORT NATIONAL" value="PASSEPORT NATIONAL" />
                                            <Select.Item label="PASSEPORT ETRANGER" value="PASSEPORT ETRANGER" />
                                            <Select.Item label="CARTE CONSULAIRE" value="CARTE CONSULAIRE" />
                                            <Select.Item label="PERMIS DE CONDUIRE" value="PERMIS DE CONDUIRE" />
                                        </Select>
                                    </View>
                                </View>
                                <View style={stylesPieceContratP.alert}>
                                    {(errors.type_piece && touched.type_piece) &&
                                        <FormControl.ErrorMessage>
                                            {errors.type_piece}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>

                            </FormControl>

                            {/* Numero de pièce */}
                            <FormControl isRequired isInvalid={(errors.numero_piece && touched.numero_piece)}>
                                <View style={stylesPieceContratP.parentinputNum}>
                                    <View style={stylesPieceContratP.soninputNum}>
                                        <Input
                                            // style={stylesPieceContratP.input}
                                            type="text"
                                            placeholder='numéro de pièce'
                                            // keyboardType="numeric"
                                            onChangeText={handleChange('numero_piece')}
                                            onBlur={handleBlur('numero_piece')}
                                            value={values.numero_piece}
                                            InputRightElement={
                                                <Icon
                                                    onPress={() => {
                                                        // 
                                                    }}
                                                    as={<MaterialIcons name={'message'} />}
                                                    size="md"
                                                    m={2}
                                                    _hover={{
                                                        color: "#c3b27f",
                                                    }}
                                                    _light={{
                                                        color: "#abb5be",
                                                    }}
                                                    _dark={{
                                                        color: "gray.300",
                                                    }}
                                                />
                                            }
                                        />
                                    </View>
                                </View>
                                <View style={stylesPieceContratP.alert}>
                                    {(errors.numero_piece && touched.numero_piece) &&
                                        <FormControl.ErrorMessage>
                                            {errors.numero_piece}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>
                            </FormControl>





                            {/* Date de Délivrance */}
                            <View style={stylesPieceContratP.radioChoiceSonSex}>
                                <View>
                                    <Text>Date de Délivrance</Text>
                                </View>
                            </View>



                            {/* Date de Délivrance */}
                            <FormControl isRequired isInvalid={(errors.date_delivrance && touched.date_delivrance)}>
                                <View style={stylesPieceContratP.parentinputNum}>
                                    <View>
                                        <IconButton onPress={() => { showDatepickerDel() }}
                                            style={stylesPieceContratP.iconDate}
                                            icon={<Icon size="10" as={<MaterialIcons name="date-range" size={34} color="#fff" />}
                                                color={themeColor} />}
                                        />
                                    </View>
                                    <View style={stylesPieceContratP.dateinputNum}>

                                        {show ? (
                                            <DatePicker
                                            style={{ width: 200 }}
                                            date={date_stable_del}
                                            mode="date"
                                            placeholder="select date"
                                            format="YYYY-MM-DD"
                                            minDate="1990-01-01"
                                            maxDate="2021-12-31"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            customStyles={{
                                                dateIcon: {
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 4,
                                                    marginLeft: 0
                                                },
                                                dateInput: {
                                                    marginLeft: 36
                                                }
                                                // ... You can check the source to find the other keys.
                                            }}
                                            onDateChange={(param) => {
                                                console.log(param, 'param')
                                                setDate_stable_del(param)
                                                // setDate(param)
                                                // console.log(param.nativeEvent.timestamp, 'param')
                                                onChange_delivrance(param)
                                                setFieldValue('date_delivrance', param)
                                            }}
                                        />
                                            // <DateTimePicker
                                            //     testID="dateTimePickerX"
                                            //     value={date}
                                            //     mode={'date'}
                                            //     is24Hour={true}
                                            //     display="default"
                                            //     onChange={(param) => {
                                            //         console.log(param.nativeEvent.timestamp, 'param')
                                            //         onChange_delivrance(param.nativeEvent.timestamp)
                                            //         setFieldValue('date_delivrance', param.nativeEvent.timestamp)
                                            //     }}
                                            // />
                                        ) :
                                            <Text style={stylesPieceContratP.text_date}> {dateDelivrance == null ? '-----' : date_stable_del} </Text>
                                        }
                                    </View>
                                </View>
                                <View style={stylesPieceContratP.alert}>
                                    {(errors.date_delivrance && touched.date_delivrance) &&
                                        <FormControl.ErrorMessage>
                                            {errors.date_delivrance}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>
                            </FormControl>

                            {/* Date de d'expiration */}
                            <View style={stylesPieceContratP.radioChoiceSonSex}>
                                <View>
                                    <Text>Date d'expiration</Text>
                                </View>
                            </View>



                            {/* Date d'expiration */}
                            <FormControl isRequired isInvalid={(errors.date_expiration && touched.date_expiration)}>
                                <View style={stylesPieceContratP.parentinputNum}>
                                    <View>
                                        <IconButton onPress={() => { showDatepickerEx() }}
                                            style={stylesPieceContratP.iconDate}
                                            icon={<Icon size="10" as={<MaterialIcons name="date-range" size={34} color="#fff" />}
                                                color={themeColor} />}
                                        />
                                    </View>
                                    <View style={stylesPieceContratP.dateinputNum}>

                                        {showEx ? (
                                            <DatePicker
                                            style={{ width: 200 }}
                                            date={date_stable_Ex}
                                            mode="date"
                                            placeholder="select date"
                                            format="YYYY-MM-DD"
                                            minDate="1990-01-01"
                                            maxDate="2021-12-31"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            customStyles={{
                                                dateIcon: {
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 4,
                                                    marginLeft: 0
                                                },
                                                dateInput: {
                                                    marginLeft: 36
                                                }
                                                // ... You can check the source to find the other keys.
                                            }}
                                            onDateChange={(param) => {
                                                console.log(param, 'param')
                                                setDate_stable_Ex(param)
                                                // setDate(param)
                                                // console.log(param.nativeEvent.timestamp, 'param')
                                                onChange_Expiration(param)
                                                setFieldValue('date_expiration', param)
                                            }}
                                        />
                                            // <DateTimePicker
                                            //     testID="dateTimePicker"
                                            //     value={date}
                                            //     mode={'date'}
                                            //     is24Hour={true}
                                            //     display="default"
                                            //     onChange={(param) => {
                                            //         // console.log(param.nativeEvent.timestamp, 'param')
                                            //         onChange_Expiration(param.nativeEvent.timestamp)
                                            //         setFieldValue('date_expiration', param.nativeEvent.timestamp)
                                            //         // handleChange('date_de_naissance')
                                            //     }}
                                            // />
                                        ) :
                                            <Text style={stylesPieceContratP.text_date}> {dateExpiration == null ? '-----' : date_stable_Ex} </Text>
                                        }
                                    </View>
                                </View>
                                <View style={stylesPieceContratP.alert}>
                                    {(errors.date_expiration && touched.date_expiration) &&
                                        <FormControl.ErrorMessage>
                                            {errors.date_expiration}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>
                            </FormControl>

                            {/* Image de la pièce  */}
                            {/* <FormControl isRequired isInvalid={(errors.img_piece && touched.img_piece)}>
                                <View style={stylesPieceContratP.parentinputNum}>
                                    <View style={stylesPieceContratP.soninputNum}>
                                        <Button
                                            onPress={() => {
                                                takeShooterPiece(setFieldValue)
                                            }}
                                            style={stylesPieceContratP.btn}
                                            _text={{ color: 'white', fontWeight: 'bold' }}
                                            startIcon={<AntDesign name="camera" size={24} color="#fff" />}
                                        >
                                            Image de la pièce
                                        </Button>
                                    </View>
                                </View>
                                <View style={stylesPieceContratP.alert}>
                                    {(errors.img_piece && touched.img_piece) &&
                                        <FormControl.ErrorMessage>
                                            {errors.img_piece}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>
                            </FormControl> */}

                            {/* Apeçu Image Pièce */}
                            {/* <View style={stylesPieceContratP.imgV}>
                                <View style={stylesPieceContratP.imgV2}>
                                    {image_piece_view == null && (
                                        <AntDesign name="camera" size={24} color={themeColor} />
                                    )}
                                    {image_piece_view != null && (
                                        <Image source={{ uri: image_piece_view }} style={stylesPieceContratP.img_frame} />
                                    )}
                                </View>
                            </View> */}

                            {/* Image du contrat  */}
                            {/* <FormControl isRequired isInvalid={(errors.img_contrat && touched.img_contrat)}>
                                <View style={stylesPieceContratP.parentinputNum}>
                                    <View style={stylesPieceContratP.soninputNum}>
                                        <Button
                                            onPress={() => {
                                                takeShooterContrat(setFieldValue)
                                            }}
                                            style={stylesPieceContratP.btn}
                                            _text={{ color: 'white', fontWeight: 'bold' }}
                                            startIcon={<AntDesign name="camera" size={24} color="#fff" />}
                                        >
                                            Image du contrat
                                        </Button>
                                    </View>
                                </View>
                                <View style={stylesPieceContratP.alert}>
                                    {(errors.img_contrat && touched.img_contrat) &&
                                        <FormControl.ErrorMessage>
                                            {errors.img_contrat}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>
                            </FormControl> */}

                            {/* Apeçu Image Contrat*/}
                            {/* <View style={stylesPieceContratP.imgV}>
                                <View style={stylesPieceContratP.imgV2}>
                                    {image_contrat_view == null && (
                                        <AntDesign name="camera" size={24} color={themeColor} />
                                    )}
                                    {image_contrat_view != null && (
                                        <Image source={{ uri: image_contrat_view }} style={stylesPieceContratP.img_frame} />
                                    )}
                                </View>
                            </View> */}



                            <Box
                                p={2}
                                w="75%"
                                mx='auto'
                            // flex={1}
                            // bg="#fff"
                            >
                                <VStack space={2}>
                                    <Button
                                        onPress={handleSubmit}
                                        disabled={!isValid}
                                        // onPress={() => {

                                        //     // navigation.navigate('')
                                        // }}
                                        style={stylesPieceContratP.btn}
                                        _text={{ color: 'white', fontWeight: 'bold' }}
                                        startIcon={<AntDesign name="login" size={24} color="#fff" />}
                                    >
                                        Recapitulatif
                                    </Button>
                                </VStack>
                            </Box>


                            <Box></Box>
                            <Box></Box>

                        </Stack>
                    )}

                </Formik>
            </NativeBaseProvider>
        </ScrollView>
    )
}

export default withHOC(PieceContratParticularOfflineComponent);
