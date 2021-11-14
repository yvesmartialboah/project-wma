// Liste des Rechargements par Periode
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {stylesDashboard} from './styles';
// ComponentShare
import withHOC from '../../_Shared/Lib/index';

const RechargePeriodeComponent = ({navigation, lib, route}) => {
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
    Toast,
    RealmCrud,
    DatePicker,
    AwesomeLoading,
    Redux,
    ReduxAction,
    ReduxSelectors,
  } = lib;

  const {useSelector, useDispatch} = Redux;

  const {updateCleanCompany} = ReduxAction;

  const {getCompany, getuser} = ReduxSelectors;

  const {queryAllTodoParticular, queryAllTodoTodoCompany} = RealmCrud;

  const {
    StyleSheet,
    View,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Dimensions,
    ImageBackground,
  } = reactNative;

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
  } = nativebase;

  const {backgroungImage, logo} = media;

  const {themeColor, themeFormLogin, statusBarColor} = colorApp;

  const {height} = Dimensions.get('window');
  const data_user = useSelector(getuser);

  const DATA = [
    {
      V_ID: '1',
      V_DATEDEPART: '2021-05-20',
      V_DATEARRIVEE: '0000-00-00',
      V_HEUREDEP: '07:30:00',
      V_HEUREARV: '05:30:00',
      V_VILLEDEPART: 'XXX000',
      V_VILLEARRIVE: 'XXX000',
      V_VILLEESCALE1: 'XXX000',
      V_VILLEESCALE2: 'XXX000',
      V_VILLEESCALE3: 'XXX000',
      V_VILLEESCALE4: null,
      V_VILLEESCALE5: null,
      V_DISTANCE: '600',
      C_ID: '1',
      P_ID: '6',
      C_IM: 'IM1CI',
      P_NOMP: 'JEAN KOUASSI',
    },
    {
      V_ID: '2',
      V_DATEDEPART: '2021-05-20',
      V_DATEARRIVEE: '0000-00-00',
      V_HEUREDEP: '07:30:00',
      V_HEUREARV: '05:30:00',
      V_VILLEDEPART: 'XXX000',
      V_VILLEARRIVE: 'XXX000',
      V_VILLEESCALE1: 'XXX000',
      V_VILLEESCALE2: 'XXX000',
      V_VILLEESCALE3: 'XXX000',
      V_VILLEESCALE4: null,
      V_VILLEESCALE5: null,
      V_DISTANCE: '600',
      C_ID: '1',
      P_ID: '6',
      C_IM: '2I001CI',
      P_NOMP: 'Magic Design',
    },
    {
        V_ID: '3',
        V_DATEDEPART: '2021-05-20',
        V_DATEARRIVEE: '0000-00-00',
        V_HEUREDEP: '07:30:00',
        V_HEUREARV: '05:30:00',
        V_VILLEDEPART: 'XXX000',
        V_VILLEARRIVE: 'XXX000',
        V_VILLEESCALE1: 'XXX000',
        V_VILLEESCALE2: 'XXX000',
        V_VILLEESCALE3: 'XXX000',
        V_VILLEESCALE4: null,
        V_VILLEESCALE5: null,
        V_DISTANCE: '600',
        C_ID: '1',
        P_ID: '6',
        C_IM: '3M1C3',
        P_NOMP: 'JEAN NOEL',
      },
  ];

  const [listDATA, setlistDATA] = useState(DATA);

  const _renderItem = ({item, i}) => {
    return (
        <Stack key={i} space={5} mt={5} justifyContent="center" alignItems="center">
          <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('BuyTicket', {
                //   voyage : {
                //     voyage_id : item.V_ID,
                //     V_VILLEDEPART: item.V_VILLEDEPART,
                //     V_VILLEARRIVE: item.V_VILLEARRIVE
                //   }
                // })
              }}
              style={styles.round}>
              <Text style={styles.txt_white}>{item.C_IM}</Text>
              <Text style={styles.txt_white_sub}>Client : {item.P_NOMP}</Text>
              <Text style={styles.txt_white_sub2}>
                De {item.V_VILLEDEPART} à {item.V_VILLEARRIVE} -{' '}
                {item.V_DISTANCE}
              </Text>
              <Text style={styles.txt_white_sub2}>
                XXXXXX : {item.V_HEUREDEP} - XXXXX : {item.V_HEUREARV}
              </Text>
              <Text style={styles.txt_white_sub2}>
                XXXX : {item.V_VILLEESCALE1} - {item.V_VILLEESCALE2} -{' '}
                {item.V_VILLEESCALE3}
              </Text>
              <Text style={styles.txt_white_sub2}>
                XXXX : {item.V_VILLEESCALE4} - {item.V_VILLEESCALE5}
              </Text>

              {/* <View style={styles.parent_white_sub}>
                <View style={styles.View_white_sub3}>
                  <AntDesign name="rightcircleo" size={20} color={'#fff'} style={styles.icon_sub3} />
                </View>
                <View style={styles.View_white_sub4}>
                  <Text style={styles.txt_white_sub3}>
                    Date de départ : {item.V_DATEDEPART}
                  </Text>
                </View>
              </View> */}
            </TouchableOpacity>
          </Stack>
        </Stack>
    );
  };

  useEffect(() => {
    // console.log(data_user[0].token, 'data_user[0].token')
    setLoader(false);
    setdateDebut(null);
    setdateFin(null);
    setDate_stable_del(null);
    setDate_stable_Ex(null);
    setNombre_total(0);
    setNb_entreprise_valide(0);
    setNb_entreprise_non_valide(0);
    setNb_client_valide(0);
    setNb_client_non_valide(0);
  }, [route.params.reload.date]);

  // Date
  const [date, setDate] = useState(new Date());
  const [date_stable_del, setDate_stable_del] = useState(new Date());
  const [date_stable_Ex, setDate_stable_Ex] = useState(new Date());
  const [dateFin, setdateFin] = useState(null);
  const [dateDebut, setdateDebut] = useState(null);
  const [loader, setLoader] = useState(false);

  // Stat
  const [nombre_total, setNombre_total] = useState(0);
  const [nb_entreprise_valide, setNb_entreprise_valide] = useState(0);
  const [nb_entreprise_non_valide, setNb_entreprise_non_valide] = useState(0);
  const [nb_client_valide, setNb_client_valide] = useState(0);
  const [nb_client_non_valide, setNb_client_non_valide] = useState(0);

  const featureLoad = () => {
    setLoader(false);
  };

  const [show, setShow] = useState(false);
  const [showEx, setshowEx] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const onChange_Fin = (event, selectedValue) => {
    // moment().format('Y-M-D', event)
    setdateFin(event);
    setshowEx(false);
  };
  const onChange_Debut = (event, selectedValue) => {
    // moment().format('Y-M-D', event)
    setdateDebut(event);
    setShow(false);
  };

  const showDatepickerDel = () => {
    setShow(true);
  };

  const showDatepickerEx = () => {
    setshowEx(true);
  };
  // Date

  const viewStatPeriode = () => {
    if (dateDebut != null && dateFin != null) {
      console.log(dateDebut, 'dateDebut');
      console.log(dateFin, 'dateFin');
      // let debut = '"' + dateDebut + '"';
      // let fin = '"' + dateFin + '"';
      consult(dateDebut, dateFin);
    } else {
      Toast.show({
        type: 'info',
        text1: 'Attention !!!',
        text2: 'Veuillez renseigner les dates svp.',
        position: 'top',
        visibilityTime: 4000,
        autoHide: true,
      });
    }
  };

  const consult = (dateDebut, dateFin) => {
    setLoader(true);
    // const url = 'https://loving-bhaskara.161-97-120-236.plesk.page/kankumussa/api/stat?token=' + data_user[0].token +
    // const url = 'https://loving-bhaskara.161-97-120-236.plesk.page/kankumussa/api/stat';
    const url =
      'https://loving-bhaskara.161-97-120-236.plesk.page/kankumussa/api/stat2/' +
      data_user[0].id +
      '/' +
      dateDebut +
      '/' +
      dateFin;
    // const url = 'https://loving-bhaskara.161-97-120-236.plesk.page/kankumussa/api/stat?firstuser=' + data_user[0].id +
    // '&debut=' + dateDebut + '&fin=' + dateFin; //server Plesk Us
    console.log(url, 'url');
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({
      //     debut: dateDebut, //- VU
      //     fin: dateFin,
      //     firstuser: data_user[0].id
      // })
    })
      .then(responses => responses.json())
      .then(response => {
        featureLoad();
        console.log(response, 'response');
        // console.log(typeof response, 'responsex')

        if (response.code == 400) {
          Toast.show({
            type: 'info',
            text1: 'Aucune données !!!',
            text2: 'Enregistrées sur cette période.',
            position: 'top',
            visibilityTime: 4000,
            autoHide: true,
          });
        }
        if (response.code == 200) {
          Toast.show({
            type: 'success',
            text1: 'Félicitation 🎉🎊',
            // text2: '',
            position: 'top',
            visibilityTime: 4000,
            autoHide: true,
          });
          setNombre_total(response.data[0].nbr_total);
          setNb_entreprise_valide(response.data[0].nb_entreprise_valide);
          setNb_entreprise_non_valide(
            response.data[0].nb_entreprise_non_valide,
          );
          setNb_client_valide(response.data[0].nb_client_valide);
          setNb_client_non_valide(response.data[0].nb_client_non_valide);
        }
        // else {
        //     Toast.show({
        //         type: 'error',
        //         text1: "Erreur",
        //         text2: "Veuillez réessayer svp.",
        //         position: 'top',
        //         visibilityTime: 4000,
        //         autoHide: true,
        //     })
        // }
        // console.log(typeof response.data, 'response data')
        // console.log(response.data.nom, 'response data nom')
        // console.log(response.status, 'response status')
      })
      .catch(error => {
        featureLoad();
        console.log(error, 'erreur');
      });
  };

  return (
    <ScrollView style={{height}}>
      <AwesomeLoading
        indicatorId={5}
        size={50}
        isActive={loader}
        text="Chargement..."
      />
      <NativeBaseProvider>
        <Stack space={5} mt={0} height={'100%'}>
          <HeaderComponent
            navigation={navigation}
            title={'Reporting Clients'}
            action={'Retour'}
          />

          {/* --- pub --- */}
          <View style={stylesDashboard.parentPub}>
            <Heading size="lg" color="#35424a" textAlign="center">
              Rechargements/Période
            </Heading>
          </View>
          {/* --- pub --- */}

          {/* Input 1 */}
          <View>
            {/* Date de début */}
            <FormControl>
              {/* Date de Délivrance */}
              <View style={stylesDashboard.radioChoiceSonSex}>
                <View>
                  <Text>Date de Début</Text>
                </View>
              </View>
              <View style={stylesDashboard.parentinputNum}>
                <View>
                  <IconButton
                    onPress={() => {
                      showDatepickerDel();
                    }}
                    style={stylesDashboard.iconDate}
                    icon={
                      <Icon
                        size="10"
                        as={
                          <MaterialIcons
                            name="date-range"
                            size={34}
                            color="#fff"
                          />
                        }
                        color={themeColor}
                      />
                    }
                  />
                </View>
                <View style={stylesDashboard.dateinputNum}>
                  {show ? (
                    <DatePicker
                      style={{width: 200}}
                      date={date_stable_del}
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
                          marginLeft: 0,
                        },
                        dateInput: {
                          marginLeft: 36,
                        },
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={param => {
                        console.log(param, 'param');
                        setDate_stable_del(param);
                        // setDate(param)
                        // console.log(param.nativeEvent.timestamp, 'param')
                        onChange_Debut(param);
                      }}
                    />
                  ) : (
                    <Text style={stylesDashboard.text_date}>
                      {' '}
                      {dateDebut == null ? '-----' : date_stable_del}{' '}
                    </Text>
                  )}
                </View>
              </View>
            </FormControl>
          </View>

          {/* Input 1 */}

          {/* Input 2 */}
          <View>
            {/* Date de début */}
            <FormControl>
              {/* Date de Délivrance */}
              <View style={stylesDashboard.radioChoiceSonSex}>
                <View>
                  <Text>Date de Fin</Text>
                </View>
              </View>
              <View style={stylesDashboard.parentinputNum}>
                <View>
                  <IconButton
                    onPress={() => {
                      showDatepickerEx();
                    }}
                    style={stylesDashboard.iconDate}
                    icon={
                      <Icon
                        size="10"
                        as={
                          <MaterialIcons
                            name="date-range"
                            size={34}
                            color="#fff"
                          />
                        }
                        color={themeColor}
                      />
                    }
                  />
                </View>
                <View style={stylesDashboard.dateinputNum}>
                  {showEx ? (
                    <DatePicker
                      style={{width: 200}}
                      date={date_stable_Ex}
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
                          marginLeft: 0,
                        },
                        dateInput: {
                          marginLeft: 36,
                        },
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={param => {
                        console.log(param, 'param2');
                        setDate_stable_Ex(param);
                        // setDate(param)
                        // console.log(param.nativeEvent.timestamp, 'param')
                        onChange_Fin(param);
                        setFieldValue('date_expiration', param);
                      }}
                    />
                  ) : (
                    <Text style={stylesDashboard.text_date}>
                      {' '}
                      {dateFin == null ? '-----' : date_stable_Ex}{' '}
                    </Text>
                  )}
                </View>
              </View>
            </FormControl>
          </View>

          {/* Input 2 */}

          {/* btn  */}
          <Box
            p={2}
            w="75%"
            mx="auto"
            // flex={1}
            // bg="#fff"
          >
            <VStack space={2}>
              <Button
                // disabled={!isValid}
                onPress={() => {
                  viewStatPeriode();
                  // navigation.navigate('')
                }}
                style={stylesDashboard.btn}
                _text={{color: 'white', fontWeight: 'bold'}}
                startIcon={
                  <MaterialIcons name="preview" size={24} color="#fff" />
                  // <AntDesign name="preview" size={24} color="#fff" />
                }>
                Afficher
              </Button>
            </VStack>
          </Box>
          {/* btn  */}
    
          {/* {listDATA.length == 0 ? (
            <Text>NoData</Text>
          ) : (
            <FlatList
            //   style={{backgroundColor: 'red',}}
              data={listDATA}
              renderItem={_renderItem}
              keyExtractor={item => item.V_ID}
              // keyExtractor={item => item.V_ID.toString()}
              // ItemSeparatorComponent = {() => <View style={stylesDashboard.separator} />}
            />
          )} */}

            {listDATA != null && (
                listDATA.map((item, i) => {
                    return(
                        // console.log(data)
                    // _renderItem(data,i)
                    <Stack key={i} space={5} mt={5} justifyContent="center" alignItems="center">
                    <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                      <TouchableOpacity
                        onPress={() => {
                          // navigation.navigate('BuyTicket', {
                          //   voyage : {
                          //     voyage_id : item.V_ID,
                          //     V_VILLEDEPART: item.V_VILLEDEPART,
                          //     V_VILLEARRIVE: item.V_VILLEARRIVE
                          //   }
                          // })
                        }}
                        style={styles.round}>
                        <Text style={styles.txt_white}>{item.C_IM}</Text>
                        <Text style={styles.txt_white_sub}>Client : {item.P_NOMP}</Text>
                        <Text style={styles.txt_white_sub2}>
                          De {item.V_VILLEDEPART} à {item.V_VILLEARRIVE} -{' '}
                          {item.V_DISTANCE}
                        </Text>
                        <Text style={styles.txt_white_sub2}>
                          XXXXXX : {item.V_HEUREDEP} - XXXXX : {item.V_HEUREARV}
                        </Text>
                        <Text style={styles.txt_white_sub2}>
                          XXXX : {item.V_VILLEESCALE1} - {item.V_VILLEESCALE2} -{' '}
                          {item.V_VILLEESCALE3}
                        </Text>
                        <Text style={styles.txt_white_sub2}>
                          XXXX : {item.V_VILLEESCALE4} - {item.V_VILLEESCALE5}
                        </Text>
          
                        {/* <View style={styles.parent_white_sub}>
                          <View style={styles.View_white_sub3}>
                            <AntDesign name="rightcircleo" size={20} color={'#fff'} style={styles.icon_sub3} />
                          </View>
                          <View style={styles.View_white_sub4}>
                            <Text style={styles.txt_white_sub3}>
                              Date de départ : {item.V_DATEDEPART}
                            </Text>
                          </View>
                        </View> */}
                      </TouchableOpacity>
                    </Stack>
                  </Stack>
                    )
                }))
            }

          <Box></Box>
        </Stack>
      </NativeBaseProvider>
    </ScrollView>
  );
};

