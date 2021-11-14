import { StyleSheet } from "react-native";
import {themeColor} from '../../../_Shared/ThemeColor/ColorApp';

export const stylesChoice = StyleSheet.create({
    parentNewIns: {
        marginTop: 10,
        marginRight: 20,
        flexDirection: 'row',
        height: 80,
        justifyContent: "space-between",
        alignItems: 'center',
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
    // radioChoice: {
    //     // marginTop: 10,
    //     // marginRight: 20,
    //     flexDirection: 'row',
    //     justifyContent: "center",
    //     alignItems: 'center',
    // },
    radioChoiceSon: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 40,
        paddingRight: 40,
        // backgroundColor: 'green',
    },
    actionForm: {
        marginTop: 15,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 10,
        paddingRight: 10,
        // backgroundColor: 'green',
    },
    phonestyle: {
        width: '100%',
        height: 72,
        borderStyle: 'dashed',
        borderColor: 'red',
    },
});
