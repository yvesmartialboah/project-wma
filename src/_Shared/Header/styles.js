import { StyleSheet } from "react-native";
import {themeColor} from '../../../_Shared/ThemeColor/ColorApp';

export const stylesHeader = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        marginTop: 30,
    },
    left: {
        alignItems: 'flex-start',
        width: '20%',
        // backgroundColor: 'red'
    },
    right: {
        alignItems: 'center',
        width: '70%',
        // backgroundColor: 'red'
    },
    iconleft: {
        left: 15,
        // backgroundColor: themeColor,
        fontSize: 5,
    },
});
