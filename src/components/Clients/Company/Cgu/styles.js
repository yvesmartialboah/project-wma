import { StyleSheet } from "react-native";
import { themeColor } from '../../../../_Shared/ThemeColor/ColorApp';

export const stylesSignature = StyleSheet.create({
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
    signature: {
        height: '50%',
        padding: 15,
        // borderColor: themeColor,
    },
    btnsave: {
        height: '20%', 
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-around',
        // backgroundColor: 'green',
    },
    previewImage: {
        height: '80%',
        resizeMode: 'contain',
    },
    textSign: {
        textAlign: 'center',
        top : 15,
        fontWeight: 'bold',
        fontSize: 14,
        color: 'green',
    }
});