const themeColor = '#2D4F6B';
const styles = StyleSheet.create({
    parent: {
      flexDirection: 'row',
      marginTop: 30,
    },
    left: {
      alignItems: 'flex-start',
      width: '20%',
      // backgroundColor: 'red'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    stack: {
      width: '88%',
    //   height: '100%' // - nice bugg
      // justifyContent: 'space-around',
    },
    iconleft: {
      left: 15,
      backgroundColor: themeColor,
      // backgroundColor: '#c3b27f',
      fontSize: 5,
    },
    image: {
      // height: '100%'
    },
    round: {
      width: '100%',
      height: 150,
      backgroundColor: themeColor,
      // backgroundColor: '#c3b27f',
      // alignItems:'center', 
      borderColor: '#c3b27f',
      borderWidth: 1,
      borderRadius: 10
    },
    txt_white: {
      fontSize: 14,
      color: '#c3b27f',
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 10,
      marginTop: 5,
    },
    txt_white_sub: {
      marginLeft: 10,
      fontSize: 13,
      color: 'white',
      fontWeight: 'bold',
    },
    txt_white_sub2: {
      marginLeft: 10,
      marginTop: 5,
      fontSize: 11,
      color: 'white',
      fontWeight: 'bold',
    },
    txt_white_sub3: {
      textAlign: 'right',
      marginRight: 10,
      fontSize: 11,
      color: 'white',
      fontWeight: 'bold',
    },
    icon_sub3: {
      marginRight: 10,
      textAlign: 'right',
    },
    parent_white_sub: {
      height: 100,
      // alignItems: 'space-around',
      bottom: 12,
  
      // backgroundColor: 'red',
    },
    View_white_sub3: {
      height: 35,
      bottom: 40,
    },
    View_white_sub4: {
      height: 30,
      bottom: 5,
    },
  });
  

export default withHOC(RechargePeriodeComponent);
