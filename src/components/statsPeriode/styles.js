import { StyleSheet } from "react-native";
import { themeColor } from '../../_Shared/ThemeColor/ColorApp';

export const stylesDashboard = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        marginTop: 30,
    },
    parentPub: {
        // backgroundColor: 'red',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        height: 100,
        borderRadius: 15,
        borderColor: themeColor,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    left: {
        alignItems: 'flex-start',
        width: '20%',
        // backgroundColor: 'red'
    },
    right: {
        alignItems: 'center',
        width: '60%',
        // backgroundColor: 'red'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stack: {
        width: '80%',
        justifyContent: 'space-around',
    },
    iconleft: {
        left: 15,
        backgroundColor: themeColor,
        fontSize: 5,
    },
    image: {
        // height: '100%'
    },
    touch: {
        flexDirection: 'row',
        width: '100%',
        borderBottomColor: themeColor,
        borderBottomWidth: 1,
        padding: 5,
        borderStyle : 'dashed',
        // backgroundColor: 'red',
    },
    descT: {
        fontSize: 16,
        fontWeight: 'bold',
        left: 10,
        top: 3
    },
    parentinputNum: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        // height: 100,
        // backgroundColor: 'green',
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
});
