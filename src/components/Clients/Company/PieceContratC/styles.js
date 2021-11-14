import { StyleSheet } from "react-native";
import {themeColor} from '../../../../_Shared/ThemeColor/ColorApp';

export const stylesPieceContratP = StyleSheet.create({
    Vtitle: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        justifyContent: 'center',
    },
    V2title: {
        width: '60%',
        borderColor: themeColor,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'dashed',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    },
    radioChoiceSon: {
        marginTop: 5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 30,
        paddingRight: 30,
        // backgroundColor: 'green',
    },
    parentinputNum: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        // height: 100,
        // backgroundColor: 'green',
    },
    soninputNum: {
        width: '70%',
    },
    radioChoiceSonSex: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 40,
        paddingRight: 40,
        // backgroundColor: 'green',
    },
    btn: {
        backgroundColor: themeColor,
    },
    text_date: {
        fontSize: 14,
        fontWeight: 'bold',
        color: themeColor,
    },
    alert: {
        alignItems: 'center'
    },
    imgV: {
        flexDirection: 'row',
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgV2: {
        width: '80%',
        height: 150,
        borderColor: themeColor,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img_frame: {
        width: '100%',
        height: 140,
        resizeMode: 'contain'
    }
});
