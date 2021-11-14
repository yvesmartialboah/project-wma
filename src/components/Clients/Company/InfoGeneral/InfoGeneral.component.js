import React, { useState, useEffect, useRef } from 'react';
import { stylesInfoGeneralP } from './styles';
import withHOC from '../../../../_Shared/Lib/index'
import { InfoGeneralYup } from './yup';
import PhoneInput from 'react-native-phone-number-input';

const InfoGeneralComponent = ({ navigation, route, lib }) => {
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
        ImageBackground
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
    useEffect(() => {
        // console.log(route.params.action.status, 'find_number_user | new_inscription')
        // console.log(route.params.action.user_number, 'user_number')
        // console.log(route.params.action.user_id, 'user_id')
        // console.log(data_INFO_Company, 'data_INFO_Company')
        setDate(null)
    }, [route.params.action.date])
 
    const [sex, setSex] = useState('Masculin');
    const [categorie, setCategorie] = useState(null)

    // Date
    const [date_stable, setDate_stable] = useState(new Date());
    const [date, setDate] = useState(null);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [numero_tel, setNumero_tel] = route.params.action.user_number != null ? useState(route.params.action.user_number) : useState(null);
    const [data, setData] = useState(false);

    const onChange = (event, selectedValue) => {
        // moment().format('Y-M-D', event)
        setDate(event);
        setShow(false);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    // Date

    const nextPage = (param) => {
        if(dispatch(
            updateInfoCompany(1,{
                numero_tel: param.numero_tel,
                categorie: param.categorie,
                denomination: param.denomination,
                raison_sociale: param.raison_sociale,
                secteur_activite: param.secteur_activite,
                representant_legal: param.representant_legal, // -
                contact_rep_legal: codeNumber + param.contact_rep_legal,
                email: param.email,
                fax: param.fax,
            })
        )){
            navigation.navigate('SitGeoContactCompany')
        }
    }

    return (
        <ScrollView style={{ height }}>
            <NativeBaseProvider theme={themeFormLogin}>
                <Formik
                    validationSchema={InfoGeneralYup}
                    initialValues={{
                        numero_tel: numero_tel,
                        contact_rep_legal: '',
                        representant_legal: '',
                        categorie: '',
                        denomination: '',
                        raison_sociale: '',
                        secteur_activite: '', // -
                        email: '',
                        fax: '',
                    }}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        if (route.params.action.user_number != null) {
                            values.numero_tel = numero_tel;
                        }
                        // console.log(textInput, 'textInput')
                        nextPage(values)
                        // console.log(values)
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
                            <HeaderComponent navigation={navigation} title={'Enrollment (Entreprise)'} action={'Retour'} />

                            <View style={stylesInfoGeneralP.Vtitle}>
                                <View style={stylesInfoGeneralP.V2title}>
                                    <Text
                                        style={stylesInfoGeneralP.title}
                                    >
                                        1 - Informations Générales
                                    </Text>
                                </View>
                            </View>


                            {/* Numero de téléphone */}
                            <FormControl isRequired isInvalid={(errors.numero_tel && touched.numero_tel)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        {route.params.action.user_number == null && (
                                            <Input
                                            // style={stylesInfoGeneralP.input}
                                            type="number"
                                            placeholder='Numéro Entreprise'
                                            keyboardType="numeric"
                                            onChangeText={handleChange('numero_tel')}
                                            onBlur={handleBlur('numero_tel')}
                                            value={values.numero_tel}
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
                                        />
                                        )}
                                        {route.params.action.user_number != null && (
                                            <Text style={stylesInfoGeneralP.txtNum}>Numero : {route.params.action.user_number}</Text>
                                        )}

                                    </View>
                                </View>
                               <View style={stylesInfoGeneralP.alert}>
                                {(errors.numero_tel && touched.numero_tel) &&
                                        <FormControl.ErrorMessage>
                                            {errors.numero_tel}
                                        </FormControl.ErrorMessage>
                                    }
                               </View>
                            </FormControl>

                            {/* contact_rep_legal */}
                            <FormControl isRequired isInvalid={(errors.contact_rep_legal && touched.contact_rep_legal)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        {/* <Input
                                            // style={stylesInfoGeneralP.input}
                                            type="number"
                                            placeholder='Contact du representant'
                                            keyboardType="numeric"
                                            onChangeText={handleChange('contact_rep_legal')}
                                            onBlur={handleBlur('contact_rep_legal')}
                                            value={values.contact_rep_legal}
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
                                        /> */}
                                        <Text style={{color: 'gray'}}> Contact du representant </Text>
                                        <PhoneInput
                                            // withShadow={true}
                                            containerStyle={stylesInfoGeneralP.phonestyle}
                                            ref={textInput}
                                            placeholder={'Contact du representant'}
                                            defaultValue={values.contact_rep_legal}
                                            value={values.contact_rep_legal}
                                            layout="first"
                                            // defaultValue={values.contact_rep_legal}
                                            // value={values.contact_rep_legal}
                                            defaultCode={"ML"}
                                            // defaultCode="CI"
                                            // onChangeText={(text) => {
                                            //     setData('');
                                            // }}
                                            // maxLength={8}
                                            onBlur={handleBlur('contact_rep_legal')}
                                            onChangeText={handleChange('contact_rep_legal')}
                                            onChangeFormattedText={(text)=>{
                                                // console.log(text, 'code')
                                                // console.log(textInput.current.state.code, 'current')
                                                setCodeNumber(textInput.current.state.code)
                                            }}
                                            // disabled={false}
                                            // withDarkTheme
                                            withShadow
                                        // autoFocus
                                        />
                                    </View>
                                </View>
                                <View style={stylesInfoGeneralP.alert}>
                                {(errors.contact_rep_legal && touched.contact_rep_legal) &&
                                    <FormControl.ErrorMessage>
                                        {errors.contact_rep_legal}
                                    </FormControl.ErrorMessage>
                                }
                                </View>
                            </FormControl>

                            {/* representant_legal */}
                            <FormControl isRequired isInvalid={(errors.representant_legal && touched.representant_legal)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        <Input
                                            // style={stylesInfoGeneralP.input}
                                            type="text"
                                            placeholder='Répresentant Légal'
                                            // keyboardType="numeric"
                                            onChangeText={handleChange('representant_legal')}
                                            onBlur={handleBlur('representant_legal')}
                                            value={values.representant_legal}
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
                                <View style={stylesInfoGeneralP.alert}>
                                {(errors.representant_legal && touched.representant_legal) &&
                                    <FormControl.ErrorMessage>
                                        {errors.representant_legal}
                                    </FormControl.ErrorMessage>
                                }
                                </View>
                            </FormControl>

                            {/* catégorie */}
                            <FormControl isRequired isInvalid={(errors.categorie && touched.categorie)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                    <Input
                                        // style={stylesInfoGeneralP.input}
                                        type="text"
                                        placeholder='Catégorie'
                                        // keyboardType="numeric"
                                        onChangeText={handleChange('categorie')}
                                        onBlur={handleBlur('categorie')}
                                        value={values.categorie}
                                        // setCategorie
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
                                <View style={stylesInfoGeneralP.alert}>
                                {(errors.categorie && touched.categorie) &&
                                    <FormControl.ErrorMessage>
                                        {errors.categorie}
                                    </FormControl.ErrorMessage>
                                }
                                </View>

                            </FormControl>

                            {/* secteur_activite */}
                            <FormControl isRequired isInvalid={(errors.secteur_activite && touched.secteur_activite)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                    <Input
                                        // style={stylesInfoGeneralP.input}
                                        type="text"
                                        placeholder="Secteur d'activité"
                                        // keyboardType="numeric"
                                        onChangeText={handleChange('secteur_activite')}
                                        onBlur={handleBlur('secteur_activite')}
                                        value={values.secteur_activite}
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
                                        {/* <Select
                                            selectedValue={values.secteur_activite}
                                            minWidth={200}
                                            accessibilityLabel="Secteur d'activité"
                                            placeholder="Secteur d'activité"
                                            onValueChange={(itemValue) => {
                                                // handleChange(itemValue)
                                                setFieldValue('secteur_activite',itemValue)
                                            }}
                                            _selectedItem={{
                                                bg: "cyan.600",
                                                endIcon: <CheckIcon size={4} />,
                                            }}
                                        >
                                            <Select.Item label="Test1" value={"Test1"} />
                                            <Select.Item label="Test" value="Test" />
                                        </Select> */}
                                    </View>
                                </View>
                                <View style={stylesInfoGeneralP.alert}>
                                {(errors.secteur_activite && touched.secteur_activite) &&
                                    <FormControl.ErrorMessage>
                                        {errors.secteur_activite}
                                    </FormControl.ErrorMessage>
                                }
                                </View>

                            </FormControl>

        
                            {/* Dénomination */}
                            <FormControl isRequired isInvalid={(errors.denomination && touched.denomination)}>
                            <View style={stylesInfoGeneralP.parentinputNum}>
                                <View style={stylesInfoGeneralP.soninputNum}>
                                    <Input
                                        // style={stylesInfoGeneralP.input}
                                        type="text"
                                        placeholder='Dénomination'
                                        // keyboardType="numeric"
                                        onChangeText={handleChange('denomination')}
                                        onBlur={handleBlur('denomination')}
                                        value={values.denomination}
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
                            <View style={stylesInfoGeneralP.alert}>
                            {(errors.denomination && touched.denomination) &&
                                    <FormControl.ErrorMessage>
                                        {errors.denomination}
                                    </FormControl.ErrorMessage>
                                }
                            </View>
                            </FormControl>

                            {/* Raison sociale */}
                            <FormControl isRequired isInvalid={(errors.raison_sociale && touched.raison_sociale)}>
                            <View style={stylesInfoGeneralP.parentinputNum}>
                                <View style={stylesInfoGeneralP.soninputNum}>
                                    <Input
                                        // style={stylesInfoGeneralP.input}
                                        type="text"
                                        placeholder='Raison sociale'
                                        // keyboardType="numeric"
                                        onChangeText={handleChange('raison_sociale')}
                                        onBlur={handleBlur('raison_sociale')}
                                        value={values.raison_sociale}
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
                            <View style={stylesInfoGeneralP.alert}>
                            {(errors.raison_sociale && touched.raison_sociale) &&
                                    <FormControl.ErrorMessage>
                                        {errors.raison_sociale}
                                    </FormControl.ErrorMessage>
                                }
                            </View>
                            </FormControl>

                            {/* email */}
                            <FormControl isRequired isInvalid={(errors.email && touched.email)}>
                            <View style={stylesInfoGeneralP.parentinputNum}>
                                <View style={stylesInfoGeneralP.soninputNum}>
                                    <Input
                                        // style={stylesInfoGeneralP.input}
                                        type="text"
                                        placeholder='Addresse email'
                                        // keyboardType="numeric"
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
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
                            <View style={stylesInfoGeneralP.alert}>
                            {(errors.email && touched.email) &&
                                <FormControl.ErrorMessage>
                                    {errors.email}
                                </FormControl.ErrorMessage>
                            }
                            </View>

                        </FormControl>

                            {/* fax */}
                            <FormControl isRequired isInvalid={(errors.fax && touched.fax)}>
                            <View style={stylesInfoGeneralP.parentinputNum}>
                                <View style={stylesInfoGeneralP.soninputNum}>
                                    <Input
                                        // style={stylesInfoGeneralP.input}
                                        type="text"
                                        placeholder='Fax'
                                        // keyboardType="numeric"
                                        onChangeText={handleChange('fax')}
                                        onBlur={handleBlur('fax')}
                                        value={values.fax}
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
                            <View style={stylesInfoGeneralP.alert}>
                            {(errors.fax && touched.fax) &&
                                <FormControl.ErrorMessage>
                                    {errors.fax}
                                </FormControl.ErrorMessage>
                            }
                            </View>

                        </FormControl>


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
                                        style={stylesInfoGeneralP.btn}
                                        _text={{ color: 'white', fontWeight: 'bold' }}
                                        startIcon={<AntDesign name="login" size={24} color="#fff" />}
                                    >
                                        Continue
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

export default withHOC(InfoGeneralComponent);
