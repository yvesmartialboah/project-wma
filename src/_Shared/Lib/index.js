/*
    Composant de centralisation des librairies
*/
// Package
import React, { useEffect } from 'react'
import * as reactNative from 'react-native'
import * as nativebase from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SplashScreen from 'react-native-splash-screen'
import * as Animatable from 'react-native-animatable'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import 'moment/locale/fr-ca'
import { Formik, useFormikContext, Form, Field } from 'formik'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import Toast from 'react-native-toast-message'
import SignatureCapture from 'react-native-signature-capture';
import DatePicker from 'react-native-datepicker'
import AwesomeLoading from 'react-native-awesome-loading';

// Flux de données Redux
import * as Redux from "react-redux";
import * as ReduxAction from '../../redux/actions';
import * as ReduxSelectors from '../../redux/selectors';
import { useIsConnected, NetworkConsumer } from 'react-native-offline';

// Media and Styles
import * as media from '../../_Shared/Image/ImageApp'
import * as colorApp from '../../_Shared/ThemeColor/ColorApp'

// ComponentShare
import HeaderComponent from '../Header/Header'

// DataBase
import * as RealmCrud from '../../database/db';
import realm from '../../database/db';


const librairies = {
    reactNative,
    nativebase,
    MaterialIcons,
    Ionicons,
    FontAwesome,
    MaterialCommunityIcons,
    AntDesign,
    SplashScreen,
    Animatable,
    DateTimePicker,
    moment,
    Formik,
    useFormikContext,
    Form, 
    Field,
    launchCamera,
    launchImageLibrary,
    Toast,
    SignatureCapture,
    Redux,
    ReduxAction,
    ReduxSelectors,

    media,
    colorApp,

    HeaderComponent,
    
    useIsConnected,
    NetworkConsumer,
    DatePicker,
    AwesomeLoading,

    realm,
    RealmCrud,
}

const withHOC = InitialComponent => ({ ...props }) => (
    <InitialComponent {...props} lib={librairies} />
);

export default withHOC;


