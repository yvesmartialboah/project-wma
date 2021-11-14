import React, { useState, useEffect, useRef } from 'react';
import { stylesSignature } from './styles';
// ComponentShare
import withHOC from '../../../../_Shared/Lib/index';

const CguComponent = ({ navigation, lib, route }) => {
    // const image = require('../../assets/bgn.png');
    // Librairie Parent
    const {
        nativebase,
        reactNative,
        MaterialIcons,
        MaterialCommunityIcons,
        FontAwesome,
        AntDesign,
        SplashScreen,
        Animatable,
        media,
        colorApp,
        HeaderComponent,
        SignatureCapture,
        Redux,
        ReduxAction,
        ReduxSelectors,
        Toast
    } = lib

    const {
        useSelector,
        useDispatch
    } = Redux

    const {
        updateInfoCompany,
    } = ReduxAction

    const {
        getCompany,
    } = ReduxSelectors

    const {
        StyleSheet,
        View,
        TouchableOpacity,
        StatusBar,
        ScrollView,
        Dimensions,
        ImageBackground
    } = reactNative

    const {
        NativeBaseProvider,
        Image,
        Box,
        Text,
        Heading,
        VStack,
        FormControl,
        Input,
        Button,
        Icon,
        IconButton,
        HStack,
        Stack,
        Center,
    } = nativebase

    const {
        backgroungImage,
        logo
    } = media

    const {
        themeColor,
        themeFormLogin,
        statusBarColor
    } = colorApp

    const hideSplash = () => {
        SplashScreen.hide();
    }
    useEffect(() => {
        hideSplash();
        console.log(route.params.img, 'route.params.img')
    })
    const dispatch = useDispatch();
    const data_INFO_Company = useSelector(getCompany);

    // ----------
    const signatureView = useRef(null);
    const [ImageSignature, setImageSignature] = useState(null);
    const [ImageSignatureSimple, setImageSignatureSimple] = useState(null);
    const onSave = (result) => {
        // console.log(result, 'base64')
        // console.log(result.encoded, 'base64 .encoded')
        setImageSignature(`data:image/png;base64,${result.encoded}`);
        setImageSignatureSimple(result.encoded);
    }
    const onSaveImage = () => {
        // L'appel de cette fonction déclenche le methode OnSave
        signatureView.current.saveImage()
    }

    const onReset = () => {
        if (ImageSignature != null) {
            setImageSignature(null)
            setImageSignatureSimple(null)
        } else {
            signatureView.current.resetImage()
        }
        // console.log(signatureView.current, 'signatureView');
    }

    const nextPage = () => {
        if (
            dispatch(
                updateInfoCompany(1, {
                    // Info General
                    numero_tel: data_INFO_Company[0].numero_tel,
                    categorie: data_INFO_Company[0].categorie,
                    denomination: data_INFO_Company[0].denomination,
                    raison_sociale: data_INFO_Company[0].raison_sociale,
                    secteur_activite: data_INFO_Company[0].secteur_activite,
                    representant_legal: data_INFO_Company[0].representant_legal,
                    contact_rep_legal: data_INFO_Company[0].contact_rep_legal, // -
                    email: data_INFO_Company[0].email,
                    fax: data_INFO_Company[0].fax,
                    // Info General

                    // Situation géographique
                    region: data_INFO_Company[0].region,
                    cercle: data_INFO_Company[0].cercle,
                    commune: data_INFO_Company[0].commune,
                    quartier: data_INFO_Company[0].quartier,
                    addresse: data_INFO_Company[0].addresse,
                    other_numero: data_INFO_Company[0].other_numero,
                    autorite_delivrance: data_INFO_Company[0].autorite_delivrance,
                    other_autorite: data_INFO_Company[0].other_autorite,
                    // Situation géographique

                    // --- PieceContrat ---
                    type_piece: data_INFO_Company[0].type_piece,
                    numero_piece: data_INFO_Company[0].numero_piece,
                    date_delivrance: data_INFO_Company[0].date_delivrance,
                    date_expiration: data_INFO_Company[0].date_expiration,
                    img_piece: data_INFO_Company[0].img_piece,
                    img_contrat: data_INFO_Company[0].img_contrat,
                    // --- SitGeoContact ---

                    // --- Signature Numérique CGU ---
                    signature_numerique: ImageSignatureSimple
                    // --- Signature Numérique CGU ---


                })
            ) && ImageSignatureSimple != null
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
            navigation.navigate('RecapInfoCompany', {
                img: {
                    piece: route.params.img.piece,
                    contrat: route.params.img.contrat,
                    img_signature: ImageSignature
                }
            })
        }
    }

    const { height } = Dimensions.get('window');
    return (
        <ScrollView style={{ height }}>
            <ImageBackground source={backgroungImage} style={{ height }}>
                <NativeBaseProvider>
                    <Stack space={5} mt={0} height={'80%'}>
                        <HeaderComponent navigation={navigation} title={'Cgu Signature'} action={'Retour'} />


                        {/* --- pub --- */}
                        <View style={stylesSignature.parentPub}>
                            <Heading size="lg" color='#35424a' textAlign='center'>
                                Signature Numérique
                            </Heading>
                        </View>
                        {/* --- pub --- */}

                        {/* Première Ligne */}
                        {ImageSignature == null && (
                            <View style={stylesSignature.signature}>
                                <SignatureCapture
                                    style={{ flex: 1, borderWidth: 1, borderRadius: 10, }}
                                    ref={signatureView}
                                    // onSaveEvent={_onSaveEvent}
                                    // onDragEvent={_onDragEvent}
                                    onSaveEvent={onSave}
                                    saveImageFileInExtStorage={true}
                                    showNativeButtons={false}
                                    showTitleLabel={false}
                                    backgroundColor={themeColor}
                                    borderColor={themeColor}
                                    strokeColor="#ffffff"
                                    minStrokeWidth={4}
                                    maxStrokeWidth={4}
                                    viewMode={"portrait"} />
                            </View>
                        )}

                        {ImageSignature != null && (
                            <View style={stylesSignature.signature}>
                                <Image style={stylesSignature.previewImage} source={{ uri: ImageSignature }} />
                                <Text style={stylesSignature.textSign} >Signature effectuée avec succès</Text>
                            </View>

                        )}


                        <View style={stylesSignature.btnsave}>

                            <View>
                                <Button
                                    // flex={1}
                                    bgColor={themeColor}
                                    onPress={(param) => {
                                        onReset(param)
                                    }}
                                    startIcon={<FontAwesome name="trash" size={24} color="#fff" />}
                                >
                                    Effacer
                                </Button>
                            </View>
                            {ImageSignature == null && (
                                <View>
                                    <Button
                                        // flex={1}
                                        bgColor={'#00b894'}
                                        onPress={() => {
                                            onSaveImage()
                                        }}
                                        startIcon={<MaterialIcons name="save" size={24} color="#fff" />}
                                    >
                                        Signer
                                    </Button>
                                </View>
                            )}


                        </View>

                        {/* Première Ligne */}

                    </Stack>


                    {/* Btn */}

                    <Stack space={0} justifyContent={'center'} flexDirection={'row'} alignItems={'flex-start'} mt={0} height={'20%'}>
                        <Button
                            // flex={1}
                            bgColor={themeColor}
                            onPress={() => {
                                // navigation.navigate('') 
                                nextPage()
                            }}
                            startIcon={<MaterialIcons name="save" size={24} color="#fff" />}
                        >
                            Recapitulatif
                        </Button>
                    </Stack>
                </NativeBaseProvider>
            </ImageBackground>
        </ScrollView>
    )
}

export default withHOC(CguComponent)