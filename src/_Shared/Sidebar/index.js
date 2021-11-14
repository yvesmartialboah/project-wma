import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon
} from 'native-base';
import { themeColor } from '../ThemeColor/ColorApp';

import { backgroungImage } from '../Image/ImageApp';

export default function SidebarComponent({ props, navigation }) {
  const { height } = Dimensions.get('window');
  return (
    <ImageBackground source={backgroungImage} style={{ height }}>
      <NativeBaseProvider>
        <DrawerContentScrollView {...props} safeArea>
          <VStack space={6} my={2} mx={1}>
            <Box px={4}>
              <TouchableOpacity onPress={() => {
                navigation.toggleDrawer()
              }} style={styles.close}>
                <AntDesign name="closecircleo" size={24} color="#d64541" />
              </TouchableOpacity>
              {/* <Text bold color="gray.700">Kramo</Text>
              <Text fontSize={14} mt={1} color="gray.500" fontWeight={500}>kramo@gmail.com</Text> */}
            </Box>
            <VStack divider={<Divider />} space={4}>
              {/* <VStack space={3}>
              {props.state.routeNames.map((name, index) => (
                <Pressable
                  px={5}
                  py={3}
                  rounded="md"
                  bg={index === props.state.index ? 'rgba(6, 182, 212, 0.1)' : 'transparent'}
                  onPress={(event) => {
                    props.navigation.navigate(name);
                  }}
                >
                  <HStack space={7} alignItems="center">
                    <Icon
                      color={index === props.state.index ? 'primary.500' : 'gray.500'}
                      size={5} as={<MaterialCommunityIcons name={getIcon(name)} />} />
                    <Text fontWeight={500} color={index === props.state.index ? 'primary.500' : 'gray.700'}>
                      {name}
                    </Text>
                  </HStack>
                </Pressable>
              ))}
            </VStack> */}
              <VStack space={5}>
                <Text fontWeight={500} fontSize={16} fontWeight={'bold'} px={5} color={{ themeColor }}>Menu</Text>
                <VStack space={3}>
                  <Pressable
                    px={5}
                    py={3}
                    onPress={() => {
                      navigation.navigate('Dashboard')
                    }}
                  >
                    <HStack space={7} alignItems="center">
                      <Icon
                        color={themeColor}
                        // color='gray.500'
                        size={5} as={<MaterialCommunityIcons name="home-export-outline" size={24} color={themeColor} />} />
                      <Text color='gray.700' fontWeight={500}>
                        Dashboard
                      </Text>
                    </HStack>
                  </Pressable>

                  <Pressable
                    px={5}
                    py={2}
                    onPress={() => {
                      navigation.navigate('Stats', {
                        reload: {
                          date: new Date()
                        }
                      })
                    }}
                  >
                    <HStack space={7} alignItems="center">
                      <Icon
                        color={themeColor}
                        size={5} as={<AntDesign name="barschart" size={24} color={themeColor} />} />
                      <Text color='gray.700' fontWeight={500}>
                        Stats/offline
                      </Text>
                    </HStack>
                  </Pressable>

                  <Pressable
                    px={5}
                    py={2}
                    onPress={() => {
                      navigation.navigate('StatsPeriode', {
                        reload: {
                          date: new Date()
                        }
                      })
                    }}
                  >
                    <HStack space={7} alignItems="center">
                      <Icon
                        color={themeColor}
                        size={5} as={<AntDesign name="barschart" size={24} color={themeColor} />} />
                      <Text color='gray.700' fontWeight={500}>
                        Stats/Période
                      </Text>
                    </HStack>
                  </Pressable>

                  <Pressable
                    px={5}
                    py={2}
                    onPress={() => {
                      navigation.navigate('Transferts', {
                        reload: {
                          date: new Date()
                        }
                      })
                    }}
                  >
                    <HStack space={7} alignItems="center">
                      <Icon
                        color={themeColor}
                        size={5} as={<AntDesign name="sync" size={24} color={themeColor} />} />
                      <Text color='gray.700' fontWeight={500}>
                        Transfert de données
                      </Text>
                    </HStack>
                  </Pressable>


                  <Pressable
                    px={5}
                    py={3}
                  >
                    <HStack space={7} alignItems="center">
                      <Icon
                        color={themeColor}
                        size={5} as={<AntDesign name="logout" size={24} color={themeColor} />} />
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Login')
                        }}
                      >
                        <Text fontWeight={500} color='gray.700'>
                          Déconnexion
                        </Text>
                      </TouchableOpacity>
                    </HStack>
                  </Pressable>
                </VStack>
              </VStack>
            </VStack>
          </VStack>
        </DrawerContentScrollView>
      </NativeBaseProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    // backgroundColor: 'red'
  },
});
