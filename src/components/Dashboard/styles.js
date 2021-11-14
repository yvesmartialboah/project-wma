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
        width: '70%',
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
        width: '48%',
        // backgroundColor: 'red',
    },
});
