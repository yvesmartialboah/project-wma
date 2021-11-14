import { StyleSheet } from "react-native";
import {themeColor} from '../../_Shared/ThemeColor/ColorApp';

export const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        height: 80,
        resizeMode: 'contain',
    },
    subParent: {
        backgroundColor: "#000000c0",
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderColor: '#000000c0',
    },
    left: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        // marginTop: 20,
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
        height: '100%'
        // justifyContent: 'space-around',
    },
    iconleft: {
        left: 15,
        backgroundColor: '#c3b27f',
        fontSize: 5,
    },
    image: {
        // height: '100%'
    },
    round: {
        width: '100%',
        height: 55,
        // backgroundColor: '#c3b27f',
        // backgroundColor: '#c3b27f',
        // alignItems:'center', 
        // borderColor: '#c3b27f',
        borderColor: 'gray',
        borderLeftColor: '#fff',
        borderWidth: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        // borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    round2: {
        width: '100%',
        height: 50,
        // backgroundColor: '#c3b27f',
        // backgroundColor: '#c3b27f',
        // alignItems:'center', 
        // borderColor: '#c3b27f',
        borderColor: 'gray',
        borderLeftColor: '#fff',
        borderWidth: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        // borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    txt_white: {
        fontSize: 14,
        color: '#336e7b',
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: 10,
        marginTop: 5,
    },
    v1: {
        width: '2%',
        backgroundColor: themeColor,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    v1_1: {
        width: '2%',
        backgroundColor: 'indigo',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    v2: {
        width: '88%',
        height: 150,
    },
    v3: {
        width: '10%',
        justifyContent: 'center',
    },
    btn: {
        backgroundColor: themeColor,
        width: '45%'
    },
    btn2: {
        backgroundColor: 'indigo',
        width: '45%'
    },
});
