import React, { useState, useEffect } from 'react';
import { stylesDashboard } from './styles';
// ComponentShare
import withHOC from '../../_Shared/Lib/index';

const StatsComponent = ({ navigation, lib, route }) => {
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
        realm,
        RealmCrud,
    } = lib

    const {
        queryAllTodoParticular,
        queryAllTodoTodoCompany
    } = RealmCrud

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

    const { height } = Dimensions.get('window');
    const [ClientRegisterLocal, setClientRegisterLocal] = useState(0);
    const [ClientCompanyLocal, setClientCompanyLocal] = useState(0);

    const getClientRegisterLocal = () => {
        queryAllTodoParticular().then((response) => {
            // console.log(response,`ClientRegisterLocal`);
            // console.log(response.length,`ClientRegisterLocal length`);
            setClientRegisterLocal(response.length);
        }).catch((error) => {
            console.log(error,`error`);
        });
    }
    const getClientCompanyLocal = () => {
        queryAllTodoTodoCompany().then((response) => {
            setClientCompanyLocal(response.length);
        }).catch((error) => {
            console.log(error,`error`);
        });
    }

    useEffect(() => {
        getClientRegisterLocal()
        getClientCompanyLocal()
    },[route.params.reload.date])

    return (
        <ScrollView style={{ height }}>
            <ImageBackground source={backgroungImage} style={{ height }}>
                <NativeBaseProvider>
                    <Stack space={5} mt={0} height={'80%'}>
                        <HeaderComponent navigation={navigation} title={'Reporting Clients'} action={'Retour'} />


                        {/* --- pub --- */}
                        <View style={stylesDashboard.parentPub}>
                            <Heading size="lg" color='#35424a' textAlign='center'>
                                Statistiques
                            </Heading>
                        </View>
                        {/* --- pub --- */}

                        {/* Première Ligne */}
                        <Stack space={5} mt={4} justifyContent="space-between" alignItems="center">
                            {/*  */}
                            <Stack direction={'row'} space={5} mb={0} style={stylesDashboard.stack}>
                                <View
                                    //   onPress={() => {
                                    //     navigation.navigate('ChoiceProcess')
                                    //   }}
                                    //   activeOpacity={0.8}
                                    style={stylesDashboard.touch}
                                >
                                    <FontAwesome name="users" size={30} color={themeColor} />
                                    <Text style={stylesDashboard.descT}>
                                        Client inscrits en local : {ClientRegisterLocal}
                                    </Text>
                                </View>
                            </Stack>
                            {/*  */}
                            {/*  */}
                            <Stack direction={'row'} space={5} mb={0} style={stylesDashboard.stack}>
                                <View
                                    //   onPress={() => {
                                    //     navigation.navigate('ChoiceProcess')
                                    //   }}
                                    //   activeOpacity={0.8}
                                    style={stylesDashboard.touch}
                                >
                                    <FontAwesome name="users" size={30} color={themeColor} />
                                    <Text style={stylesDashboard.descT}>
                                        Entreprise inscrite en local : {ClientCompanyLocal}
                                    </Text>
                                </View>
                            </Stack>
                            {/*  */}


                        </Stack>
                        {/* Première Ligne */}

                    </Stack>

                </NativeBaseProvider>
            </ImageBackground>
        </ScrollView>
    )
}

export default withHOC(StatsComponent)