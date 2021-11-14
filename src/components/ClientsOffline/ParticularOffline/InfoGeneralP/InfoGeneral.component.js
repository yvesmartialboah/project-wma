import React, { useState, useEffect, useRef } from 'react';
import { stylesInfoGeneralP } from './styles';
import withHOC from '../../../../_Shared/Lib/index'
import { InfoGeneralYup } from './yup';
import PhoneInput from 'react-native-phone-number-input';

const InfoGeneralParticularOfflineComponent = ({ navigation, route, lib }) => {
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
    const data_Info_Particular = useSelector(getParticular);
    useEffect(() => {
        // console.log(route.params.action.status, 'find_number_user | new_inscription')
        // console.log(route.params.action.user_number, 'user_number')
        // console.log(route.params.action.user_id, 'user_id')
        // console.log(route.params.action.date, 'date')
        // console.log(data_Info_Particular, 'data_Info_Particular')
        setDate(null)
    }, [route.params.action.date])
    const [civilite, setCivilite] = useState('Monsieur');
    const [sex, setSex] = useState('Masculin');
    const [Field_data, setField_data] = useState('');
    const [situation_matrimoniale, setSituation_matrimoniale] = useState(null)

    // Date
    const [date_stable, setDate_stable] = useState(new Date());
    const [date, setDate] = useState(null);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [numero_tel, setNumero_tel] = useState(null);

    const onChange = (event, selectedValue) => {
        // moment().format('Y-M-D', event)
        setDate(event);
        console.log(event, 'event')
        setShow(false);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
        console.log(currentMode, 'currentMode')
    };

    const showDatepicker = () => {
        showMode('date');
        console.log('date')
    };

    const showTimepicker = () => {
        showMode('time');
    };
    // Date

    const nextPage = (param) => {
        if (dispatch(
            updateInfoParticular(1, {
                civilite: civilite,
                sex: sex,
                numero_tel: codeNumber + param.numero_tel,
                nom: param.nom,
                prenom: param.prenom,
                situation_matrimoniale: param.situation_matrimoniale,
                // date_naissance: moment().format('Y-M-D', param.date_naissance),
                date_naissance: param.date_naissance, // -
                lieu_de_naissance: param.lieu_de_naissance,
                nationalite: param.nationalite,
                profession: param.profession,
            })
        )) {
            navigation.navigate('SitGeoContactParticularOffline')
        }
    }

    return (
        <ScrollView style={{ height }}>
            <NativeBaseProvider theme={themeFormLogin}>
                <Formik
                enableReinitialize={true}
                    validationSchema={InfoGeneralYup}
                    initialValues={{
                        civilite: civilite, //-
                        numero_tel: '',
                        nom: '',
                        prenom: '',
                        // sex: sex, // -
                        situation_matrimoniale: '',
                        date_naissance: '', // -
                        lieu_de_naissance: '',
                        nationalite: '',
                        profession: '',
                    }}
                    onSubmit={(values, actions) => {
                        // console.log(values)
                        // actions.resetForm({
                        //     values: {
                        //         numero_tel : '',
                        //         nom : '',
                        //         prenom : '',
                        //         situation_matrimoniale : '',
                        //         date_naissance : '',
                        //         lieu_de_naissance : '',
                        //         nationalite : '',
                        //         profession : ''
                        //     },
                        // });
                        
                        // console.log(values, 'values')
                        setDate(null)
                        actions.resetForm();
                        console.log(codeNumber, 'codeNumber')
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
                        resetForm
                    }) => (
                        <Stack space={5} mt={0} height={'80%'}>
                            <HeaderComponent navigation={navigation} title={'Enrollment (Particulier)'} action={'Retour'} />

                            <View style={stylesInfoGeneralP.Vtitle}>
                                <View style={stylesInfoGeneralP.V2title}>
                                    <Text
                                        style={stylesInfoGeneralP.title}
                                    >
                                        1 - Informations Générales Hors-connexion
                                    </Text>
                                </View>
                            </View>




                            {/* Civilité */}

                            <View style={stylesInfoGeneralP.radioChoiceSon}>
                                <View>
                                    <Radio.Group
                                        name="myRadioGroup"
                                        value={civilite}
                                        onChange={(nextValue) => {
                                            setCivilite(nextValue);
                                        }}
                                        style={stylesInfoGeneralP.radioChoiceSon}
                                    >
                                        <Radio value="Monsieur" my={1}>
                                            Mr
                                        </Radio>
                                        <Radio value="Madame" my={1}>
                                            Mme
                                        </Radio>
                                        <Radio value="Mademoiselle" my={1}>
                                            Mlle
                                        </Radio>
                                    </Radio.Group>
                                </View>
                            </View>


                            {/* Numero de téléphone */}
                            <FormControl isRequired isInvalid={(errors.numero_tel && touched.numero_tel)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        {/* <Input
                                            // style={stylesInfoGeneralP.input}
                                            type="number"
                                            placeholder='Numéro'
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
                                        /> */}
                                        <Text style={{color: 'gray'}}> Numéro </Text>
                                        <PhoneInput
                                            // withShadow={true}
                                            containerStyle={stylesInfoGeneralP.phonestyle}
                                            ref={textInput}
                                            placeholder={'Numéro Entreprise'}
                                            defaultValue={values.numero_tel}
                                            value={values.numero_tel}
                                            layout="first"
                                            defaultCode={"ML"}
                                            // maxLength={8}
                                            onBlur={handleBlur('numero_tel')}
                                            // onChangeFormattedText={handleChange('numero_tel')}
                                            onChangeText={handleChange('numero_tel')}
                                            // disabled={false}
                                            // withDarkTheme
                                            withShadow
                                            
                                            // onChangeCountry={(text)=>
                                            //     console.log(text, 'onChangeCountry')
                                            // }
                                            onChangeFormattedText={(text)=>{
                                                // console.log(text, 'code')
                                                // console.log(textInput.current.state.code, 'current')
                                                setCodeNumber(textInput.current.state.code)
                                            }}
                                        // autoFocus
                                        />

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

                            {/* Nom */}
                            <FormControl isRequired isInvalid={(errors.nom && touched.nom)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        <Input
                                            // style={stylesInfoGeneralP.input}
                                            type="text"
                                            placeholder='Nom'
                                            // keyboardType="numeric"
                                            onChangeText={handleChange('nom')}
                                            onBlur={handleBlur('nom')}
                                            value={values.nom}
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
                                    {(errors.nom && touched.nom) &&
                                        <FormControl.ErrorMessage>
                                            {errors.nom}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>
                            </FormControl>

                            {/* Prenom */}
                            <FormControl isRequired isInvalid={(errors.prenom && touched.prenom)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        <Input
                                            // style={stylesInfoGeneralP.input}
                                            type="text"
                                            placeholder='Prénoms'
                                            // keyboardType="numeric"
                                            onChangeText={handleChange('prenom')}
                                            onBlur={handleBlur('prenom')}
                                            value={values.prenom}
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
                                    {(errors.prenom && touched.prenom) &&
                                        <FormControl.ErrorMessage>
                                            {errors.prenom}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>
                            </FormControl>

                            {/* Sex */}
                            {/* <View style={stylesInfoGeneralP.radioChoiceSonSex}>
                                <View>
                                    <Radio.Group
                                        name="myRadioGroup"
                                        value={sex}
                                        onChange={(nextValue) => {
                                            setSex(nextValue);
                                        }}
                                        style={stylesInfoGeneralP.radioChoiceSonSex}
                                    >
                                        <Radio value="Masculin" my={1}>
                                            Masculin
                                        </Radio>
                                        <Radio value="Feminin" my={1}>
                                            Feminin
                                        </Radio>
                                    </Radio.Group>
                                </View>
                            </View> */}

                            {/* Situation Matrimoniale */}
                            <FormControl isRequired isInvalid={(errors.situation_matrimoniale && touched.situation_matrimoniale)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        <Select
                                            selectedValue={values.situation_matrimoniale}
                                            minWidth={200}
                                            accessibilityLabel="Situation matrimoniale"
                                            placeholder="Situation matrimoniale"
                                            onValueChange={(itemValue) => {
                                                setSituation_matrimoniale(itemValue)
                                                // handleChange(itemValue)
                                                setFieldValue('situation_matrimoniale', itemValue)
                                            }}
                                            _selectedItem={{
                                                bg: "cyan.600",
                                                endIcon: <CheckIcon size={4} />,
                                            }}
                                        >
                                            <Select.Item label="CÉLIBATAIRE" value={"CÉLIBATAIRE"} />
                                            <Select.Item label="MARIÉ(E)" value="MARIÉ(E)" />
                                            <Select.Item label="VEUF(VE)" value="VEUF(VE)" />
                                            <Select.Item label="DIVORCÉ(E)" value="DIVORCÉ(E)" />
                                        </Select>
                                    </View>
                                </View>
                                <View style={stylesInfoGeneralP.alert}>
                                    {(errors.situation_matrimoniale && touched.situation_matrimoniale) &&
                                        <FormControl.ErrorMessage>
                                            {errors.situation_matrimoniale}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>

                            </FormControl>

                            {/* Date de naissance */}
                            <View style={stylesInfoGeneralP.radioChoiceSonSex}>
                                <View>
                                    <Text>Date de naissance</Text>
                                </View>
                            </View>

                            {/* Date de naissance */}
                            <FormControl isRequired isInvalid={(errors.date_naissance && touched.date_naissance)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View>
                                        <IconButton onPress={() => { showDatepicker() }}
                                            style={stylesInfoGeneralP.iconDate}
                                            icon={<Icon size="10" as={<MaterialIcons name="date-range" size={34} color="#fff" />}
                                                color={themeColor} />}
                                        />
                                    </View>
                                    <View style={stylesInfoGeneralP.dateinputNum}>

                                        {show ? (
                                            <DatePicker
                                                style={{ width: 200 }}
                                                date={date_stable}
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
                                                    setDate_stable(param)
                                                    // setDate(param)
                                                    // console.log(param.nativeEvent.timestamp, 'param')
                                                    onChange(param)
                                                    setFieldValue('date_naissance', param)
                                                }}
                                            />
                                            // <DateTimePicker
                                            //     testID="dateTimePicker"
                                            //     value={date_stable}
                                            //     mode={mode}
                                            //     is24Hour={true}
                                            //     display="default"
                                            //     onChange={(param) => {
                                            //         // console.log(param.nativeEvent.timestamp, 'param')
                                            //         onChange(param.nativeEvent.timestamp)
                                            //         setFieldValue('date_naissance', param.nativeEvent.timestamp)
                                            //         // handleChange('date_naissance')
                                            //     }}
                                            // />
                                        ) :
                                            <Text style={stylesInfoGeneralP.text_date}> {date == null ? '-----' : date_stable} </Text>
                                        }
                                    </View>
                                </View>
                                <View style={stylesInfoGeneralP.alert}>
                                    {(errors.date_naissance && touched.date_naissance) &&
                                        <FormControl.ErrorMessage>
                                            {errors.date_naissance}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>
                            </FormControl>

                            {/* Lieu de naissance */}
                            <FormControl isRequired isInvalid={(errors.lieu_de_naissance && touched.lieu_de_naissance)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        <Input
                                            // style={stylesInfoGeneralP.input}
                                            type="text"
                                            placeholder='Lieu de naissance'
                                            // keyboardType="numeric"
                                            onChangeText={handleChange('lieu_de_naissance')}
                                            onBlur={handleBlur('lieu_de_naissance')}
                                            value={values.lieu_de_naissance}
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
                                    {(errors.lieu_de_naissance && touched.lieu_de_naissance) &&
                                        <FormControl.ErrorMessage>
                                            {errors.lieu_de_naissance}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>
                            </FormControl>

                            {/* Nationalité */}
                            <FormControl isRequired isInvalid={(errors.nationalite && touched.nationalite)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        <Input
                                            // style={stylesInfoGeneralP.input}
                                            type="text"
                                            placeholder='Nationalité'
                                            // keyboardType="numeric"
                                            onChangeText={handleChange('nationalite')}
                                            onBlur={handleBlur('nationalite')}
                                            value={values.nationalite}
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
                                    {(errors.nationalite && touched.nationalite) &&
                                        <FormControl.ErrorMessage>
                                            {errors.nationalite}
                                        </FormControl.ErrorMessage>
                                    }
                                </View>

                            </FormControl>

                            {/* Profession */}
                            <FormControl isRequired isInvalid={(errors.profession && touched.profession)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        <Input
                                            // style={stylesInfoGeneralP.input}
                                            type="text"
                                            placeholder='Profession'
                                            // keyboardType="numeric"
                                            onChangeText={handleChange('profession')}
                                            onBlur={handleBlur('profession')}
                                            value={values.profession}
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
                                    {(errors.profession && touched.profession) &&
                                        <FormControl.ErrorMessage>
                                            {errors.profession}
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

export default withHOC(InfoGeneralParticularOfflineComponent);
