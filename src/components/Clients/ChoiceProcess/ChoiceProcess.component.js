import React, { useState, useEffect, useRef } from 'react';
import { stylesChoice } from './styles';
import withHOC from '../../../_Shared/Lib/index'
import PhoneInput from 'react-native-phone-number-input';

const ChoiceProcessComponent = ({ navigation, lib, route }) => {
    const {
        nativebase,
        reactNative,
        MaterialIcons,
        MaterialCommunityIcons,
        AntDesign,
        Ionicons,
        SplashScreen,
        Animatable,
        media,
        colorApp,
        HeaderComponent,
        Toast,
        useIsConnected,
        NetworkConsumer,
        AwesomeLoading,
        Redux,
        ReduxAction,
        ReduxSelectors,

        Api_Base,
        searchNumero,
    } = lib

    const {
        useSelector,
        useDispatch
    } = Redux

    const {
        updateCleanCompany,
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
    } = reactNative

    const {
        backgroungImage,
        logo
    } = media

    const {
        themeColor,
        themeChoiceProcess,
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
        Radio
    } = nativebase

    const { height } = Dimensions.get('window');
    const [radio, setRadio] = useState('Entreprise');
    const [numero_search, setNumero_search] = useState(null);
    const data_user = useSelector(getuser);
    const [loader, setLoader] = useState(false);
    const [phonenumber_search, setPhonenumber_search] = useState(null);
    const [formattedValue, setFormattedValue] = useState(null);
    const phoneInputRef = useRef();
    const [codeNumber, setCodeNumberEntr] = useState(null);

    const featureLoad = () => {
        setLoader(false)
    }

    // Message
    const alert = () => {
        Toast.show({
            type: 'info',
            text1: 'Requis !!!',
            text2: 'Veuillez renseigner le numero svp.',
            position: 'top',
            visibilityTime: 4000,
            autoHide: true,
        })
    }
    // Redirection Offline
    const newInscriptionOffline = () => {
        if (radio == 'Entreprise') {
            navigation.navigate('InfoGeneralCompanyOff', {
                action: {
                    status: 'new_inscription',
                    type_form: radio,
                    date: new Date()
                }
            })
        } else {
            navigation.navigate('InfoGeneralParticularOffline', {
                action: {
                    status: 'new_inscription',
                    type_form: radio,
                    date: new Date()
                }
            })
        }
    }
    // Redirection 
    const newInscription = () => {
        if (radio == 'Entreprise') {
            navigation.navigate('InfoGeneral', {
                action: {
                    status: 'new_inscription',
                    type_form: radio,
                    // date: new Date()
                }
            })
        } else {
            navigation.navigate('InfoGeneralParticular', {
                action: {
                    status: 'new_inscription',
                    type_form: radio,
                    date: new Date()
                }
            })
        }
    }
    const newResearch = () => {
        if (numero_search == null || numero_search == '') {
            alert()
        } else {
            setLoader(true)
            const url = Api_Base + searchNumero + codeNumber + numero_search + '?token=' + data_user[0].token; //server Plesk Us
            console.log(url, 'url')
            fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({

                // })
            })
                .then((responses) => responses.json())
                .then((response) => {
                    featureLoad()
                    // console.log(typeof response, 'responsex')
                    //console.log(response, 'response.data.numero')
                    console.log(response, 'response')
                    // if (response.status == 200) {
                    // if (response.data && response.data[0].numero == codeNumber + numero_search) {
                    if (response.data.length > 0) {
                        Toast.show({
                            type: 'info',
                            text1: "Saisie Imposible.",
                            text2: 'Le numéro existe déjà !!!',
                            position: 'top',
                            visibilityTime: 4000,
                            autoHide: true,
                        })

                    }

                    // if(response.code == 400) {
                    //     Toast.show({
                    //         type: 'info',
                    //         text1: "Info",
                    //         text2: "Le numéro n'a pas été trouvé.",
                    //         position: 'top',
                    //         visibilityTime: 4000,
                    //         autoHide: true,
                    //     })
                    // }
                    if (response.data.length == 0) {
                        Toast.show({
                            type: 'success',
                            text1: "Félicitation 🎉🎊",
                            text2: "Interview possible.",
                            position: 'top',
                            visibilityTime: 4000,
                            autoHide: true,
                        })
                        // ------------------------
                        if (radio == 'Entreprise') {
                            navigation.navigate('InfoGeneral', {
                                action: {
                                    status: 'find_number_user',
                                    // user_number: response.data.numero,
                                    user_number: codeNumber + numero_search,
                                    // user_id: 1,
                                    type_form: radio,
                                    // date: new Date()
                                }
                            })
                        } else {
                            navigation.navigate('InfoGeneralParticular', {
                                action: {
                                    status: 'find_number_user',
                                    // user_number: response.data.numero,
                                    user_number: codeNumber + numero_search,
                                    user_id: 1,
                                    type_form: radio,
                                    // date: new Date()
                                }
                            })
                        }
                        // --------------------
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

    }

    const statusConnexion = () => {
        Toast.show({
            type: isConnected == true ? 'success' : 'info',
            text1: isConnected == true ? 'Connexion rétablie !!!' : 'Connexion Perdue !!!',
            text2: isConnected == true ? 'Travail hors connexion désactivé !!!' : 'Travail hors connexion activé !!!',
            position: 'top',
            visibilityTime: 4000,
            autoHide: true,
        })
    }

    const isConnected = useIsConnected();
    useEffect(() => {
        statusConnexion()
        setNumero_search(null)
        // console.log(isConnected, 'isConnected')
    }, [isConnected, route.params.reload.date])
    return (
        <NativeBaseProvider theme={themeChoiceProcess}>
            <AwesomeLoading indicatorId={5} size={50} isActive={loader} text="Chargement..." />
            <ScrollView style={{ height }}>
                <Stack space={5} mt={0} height={'80%'}>
                    <HeaderComponent navigation={navigation} title={'Enrollment'} action={'Retour'} />

                    {/* Button Cas Offline */}
                    <NetworkConsumer>
                        {({ isConnected }) =>
                            isConnected ? (
                                <View>
                                </View>
                            ) : (
                                <View style={stylesChoice.parentNewIns}>
                                    <View>
                                        {/* <Text>Enrollment</Text> */}
                                    </View>
                                    <View>
                                        <Button style={{ backgroundColor: 'purple' }}
                                            // colorScheme="blue" 
                                            isLoading={false}
                                            isLoadingText="Submitting"
                                            endIcon={<Icon as={Ionicons} name="arrow-forward" size={5} />}
                                            onPress={() => {
                                                newInscriptionOffline()
                                            }}
                                        >
                                            Nouvelle Inscription (Hors ligne)
                                        </Button>
                                    </View>
                                </View>
                            )
                        }
                    </NetworkConsumer>


                    {/* Input */}
                    <View style={stylesChoice.parentinputNum}>
                        <View style={stylesChoice.soninputNum}>
                            {/* <Input
                                // style={stylesChoice.input}
                                type="number"
                                placeholder='Numéro'
                                keyboardType="numeric"
                                onChangeText={(param) => setNumero_search(param)}
                                value={numero_search}
                                // onChangeText={handleChange('numero_search')}
                                // onBlur={handleBlur('numero_search')}
                                InputRightElement={
                                    <Icon
                                        onPress={() => {
                                            // 
                                        }}
                                        as={<MaterialIcons name={'call'} />}
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
                            /> */}

                            {/* -------------- */}
                            {/* -------------- */}

                            <PhoneInput
                                withShadow={true}
                                containerStyle={stylesChoice.phonestyle}
                                ref={phoneInputRef}
                                placeholder={'Numéro'}
                                defaultValue={phonenumber_search}
                                defaultCode="ML"
                                onChangeText={(text) => {
                                    setPhonenumber_search(text);
                                    setFormattedValue(text);
                                   setNumero_search(text)
                                }}
                                onChangeFormattedText={(text)=>{
                                    // console.log(text, 'code')
                                    // console.log(textInput.current.state.code, 'current')
                                    setCodeNumberEntr(phoneInputRef.current.state.code)
                                }}
                            // withDarkTheme
                            withShadow
                            // autoFocus
                            />
                        </View>
                    </View>

                    {/* Radio */}
                    <View style={stylesChoice.radioChoiceSon}>
                        <View>
                            <Radio.Group
                                name="myRadioGroup"
                                value={radio}
                                onChange={(nextValue) => {
                                    setRadio(nextValue);
                                }}
                                style={stylesChoice.radioChoiceSon}
                            >
                                <Radio value="Entreprise" my={1}>
                                    Entreprise
                                </Radio>
                                <Radio value="Particulier" my={1}>
                                    Particulier
                                </Radio>
                            </Radio.Group>
                        </View>
                    </View>


                    {/* Action Form Offline*/}
                    <NetworkConsumer>
                        {({ isConnected }) =>
                            isConnected ? (
                                <View style={stylesChoice.actionForm}>
                                    <View>
                                        <Button style={{ backgroundColor: themeColor }}
                                            // colorScheme="blue" 
                                            isLoading={false}
                                            isLoadingText="Submitting"
                                            endIcon={<Icon as={Ionicons} name="md-search-outline" size={5} />}
                                            onPress={() => {
                                                newResearch()
                                            }}
                                        >
                                            Rechercher
                                        </Button>
                                    </View>
                                    {/* <View>
                                        <Button style={{ backgroundColor: themeColor }}
                                            // colorScheme="blue" 
                                            isLoading={false}
                                            isLoadingText="Submitting"
                                            endIcon={<Icon as={Ionicons} name="arrow-forward" size={5} />}
                                            onPress={() => {
                                                newInscription()
                                            }}
                                        >
                                            Nouvelle Inscription
                                        </Button>
                                    </View> */}
                                </View>
                            ) : (
                                <View>
                                </View>
                            )
                        }
                    </NetworkConsumer>


                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    )
};

export default withHOC(ChoiceProcessComponent);
