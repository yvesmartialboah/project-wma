import React from 'react'
import { stylesHeader } from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {View} from 'react-native'
import {Heading, Icon, IconButton,} from 'native-base'
import {themeColor} from '../../_Shared/ThemeColor/ColorApp'

/*
* Paramètre utilisé pour le menu
* #Icon de MaterialIcons 'keyboard-backspace' par defaut ou  'menu' (A titre d'explication)
* #title Titre du composant 
* #action prends 'Menu' ou 'Retour' 
* #color Couleur de l'icone (Facultatif)
* #bg Background Couleur de l'icone (Facultatif)
*/

const HeaderComponent = ({ navigation: {goBack, toggleDrawer}, lib, action, color, title, bg }) => {
    return (
        <View style={stylesHeader.parent}>
            <View style={stylesHeader.left}>
                <IconButton
                    onPress={() => { action == 'Retour' ? goBack() : toggleDrawer() }}
                    style={[stylesHeader.iconleft, {backgroundColor : bg == null ? themeColor : bg}]}
                    icon={<Icon size="25" as={action == 'Retour' ? <MaterialIcons  name='keyboard-backspace' /> : <MaterialIcons  name='menu' />}
                        color={color == null ? '#fff' : color} />}
                />
            </View>
            <View style={stylesHeader.right}>
                <Heading size="lg" color='#35424a' textAlign='center'>
                    {title}
                </Heading>
            </View>
        </View>
    )
}

// Exemple :  <HeaderComponent navigation={navigation} title={'Bonjour Yves'} action={'Retour'} color={'red'} bg={'transparent'}/>

export default HeaderComponent;
