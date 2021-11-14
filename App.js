import React from 'react';
import { Provider } from "react-redux";
import store from "./src/redux/store";
import NavigationApp from './src/navigation.nav';
import Toast from 'react-native-toast-message';
import { NetworkProvider } from 'react-native-offline';

export default function App() {
  return (
    <Provider store={store}>
      <NetworkProvider>
        <NavigationApp style="auto" />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NetworkProvider>
    </Provider>
  );
}