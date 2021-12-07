import React, { useState, useEffect } from 'react';
import { stylesInfoGeneralP } from './styles';
import withHOC from '../../_Shared/Lib/index'
import { SitGeoContactPYup } from './yup';

const EditPasswordComponent = ({ navigation, route, lib }) => {
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
    const [loader, setLoader] = useState(false);

    const featureLoad = () => {
        setLoader(false)
    }

    const hideSplash = () => {
        SplashScreen.hide();
    }

    useEffect(() => {
        hideSplash();
    }, [])
    return (
        <NativeBaseProvider theme={themeFormLogin}>
            <AwesomeLoading indicatorId={4} size={50} isActive={loader} text="loading" />

            <ScrollView style={{ height }}>
                <Formik
                    validationSchema={SitGeoContactPYup}
                    initialValues={{
                        confirm_password: ''
                    }}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        setLoader(true)
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
                            <HeaderComponent navigation={navigation} title={'Mon compte'} action={'Retour'} />

                            <View style={stylesInfoGeneralP.Vtitle}>
                                <View style={stylesInfoGeneralP.V2title}>
                                    <Text
                                        style={stylesInfoGeneralP.title}
                                    >
                                        Réédition du Mot de Passe
                                    </Text>
                                </View>
                            </View>

                            {/* confirm_password */}
                            <FormControl isRequired isInvalid={(errors.confirm_password && touched.confirm_password)}>
                                <View style={stylesInfoGeneralP.parentinputNum}>
                                    <View style={stylesInfoGeneralP.soninputNum}>
                                        <Input
                                            // style={stylesInfoGeneralP.input}
                                            type="text"
                                            placeholder='Nouveau mot de passe'
                                            // keyboardType="numeric"
                                            onChangeText={handleChange('confirm_password')}
                                            onBlur={handleBlur('confirm_password')}
                                            value={values.confirm_password}
                                            InputRightElement={
                                                <Icon
                                                    onPress={() => {
                                                        // 
                                                    }}
                                                    as={<MaterialIcons name={'lock'} />}
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
                                    {(errors.confirm_password && touched.confirm_password) &&
                                        <FormControl.ErrorMessage>
                                            {errors.confirm_password}
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
                                        startIcon={<AntDesign name="sync" size={24} color="#fff" />}
                                    >
                                        Mettre à jour
                                    </Button>
                                </VStack>
                            </Box>


                            <Box></Box>
                            <Box></Box>

                        </Stack>
                    )}

                </Formik>

            </ScrollView>
        </NativeBaseProvider>

    )
}

export default withHOC(EditPasswordComponent);
