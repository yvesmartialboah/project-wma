/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {stylesDashboard} from './styles';
// ComponentShare
import withHOC from '../../_Shared/Lib/index';

const DashboardComponent = ({ navigation, lib }) => {
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
    Redux,
    ReduxAction,
    ReduxSelectors,
    Toast,
  } = lib

  const {
    useSelector,
    useDispatch
  } = Redux

  const {
    updateInfoUser,
  } = ReduxAction

  const {
    getuser,
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

  const dispatch = useDispatch();
  const data_user = useSelector(getuser);
  const { height } = Dimensions.get('window');

  useEffect(() => {
    // console.log(data_user, 'data_user dash')
  }, []);

  return (
    <ScrollView style={{ height }}>
      <ImageBackground source={backgroungImage} style={{ height }}>
        <NativeBaseProvider>
          <Stack space={5} mt={0} height={'80%'}>
            <HeaderComponent navigation={navigation} title={'Bonjour '+ data_user[0].name} action={'Menu'}/>


            {/* --- pub --- */}
            <View style={stylesDashboard.parentPub}>
              <Heading size="lg" color='#35424a' textAlign='center'>
                Espace Pub
              </Heading>
            </View>
            {/* --- pub --- */}

            {/* Première Ligne */}
            <Stack space={5} mt={2} justifyContent="space-between" alignItems="center">
              {/*  */}
              <Stack direction={'row'} space={5} mb={0} style={stylesDashboard.stack}>
              <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ChoiceProcess',{
                      reload : {
                        date: new Date()
                      }
                    })
                  }}
                  activeOpacity={0.8}
                  style={stylesDashboard.touch}
                >
                <Center
                  size={70}
                  bg={themeColor}
                  width={'100%'}
                  rounded={10}
                  _text={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: 'bold'
                  }}
                  shadow={3}
                  // mr={2}
                >
                  <FontAwesome name="users" size={30} color="#fff" />
                  Client
                </Center>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Transferts',{
                      reload : {
                        date: new Date()
                      }
                    })
                  }}
                  activeOpacity={0.8}
                  style={stylesDashboard.touch}
                >
                <Center
                  bg={themeColor}
                  size={70}
                  width={'100%'}
                  rounded={10}
                  _text={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: 'bold'
                  }}
                  shadow={3}
                  // ml={2}
                >
                  <MaterialIcons name="send-to-mobile" size={30} color="#fff" />
                  Transfert
                </Center>
                </TouchableOpacity>
              </Stack>
              {/*  */}


            </Stack>
            {/* Première Ligne */}


            {/* Deuxième Ligne */}
            <Stack space={5} mt={0} alignItems="center">
              {/* TicketsVendu */}
              <Stack direction={'row'} space={5} style={stylesDashboard.stack}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Stats',{
                      reload : {
                        date: new Date()
                      }
                    })
                  }}
                  activeOpacity={0.8}
                  style={stylesDashboard.touch}
                >
                  <Center
                    size={70}
                    bg={themeColor}
                    width={'100%'}
                    rounded={10}
                    _text={{
                      color: "white",
                      fontSize: 14,
                      fontWeight: 'bold'
                    }}
                    shadow={3}
                    // mr={2}
                  >
                    <AntDesign name="book" size={30} color="#fff" />
                    {/* Reporting */}
                    Stats/offline
                  </Center>
                </TouchableOpacity>

                {/* stats période */}
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('StatsPeriode',{
                      reload : {
                        date: new Date()
                      }
                    })
                  }}
                  activeOpacity={0.8}
                  style={stylesDashboard.touch}
                >
                  <Center
                    size={70}
                    bg={themeColor}
                    width={'100%'}
                    rounded={10}
                    _text={{
                      color: "white",
                      fontSize: 14,
                      fontWeight: 'bold'
                    }}
                    shadow={3}
                    // mr={2}
                  >
                    <AntDesign name="barschart" size={30} color="#fff" />
                    stats/Période
                  </Center>
                </TouchableOpacity>
                

              </Stack>
              {/*  */}


            </Stack>
            {/* Deuxième Ligne */}

             {/* Troisième Ligne */}
             <Stack space={5} mt={0} alignItems="center">
              {/* Rechargement */}
              <Stack direction={'row'} space={5} style={stylesDashboard.stack}>
                {/* Rechargement xxx */}
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AddRecharge', {
                      reload : {
                        date: new Date()
                      }
                    })
                  }}
                  activeOpacity={0.8}
                  style={stylesDashboard.touch}
                >
                  <Center
                    bg={themeColor}
                    size={70}
                    width={'100%'}
                    rounded={10}
                    _text={{
                      color: "white",
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      paddingLeft: 1,
                      paddingRight: 2,
                    }}
                    shadow={3}
                  // ml={2}
                  >
                    <FontAwesome name="dollar" size={30} color="#fff" />
                      Rechargement du compte client
                  </Center>
                </TouchableOpacity>

                {/* xxxxx */}
                 <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('RechargePeriode',{
                      reload : {
                        date: new Date()
                      }
                    })
                    // navigation.navigate('EditPassword')
                  }}
                  activeOpacity={0.8}
                  style={stylesDashboard.touch}
                >
                  <Center
                    bg={themeColor}
                    size={70}
                    width={'100%'}
                    rounded={12}
                    _text={{
                      color: "white",
                      fontSize: 10,
                      fontWeight: 'bold'
                    }}
                    shadow={3}
                  // ml={2}
                  >
                    <FontAwesome name="dollar" size={30} color="#fff" />
                    Historique des Rechargements
                  </Center>
                </TouchableOpacity> 

              </Stack>
              {/*  */}


            </Stack>
            {/* Troisième Ligne */}


          </Stack>


          {/* Btn */}

          {/* <Stack space={0} justifyContent={'center'} flexDirection={'row'} alignItems={'flex-start'} mt={0} height={'20%'}>
            <Button
              // flex={1}
              bgColor={themeColor}
              onPress={() => { 
                // navigation.navigate('') 
              }}
              // onPress={() => setDirection(direction === "row" ? "column" : "row")}
              startIcon={<MaterialIcons name="home" size={24} color="#fff" />}
            >
              Menu
            </Button>
          </Stack> */}
        </NativeBaseProvider>
      </ImageBackground>
    </ScrollView>
  )
}

export default withHOC(DashboardComponent)