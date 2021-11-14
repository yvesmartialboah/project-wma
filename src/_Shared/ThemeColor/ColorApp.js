// Color App - Thème
import { extendTheme } from 'native-base'
import { Dimensions } from 'react-native'

const themeColor = '#1E3D76' // Couleur de l'application

const statusBarColor = '#1E3D76' // Couleur de la status Bar

const themeFormLogin = extendTheme({
  components: {
    Input: {
      baseStyle: {
        borderColor: themeColor,
        _hover: {
          borderColor: '#fff'
        }
      },
      defaultProps: {},
      variants: {},
      sizes: {},
    },
    Button: {
      baseStyle: {},
      defaultProps: {},
      variants: {},
      sizes: {},
    }
  }
}) // Couleur de formulaire

const themeChoiceProcess = extendTheme({
  components: {
    Input: {
      baseStyle: {
        borderColor: themeColor,
        borderStyle: 'dashed',
        height: 16,
        _hover: {
          borderColor: '#fff'
        }
      },
      defaultProps: {},
      variants: {},
      sizes: {},
    },
    Button: {
      baseStyle: {},
      defaultProps: {},
      variants: {},
      sizes: {},
    }
  }
}) // Couleur de formulaire

export {
  themeColor,
  statusBarColor,
  themeFormLogin,
  themeChoiceProcess
}