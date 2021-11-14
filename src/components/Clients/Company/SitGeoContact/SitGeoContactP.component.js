import React, { useState, useEffect, useRef } from 'react';
import { stylesInfoGeneralP } from './styles';
import withHOC from '../../../../_Shared/Lib/index'
import { SitGeoContactPYup } from './yup';
import PhoneInput from 'react-native-phone-number-input';

const SitGeoContactCompanyComponent = ({ navigation, route, lib }) => {
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
        ReduxSelectors
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

    const phoneInputRef = useRef();
    const [codeNumber, setCodeNumber] = useState(null);
    const [viewAut, setViewAut] = useState(false);

    const { height } = Dimensions.get('window');
    const dispatch = useDispatch();
    const data_INFO_Company = useSelector(getCompany);
    const hideSplash = () => {
        SplashScreen.hide();
    }

    useEffect(() => {
        hideSplash();
        // console.log(data_INFO_Company, 'data_INFO_Company sit geo l')

        // console.log(route.params.action.status, 'find_number_user | new_inscription')
        // console.log(route.params.action.user_number, 'user_number')
        // console.log(route.params.action.user_id, 'user_id')
    }, [])

    const nextPage = (param) => {
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
                    region: param.region,
                    cercle: param.cercle,
                    commune: param.commune,
                    quartier: param.quartier,
                    addresse: param.addresse,
                    other_numero: codeNumber + param.other_numero,
                    autorite_delivrance: param.autorite_delivrance,
                    other_autorite: param.other_autorite,
                    // Situation géographique

                })
            )
        ) {
            navigation.navigate('PieceContratCompany', {
                reload: {
                    date: new Date()
                }
            })
            // console.log(data_INFO_Company, 'data_INFO_Company sit geo')
            // console.log(param, 'param')

        }
    }


    return (
        <ScrollView style={{ height }}>
            <NativeBaseProvider theme={themeFormLogin}>
                <Formik
                    validationSchema={SitGeoContactPYup}
                    initialValues={{
                        region: '',
                        cercle: '',
                        commune: '',
                        quartier: '',
                        addresse: '',
                        other_numero: '',
                        autorite_delivrance: '',
                        other_autorite: '',
                    }}
                    onSubmit={(values, actions) => {
                        // console.log(values)
                        actions.resetForm()
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
                            <HeaderComponent navigation={navigation} title={'Enrollment (Entreprise)'} action={'Retour'} />

                            <View style={stylesInfoGeneralP.Vtitle}>
                                <View style={stylesInfoGeneralP.V2title}>
                                    <Text
                                        style={stylesInfoGeneralP.title}
                                    >
                                        2 - Situation Géographique
                                    </Text>
                                </View>
                            </View>

                            {/* region */}
                            <FormControl isRequired isInvalid={(errors.region && touched.region)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        <Input
                                            // style={stylesInfoGeneralP.input}
                                            type="text"
                                            placeholder='region'
                                            // keyboardType="numeric"
                                            onChangeText={handleChange('region')}
                                            onBlur={handleBlur('region')}
                                            value={values.region}
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
                                            selectedValue={values.region}
                                            minWidth={200}
                                            accessibilityLabel="Région"
                                            placeholder="Région"
                                            onValueChange={(itemValue) => {
                                                // handleChange(itemValue)
                                                setFieldValue('region', itemValue)
                                            }}
                                            _selectedItem={{
                                                bg: "cyan.600",
                                                endIcon: <CheckIcon size={4} />,
                                            }}
                                        >
                                            <Select.Item label="KAYES" value={"01"} />
                                            <Select.Item label="KOULIKORO" value="02" />
                                            <Select.Item label="SIKASSO" value="03" />
                                            <Select.Item label="SEGOU" value="04" />
                                            <Select.Item label="MOPTI" value="05" />
                                            <Select.Item label="TOMBOUCTOU" value="06" />
                                            <Select.Item label="GAO" value="07" />
                                            <Select.Item label="KIDAL" value="08" />
                                            <Select.Item label="BAMAKO" value="09" />
                                            <Select.Item label="ETRANGER" value="99" />
                                        </Select> */}
                                    </View>
                                </View>
                                <View style={stylesInfoGeneralP.alert}>
                                    {(errors.region && touched.region) &&
                                        <FormControl.ErrorMessage>
                                            {errors.region}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>

                            </FormControl>

                            {/* cercle */}
                            <FormControl isRequired isInvalid={(errors.cercle && touched.cercle)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        <Input
                                            // style={stylesInfoGeneralP.input}
                                            type="text"
                                            placeholder='cercle'
                                            // keyboardType="numeric"
                                            onChangeText={handleChange('cercle')}
                                            onBlur={handleBlur('cercle')}
                                            value={values.cercle}
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
                                    {(errors.cercle && touched.cercle) &&
                                        <FormControl.ErrorMessage>
                                            {errors.cercle}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>
                            </FormControl>

                            {/* Commune */}
                            <FormControl isRequired isInvalid={(errors.commune && touched.commune)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        <Input
                                            // style={stylesInfoGeneralP.input}
                                            // type="number"
                                            placeholder='commune'
                                            // keyboardType="numeric"
                                            onChangeText={handleChange('commune')}
                                            onBlur={handleBlur('commune')}
                                            value={values.commune}
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
                                            selectedValue={values.commune}
                                            minWidth={200}
                                            accessibilityLabel="commune"
                                            placeholder="commune"
                                            onValueChange={(itemValue) => {
                                                // handleChange(itemValue)
                                                setFieldValue('commune', itemValue)
                                            }}
                                            _selectedItem={{
                                                bg: "cyan.600",
                                                endIcon: <CheckIcon size={4} />,
                                            }}
                                        >
                                            <Select.Item label="BANGASSI" value="746" />
                                            <Select.Item label="COLIMBINE" value="747" />
                                            <Select.Item label="DIAMOU" value="748" />
                                            <Select.Item label="DJELEBOU" value="749" />
                                            <Select.Item label="FALEME" value="750" />
                                            <Select.Item label="FEGUI" value="751" />
                                        </Select> */}
                                    </View>
                                </View>
                                <View style={stylesInfoGeneralP.alert}>
                                    {(errors.commune && touched.commune) &&
                                        <FormControl.ErrorMessage>
                                            {errors.commune}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>

                            </FormControl>

                            {/* Autre Numero de téléphone */}
                            <FormControl isRequired isInvalid={(errors.other_numero && touched.other_numero)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        {/* <Input
                                            // style={stylesInfoGeneralP.input}
                                            type="number"
                                            placeholder='Autre tel'
                                            keyboardType="numeric"
                                            onChangeText={handleChange('other_numero')}
                                            onBlur={handleBlur('other_numero')}
                                            value={values.other_numero}
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
                                        <Text style={{ color: 'gray' }}> Autre tel </Text>
                                        <PhoneInput
                                            withShadow={true}
                                            containerStyle={stylesInfoGeneralP.phonestyle}
                                            ref={phoneInputRef}
                                            placeholder={'Autre tel'}
                                            defaultValue={values.other_numero}
                                            defaultCode="ML"
                                            // defaultCode="CI"
                                            // onChangeText={(text) => {
                                            //     setPhonenumber_search(text);
                                            // }}
                                            // maxLength={8}
                                            onBlur={handleBlur('other_numero')}
                                            onChangeText={handleChange('other_numero')}
                                            onChangeFormattedText={(text) => {
                                                // console.log(text, 'code')
                                                // console.log(textInput.current.state.code, 'current')
                                                setCodeNumber(phoneInputRef.current.state.code)
                                            }}
                                            // withDarkTheme
                                            withShadow
                                        // autoFocus
                                        />
                                    </View>
                                </View>
                                <View style={stylesInfoGeneralP.alert}>
                                    {(errors.other_numero && touched.other_numero) &&
                                        <FormControl.ErrorMessage>
                                            {errors.other_numero}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>
                            </FormControl>



                            {/* quartier */}
                            <FormControl isRequired isInvalid={(errors.quartier && touched.quartier)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        <Input
                                            // style={stylesInfoGeneralP.input}
                                            type="text"
                                            placeholder='quartier'
                                            // keyboardType="numeric"
                                            onChangeText={handleChange('quartier')}
                                            onBlur={handleBlur('quartier')}
                                            value={values.quartier}
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
                                    {(errors.quartier && touched.quartier) &&
                                        <FormControl.ErrorMessage>
                                            {errors.quartier}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>
                            </FormControl>

                            {/* addresse */}
                            <FormControl isRequired isInvalid={(errors.addresse && touched.addresse)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        <Input
                                            // style={stylesInfoGeneralP.input}
                                            type="text"
                                            placeholder='addresse'
                                            // keyboardType="numeric"
                                            onChangeText={handleChange('addresse')}
                                            onBlur={handleBlur('addresse')}
                                            value={values.addresse}
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
                                    {(errors.addresse && touched.addresse) &&
                                        <FormControl.ErrorMessage>
                                            {errors.addresse}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>
                            </FormControl>

                            {/* -- */}
                            {/* -- */}

                            {/* Autorité de délivrance */}
                            <FormControl isRequired isInvalid={(errors.autorite_delivrance && touched.autorite_delivrance)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        <Select
                                            selectedValue={values.autorite_delivrance}
                                            minWidth={200}
                                            accessibilityLabel="Autorité de délivrance"
                                            placeholder="Autorité de délivrance"
                                            onValueChange={(itemValue) => {
                                                // handleChange(itemValue)
                                                if (itemValue == 'AUTRES') {
                                                    setViewAut(true)
                                                } else {
                                                    setViewAut(false)
                                                }
                                                setFieldValue('autorite_delivrance', itemValue)
                                            }}
                                            _selectedItem={{
                                                bg: "cyan.600",
                                                endIcon: <CheckIcon size={4} />,
                                            }}
                                        >
                                            <Select.Item label="COMMISSARIAT" value={"COMMISSARIAT"} />
                                            <Select.Item label="ONI" value="ONI" />
                                            <Select.Item label="SURETE" value="SURETE" />
                                            <Select.Item label="AUTRES" value="AUTRES" />
                                        </Select>
                                    </View>
                                </View>
                                <View style={stylesInfoGeneralP.alert}>
                                    {(errors.autorite_delivrance && touched.autorite_delivrance) &&
                                        <FormControl.ErrorMessage>
                                            {errors.autorite_delivrance}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>

                            </FormControl>

                            {/* Autres autorité de délivrance */}
                            <FormControl isRequired isInvalid={(errors.other_autorite && touched.other_autorite)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        {viewAut == true && (
                                            <Input
                                                // style={stylesInfoGeneralP.input}
                                                type="text"
                                                placeholder='Autres Autorité'
                                                // keyboardType="numeric"
                                                onChangeText={handleChange('other_autorite')}
                                                onBlur={handleBlur('other_autorite')}
                                                value={values.other_autorite}
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
                                        )}

                                    </View>
                                </View>
                                <View style={stylesInfoGeneralP.alert}>
                                    {(errors.other_autorite && touched.other_autorite) &&
                                        <FormControl.ErrorMessage>
                                            {errors.other_autorite}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>
                            </FormControl>

                            {/* -- */}
                            {/* -- */}




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

export default withHOC(SitGeoContactCompanyComponent);
