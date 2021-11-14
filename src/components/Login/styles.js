import { StyleSheet } from "react-native";
import {themeColor} from '../../_Shared/ThemeColor/ColorApp';

export const stylesLogin = StyleSheet.create({
    scrollView: {
        height:'100%', 
        backgroundColor: '#fff'
    },
    imgBackground: {
        height:'100%'
    },
    line: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lineSecond: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
    },
    text: {
        color: '#abb5be',
        fontWeight: 'bold',
        fontSize: 16,
    },
    text2: {
        color: '#abb5be',
        fontWeight: 'bold',
        fontSize: 13,
    },
    input: {
        color: '#c3b27f',
    },
    btn: {
        backgroundColor: themeColor,
    },
    bar: {
        backgroundColor: '#c3b27f',
        top: 40,
        width: 80,
        borderRadius: 20,
        height: 4,
    },
});
