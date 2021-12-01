import React, { useState, useEffect } from 'react'
import { stylesLogin } from './styles';
import withHOC from '../../_Shared/Lib/index'
import { LoginYup } from './yup';
import { Formik } from 'formik';

const LoginComponent = ({ navigation, lib }) => {
  // Librairie Parent
  const {
    nativebase,
    reactNative,
    MaterialIcons,
    MaterialCommunityIcons,
    AntDesign,
    SplashScreen,
    Animatable,
    media,
    colorApp,
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
    updateInfoUser,
  } = ReduxAction

  const {
    getuser,
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
    statusBarColor,
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
  } = nativebase


  /*
  * Function Component
  */
  const dispatch = useDispatch();
  const data_user = useSelector(getuser);
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [loader, setLoader] = useState(false);

  const featureLoad = () => {
    setLoader(false)
  }

  const hideSplash = () => {
    SplashScreen.hide();
  }

  const CONNEXION = (emailAt, passwordAt) => {
    const url = 'https://loving-bhaskara.161-97-120-236.plesk.page/kankumussa/api/login'; // server Plesk Us
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailAt,
        password: passwordAt
      })
    })
      .then((responses) => responses.json())
      .then((response) => {
        if (response.token) {

          // Envoie de données au store
          dispatch(updateInfoUser(1, {
            users: response.user,
            tok: response.token,
            pwd: passwordAt
          }))

          // Envoie de données au store
          Toast.show({
            type: 'success',
            text1: "Bon retour",
            text2: 'Parmis nous 🎉🎊',
            position: 'top',
            visibilityTime: 4000,
            autoHide: true,
          })

          navigation.navigate('Dashboard', {
            // reload: {
            //   date: new Date()
            // }
          })
          featureLoad()


        } else {
          featureLoad()
          Toast.show({
            type: 'error',
            text1: "Erreur",
            text2: "Email ou mot de passe érroné.",
            position: 'top',
            visibilityTime: 4000,
            autoHide: true,
          })

        }
      })
      .catch((error) => {
        featureLoad()
        // alert(error)
        Toast.show({
          type: 'error',
          text1: "Erreur",
          text2: "Vérifier votre connexion internet.",
          position: 'top',
          visibilityTime: 4000,
          autoHide: true,
        })
        console.log(error, 'erreur');
      });
  }


  const connexionApp = (values) => {
    const emailAt = values.email;
    const passwordAt = values.password;
    setLoader(true)
    CONNEXION(emailAt, passwordAt)
  }


  useEffect(() => {
    hideSplash();
  });

  /*
  * Function Component
  */
  return (
    <NativeBaseProvider theme={themeFormLogin} >
      <AwesomeLoading indicatorId={5} size={50} isActive={loader} text="Chargement" />
      <StatusBar barStyle="light-content" backgroundColor={statusBarColor} />
      <ImageBackground source={backgroungImage} style={stylesLogin.imgBackground}>
        <ScrollView style={stylesLogin.scrollView}>
          <Box
            flex={1}
            p={2}
            w="100%"
            mx='auto'
            bg="#fff"
          >

            <Box
              // flex={1}
              p={10}
              w="100%"
              mx='auto'
              alignItem='center'
              justifyContent="center"
            >
              <View style={stylesLogin.line}>
                <Animatable.View animation='fadeInLeft' iterationDelay={500} iterationCount={1} direction="alternate" duration={1500}>
                  <Image
                    size={150}
                    resizeMode={"contain"}
                    borderRadius={100}
                    source={logo}
                    alt="Alternate Text"
                  />
                </Animatable.View>
              </View>
              <View style={stylesLogin.lineSecond}>
                <Text style={stylesLogin.text}>Wassa-Enrollement</Text>
              </View>
            </Box>

            <Formik
              validationSchema={LoginYup}
              initialValues={{
                email: '', //-
                password: ''
              }}
              onSubmit={(values, actions) => {
                // console.log(values, 'values')
                actions.resetForm()
                connexionApp(values)
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
                <Box
                  p={2}
                  w="90%"
                  mx='auto'
                // flex={1}
                // bg="#fff"
                >
                  <Heading size="lg" color={themeColor} textAlign='center'>
                    Connexion
                  </Heading>
                  <Text textAlign='center' style={stylesLogin.text2}>
                    Heureux de vous revoir parmis nous.
                  </Text>

                  <VStack space={2} mt={5}>
                    <FormControl isRequired isInvalid={(errors.email && touched.email)}>
                      <FormControl.Label _text={{ color: themeColor, fontSize: 'sm', fontWeight: 600 }}>
                        Email
                      </FormControl.Label>
                      <Input
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        InputRightElement={
                          <Icon
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
                        style={stylesLogin.input} placeholder='wma@contact.ml' />
                      <View style={stylesLogin.alert}>
                        {(errors.email && touched.email) &&
                          <FormControl.ErrorMessage>
                            {errors.email}
                          </FormControl.ErrorMessage>
                        }
                      </View>
                    </FormControl>
                    <FormControl mb={5} isRequired isInvalid={(errors.password && touched.password)}>
                      <FormControl.Label _text={{ color: themeColor, fontSize: 'sm', fontWeight: 600 }}>
                        Mot de passe
                      </FormControl.Label>
                      <Input
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        style={stylesLogin.input}
                        type="password"
                        secureTextEntry={secureTextEntry}
                        placeholder='Mot de passe'
                        InputRightElement={
                          <Icon
                            onPress={() => {
                              setsecureTextEntry(!secureTextEntry)
                            }}
                            as={<MaterialIcons name={secureTextEntry === true ? 'visibility' : 'info'} />}
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
                      <View style={stylesLogin.alert}>
                        {(errors.password && touched.password) &&
                          <FormControl.ErrorMessage>
                            {errors.password}
                          </FormControl.ErrorMessage>
                        }
                      </View>
                      {/* <Link
              _text={{ fontSize: 'xs', fontWeight: '700', color: 'cyan.500' }}
              alignSelf="flex-end"
              mt={1}
            >
              Forget Password?
            </Link> */}
                    </FormControl>
                    <VStack space={2}>
                      <Button
                        // onPress={() => { navigation.navigate('Dashboard') }}
                        onPress={handleSubmit}
                        disabled={!isValid}
                        style={stylesLogin.btn}
                        _text={{ color: 'white', fontWeight: 'bold' }}
                        startIcon={<AntDesign name="login" size={24} color="#fff" />}
                      >
                        Continue
                      </Button>
                    </VStack>

                    <HStack justifyContent="center">
                      <View style={stylesLogin.bar}></View>
                    </HStack>
                  </VStack>
                </Box>
              )}

            </Formik>
            {/* --- */}
          </Box>
        </ScrollView>
      </ImageBackground>
    </NativeBaseProvider>
  );
}

export default withHOC(LoginComponent)

