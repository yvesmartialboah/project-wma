import React, { useState, useEffect, useRef } from 'react';
import { stylesInfoGeneralP } from './styles';
import withHOC from '../../_Shared/Lib/index'
import { InfoGeneralYup } from './yup';
import PhoneInput from 'react-native-phone-number-input';

const AddRechargeComponent = ({ navigation, route, lib }) => {
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
        DatePicker,
        Toast,
        AwesomeLoading,
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

    // Librairie Enfant
    const {
        StyleSheet,
        View,
        TouchableOpacity,
        StatusBar,
        ScrollView,
        Dimensions,
        ImageBackground,
        KeyboardAvoidingView,
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

    const textInput = useRef();
    const [codeNumber, setCodeNumber] = useState(null);

    const { height } = Dimensions.get('window');
    const dispatch = useDispatch();
    const data_INFO_Company = useSelector(getCompany);
    const dest = 'destinateur';
    const desta = 'destinataire';
    useEffect(() => {
        // console.log(route.params.action.status, 'find_number_user | new_inscription')
        // console.log(route.params.action.user_number, 'user_number')
        // console.log(route.params.action.user_id, 'user_id')
        // console.log(data_INFO_Company, 'data_INFO_Company')
        resetData()
    }, [route.params.reload.date])

    const [destinateur, setDestinateur] = useState(null);
    const [destinataire, setDestinataire] = useState(null)
    const [montant, setMontant] = useState(null)

    // Verif
    const [verifDestinateur, setVerifDestinateur] = useState(false)
    const [verifDestinataire, setVerifDestinataire] = useState(false)

    // Data Emetteur
    const [compteemetteur_id, setCompteEmetteur_id] = useState(null)
    const [numeroCompteEmetteur, setnumeroCompteEmetteur] = useState("0000")
    const [nameEmetteur, setNameEmetteur] = useState('XXXX')
    
    // Data Recepteur
    const [idCompteRecepteur, setIdCompteRecepteur] = useState(null)
    const [numeroCompteRecepteur, setnumeroCompteRecepteur] = useState("0000")
    const [nameRecepteur, setNameRecepteur] = useState('XXXX')




    const RechargePerson = () => {
        setLoader(true)
        const url = 'https://loving-bhaskara.161-97-120-236.plesk.page/kankumussa/api/kankumussa/transaction/rechargementfieuls'; // server Plesk Us
        fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            IDCOMPTE: idCompteRecepteur,
            compteemetteur_id: compteemetteur_id,
            MONTANTTRANSACTION: montant,
          })
        })
          .then((responses) => responses.json())
          .then((response) => {
            // console.log(typeof response, 'responsex')
            // console.log(response, 'response')
            // console.log(response.token, 'response token')
            // console.log(response.lol, 'response lol')
            if (response.code == 200 ) {
                
              Toast.show({
                type: 'success',
                text1: "Rechargement effectué avec success 🎉🎊.",
                // text2: '',
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true,
              })

              resetData()

              navigation.navigate('Dashboard', {
                reload: {
                  date: new Date()
                }
              })

            } 
 
            if(response.code == 201) {
              Toast.show({
                type: 'info',
                text1: "identifiant erroné.",
                text2: "Compte emetteur ou destinataire erroné.",
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true,
              })
    
            }
            featureLoad()

          })
          .catch((error) => {
            featureLoad()
            // alert(error)
            Toast.show({
              type: 'error',
              text1: "Erreur",
              text2: "Vérifier votre connexion internet.",
              position: 'bottom',
              visibilityTime: 4000,
              autoHide: true,
            })
            console.log(error, 'erreur');
          });

    }

    const resetData = () => {
        setDestinateur(null)
        setDestinataire(null)
        setMontant(null)
        setVerifDestinateur(false)
        setVerifDestinataire(false)
        // line
        setCompteEmetteur_id(null)
        setnumeroCompteEmetteur("0000")
        setNameEmetteur("XXXX")
        // 
        setIdCompteRecepteur(null)
        setnumeroCompteRecepteur("0000")
        setNameRecepteur("XXXX")
    }

    const [loader, setLoader] = useState(false);

    const featureLoad = () => {
      setLoader(false)
    }

    const verifDataRecharge = () => {
        if (montant == null) {
            Toast.show({
                type: 'info',
                text1: "Veuillez renseigner ce champs svp.",
                // text2: '',
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true,
              })
        } else {
            RechargePerson()
        }
    } 

    const verifData = () => {
        if (destinateur == null) {
            Toast.show({
                type: 'info',
                text1: "Veuillez renseigner ce champs svp.",
                // text2: '',
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true,
              })
        } else {
            SearchId(destinateur, dest)
        }
    } 

    const verifDataRecept = () => {
        if (destinataire == null) {
            Toast.show({
                type: 'info',
                text1: "Veuillez renseigner ce champs svp.",
                // text2: '',
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true,
              })
        } else {
            SearchId(destinataire, desta)
        }
    } 

    const SearchId = (param, cases) => {
        setLoader(true)
        const url = 'https://loving-bhaskara.161-97-120-236.plesk.page/kankumussa/api/kankumussa/gestion/comptes/find/' + param; // server Plesk Us
        fetch(url, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        //   body: JSON.stringify({
        //     email: emailAt,
        //     password: passwordAt
        //     // email: 'toto@yopmail.com',
        //     // password: '00000000'
        //   })
        })
          .then((responses) => responses.json())
          .then((response) => {
            // console.log(typeof response, 'responsex')
            // console.log(response, 'response')
            // console.log(response.token, 'response token')
            // console.log(response.data[0], 'response data')
            if (response.code == 200 && cases == dest ) {
                
              // Envoie de données au store
              Toast.show({
                type: 'success',
                text1: "Numéro client identifié 🎉🎊.",
                // text2: '',
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true,
              })
              setVerifDestinateur(true)
              setDestinateur(response.data[0])
              setCompteEmetteur_id(response.data[0].compte.IDCOMPTE)
              setnumeroCompteEmetteur(response.data[0].compte.numeroCompte)
              setNameEmetteur(response.data[0].DENOMINATIONPARTENAIRE + ' ' + response.data[0].VILLEPARTENAIRE)

    
            //   navigation.navigate('Dashboard', {
            //     // reload: {
            //     //   date: new Date()
            //     // }
            //   })

            } 
            if (response.code == 200 && cases == desta ) {
                
                // Envoie de données au store
                Toast.show({
                  type: 'success',
                  text1: "Numéro client identifié 🎉🎊.",
                  // text2: '',
                  position: 'bottom',
                  visibilityTime: 4000,
                  autoHide: true,
                })
                setVerifDestinataire(true)
                setDestinataire(response.data[0])
                setIdCompteRecepteur(response.data[0].compte.IDCOMPTE)
                setnumeroCompteRecepteur(response.data[0].compte.numeroCompte)
                setNameRecepteur(response.data[0].DENOMINATIONPARTENAIRE + ' ' + response.data[0].VILLEPARTENAIRE)
  
      
              //   navigation.navigate('Dashboard', {
              //     // reload: {
              //     //   date: new Date()
              //     // }
              //   })
  
              } 
            if(response.code == 400) {
              Toast.show({
                type: 'info',
                text1: "Numéro client non identifié",
                // text2: "",
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true,
              })
    
            }
            featureLoad()

          })
          .catch((error) => {
            featureLoad()
            // alert(error)
            Toast.show({
              type: 'error',
              text1: "Erreur",
              text2: "Vérifier votre connexion internet.",
              position: 'bottom',
              visibilityTime: 4000,
              autoHide: true,
            })
            console.log(error, 'erreur');
          });
      }




    return (
        // <KeyboardAvoidingView style={{ height }}>
        <ScrollView style={{ height }}>
            <NativeBaseProvider theme={themeFormLogin}>
            <AwesomeLoading indicatorId={5} size={50} isActive={loader} text="Chargement" />

                <Stack space={5} mt={0} height={'80%'}>
                    <HeaderComponent navigation={navigation} title={'Rechargement (CFA)'} action={'Retour'} />

                    {/* Destinateur */}

                    {/* Numero du destinateur */}
                    {verifDestinateur == false && (
                        <FormControl isRequired isInvalid={false}>
                            <View style={stylesInfoGeneralP.parentinputNum}>
                                <View style={stylesInfoGeneralP.soninputNum}>
                                    <Text style={{ fontSize: 12, padding: 2, }}>
                                        Numero du destinateur
                                    </Text>
                                    <Input
                                        // style={stylesInfoGeneralP.input}
                                        type="text"
                                        placeholder='Numero du destinateur'
                                        keyboardType="numeric"
                                        onChangeText={(text) => setDestinateur(text)}
                                        // onBlur={handleBlur('representant_legal')}
                                        value={destinateur}
                                        InputRightElement={
                                            <Icon
                                                onPress={() => {
                                                    // 
                                                }}
                                                as={<AntDesign name="loading2" size={24} color="black" />}
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
                            <Box
                                p={2}
                                w="75%"
                                mx='auto'
                            // flex={1}
                            // bg="#fff"
                            >
                                <VStack space={2}>
                                    <Button
                                        // disabled={!isValid}
                                        onPress={() => {
                                            verifData()
                                            // navigation.navigate('')
                                        }}
                                        style={stylesInfoGeneralP.btn2}
                                        _text={{ color: 'white', fontWeight: 'bold' }}
                                        startIcon={<AntDesign name="reload1" size={24} color="#fff" />}
                                    >
                                        Charger le destinateur
                                    </Button>
                                </VStack>
                            </Box>
                        </FormControl>
                    )}

                    {/* End Destinateur */}

                    {/* Destinataire */}

                    {/* Numero du destinataire */}
                    {verifDestinataire == false && verifDestinateur == true && (
                        <FormControl isRequired isInvalid={false}>
                            <View style={stylesInfoGeneralP.parentinputNum}>
                                <View style={stylesInfoGeneralP.soninputNum}>
                                    <Text style={{ fontSize: 12, padding: 2, }}>
                                        Numero du destinataire
                                    </Text>
                                    <Input
                                        // style={stylesInfoGeneralP.input}
                                        type="text"
                                        placeholder='Numero du destinataire'
                                        keyboardType="numeric"
                                        onChangeText={(text) => setDestinataire(text)}
                                        value={destinataire}
                                        // onBlur={handleBlur('representant_legal')}
                                        InputRightElement={
                                            <Icon
                                                onPress={() => {
                                                    // 
                                                }}
                                                as={<AntDesign name="loading2" size={24} color="black" />}
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
                            <Box
                                p={2}
                                w="75%"
                                mx='auto'
                            // flex={1}
                            // bg="#fff"
                            >
                                <VStack space={2}>
                                    <Button
                                        // disabled={!isValid}
                                        onPress={() => {
                                            verifDataRecept()
                                            // navigation.navigate('')
                                        }}
                                        style={stylesInfoGeneralP.btn23}
                                        _text={{ color: 'white', fontWeight: 'bold' }}
                                        startIcon={<AntDesign name="reload1" size={24} color="#fff" />}
                                    // startIcon={<AntDesign name="login" size={24} color="#fff" />}
                                    >
                                        Charger le destinataire
                                    </Button>
                                </VStack>
                            </Box>
                        </FormControl>
                    )}

                    {/* End Destinataire */}


                    {/* Rechargement */}

                    <View style={stylesInfoGeneralP.Vtitle}>
                        <View style={stylesInfoGeneralP.V3title}>
                            <Text
                                style={stylesInfoGeneralP.title3}
                            >
                                Destinateur : {nameEmetteur}
                            </Text>
                            <Text
                                style={stylesInfoGeneralP.title3}
                            >
                                Destinataire : {nameRecepteur}
                            </Text>
                            <Text
                                style={stylesInfoGeneralP.title3}
                            >
                                Montant : {montant} CFA
                            </Text>
                        </View>
                    </View>

                    {/* Montant du rechargement */}
                    {verifDestinateur == true && verifDestinataire == true && (
                        <FormControl isRequired isInvalid={false}>
                            <View style={stylesInfoGeneralP.parentinputNum}>
                                <View style={stylesInfoGeneralP.soninputNum}>
                                    <Text style={{ fontSize: 12, padding: 2, }}>
                                        Montant du rechargement
                                    </Text>
                                    <Input
                                        // style={stylesInfoGeneralP.input}
                                        type="text"
                                        placeholder='Montant du rechargement'
                                        keyboardType="numeric"
                                        onChangeText={(text) => setMontant(text)}
                                        value={montant}
                                        // onBlur={handleBlur('representant_legal')}
                                        InputRightElement={
                                            <Icon
                                                onPress={() => {
                                                    // 
                                                }}
                                                as={<AntDesign name="loading2" size={24} color="black" />}
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
                            <Box
                                p={2}
                                w="75%"
                                mx='auto'
                            // flex={1}
                            // bg="#fff"
                            >
                                <VStack space={2}>
                                    <Button
                                        // disabled={!isValid}
                                        onPress={() => {
                                            verifDataRecharge()
                                            // navigation.navigate('')
                                        }}
                                        style={stylesInfoGeneralP.btn}
                                        _text={{ color: 'white', fontWeight: 'bold' }}
                                        startIcon={<AntDesign name="upload" size={24} color="#fff" />}
                                    // startIcon={<AntDesign name="login" size={24} color="#fff" />}
                                    >
                                        Recharger
                                    </Button>
                                </VStack>
                            </Box>
                        </FormControl>
                    )}

                    <Box
                        mt={5}
                        p={1}
                        w="40%"
                        mx='auto'
                    // flex={1}
                    // bg="#fff"
                    >
                        <VStack space={2}>
                            <Button
                                // disabled={!isValid}
                                onPress={() => {
                                    resetData()
                                }}
                                style={stylesInfoGeneralP.btn5}
                                _text={{ color: 'white', fontWeight: 'bold' }}
                                startIcon={<MaterialCommunityIcons name="delete-empty-outline" size={24} color="#fff" />}
                            // startIcon={<AntDesign name="login" size={24} color="#fff" />}
                            >
                                Réïnitialiser
                            </Button>
                        </VStack>
                    </Box>

                    {/* Fin Montant du rechargement */}


                    <Box></Box>
                    <Box></Box>

                </Stack>

            </NativeBaseProvider>
        </ScrollView>
        // </KeyboardAvoidingView>
    )
}

export default withHOC(AddRechargeComponent);
