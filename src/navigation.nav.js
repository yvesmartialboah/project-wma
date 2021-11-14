import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Component Shared
import SidebarComponent from './_Shared/Sidebar/index';

// Pages Parent
import DashboardComponent from './components/Dashboard/index';
import LoginComponent from './components/Login/LoginComponent';
import StatsComponent from './components/Stats/Stats.component';
import StatsPeriodeComponent from './components/statsPeriode/statsPeriode.component';
import TransfertsComponent from './components/Transferts/Transferts.component';
import EditPasswordComponent from './components/EditPassword/EditPassword.component'
import ChoiceProcessComponent from './components/Clients/ChoiceProcess/ChoiceProcess.component'
import AddRechargeComponent from './components/Rechargement/add.component' // OLD
import RechargePeriodeComponent from './components/RecharchePeriode/recharchePeriode.component' // OLD

/* ------------ Online ------------*/

// Pages - Process Company
import InfoGeneralComponent from './components/Clients/Company/InfoGeneral/InfoGeneral.component'
import CguComponent from './components/Clients/Company/Cgu/cgu.component'
import PieceContratCompanyComponent from './components/Clients/Company/PieceContratC/PieceContrat.component'
import SitGeoContactCompanyComponent from './components/Clients/Company/SitGeoContact/SitGeoContactP.component'
import RecapInfoCompanyComponent from './components/Clients/Company/RecapInfoParticular/RecapInfoParticular.component'

// Pages - Process Particular
import InfoGeneralParticularComponent from './components/Clients/Particular/InfoGeneralP/InfoGeneral.component'
import SitGeoContactParticularComponent from './components/Clients/Particular/SitGeoContact/SitGeoContactP.component'
import PieceContratParticularComponent from './components/Clients/Particular/PieceContratP/PieceContratP.component'
import RecapInfoParticularComponent from './components/Clients/Particular/RecapInfoParticular/RecapInfoParticular.component'

/* ----------- Offline ----------*/

// Pages - Process Particular
import InfoGeneralParticularOfflineComponent from './components/ClientsOffline/ParticularOffline/InfoGeneralP/InfoGeneral.component'
import SitGeoContactParticularOfflineComponent from './components/ClientsOffline/ParticularOffline/SitGeoContact/SitGeoContactP.component'
import PieceContratParticularOfflineComponent from './components/ClientsOffline/ParticularOffline/PieceContratP/PieceContratP.component'
import RecapInfoParticularOfflineComponent from './components/ClientsOffline/ParticularOffline/RecapInfoParticular/RecapInfoParticular.component'

// Pages - Process Company
import InfoGeneralCompanyOffComponent from './components/ClientsOffline/Company/InfoGeneral/InfoGeneralCompanyOff.component'
import SitGeoContactCompanyOffComponent from './components/ClientsOffline/Company/SitGeoContact/SitGeoContactOff.component'
import PieceContratCompanyOffComponent from './components/ClientsOffline/Company/PieceContrat/PieceContrat.component'
import RecapInfoCompanyOffComponent from './components/ClientsOffline/Company/RecapInfoParticular/RecapInfoParticular.component'



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationApp = ({ navigation }) => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Login"
      drawerContent={props => <SidebarComponent {...props} />}
    >
      {/* ----------- Section Parent ----------- */}
      <Drawer.Screen options={{ swipeEnabled: false }} name="Login" component={LoginComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="Stats" component={StatsComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="Transferts" component={TransfertsComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="StatsPeriode" component={StatsPeriodeComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="EditPassword" component={EditPasswordComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="ChoiceProcess" component={ChoiceProcessComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="AddRecharge" component={AddRechargeComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="RechargePeriode" component={RechargePeriodeComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="Dashboard" component={DashboardComponent} options={{ headerLeft: () => navigation.toggleDrawer() }} />

      {/* ------------ Section Online ------------- */}

      {/* Process Company */}
      <Drawer.Screen options={{ swipeEnabled: false }} name="Cgu" component={CguComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="InfoGeneral" component={InfoGeneralComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="RecapInfoCompany" component={RecapInfoCompanyComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="PieceContratCompany" component={PieceContratCompanyComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="SitGeoContactCompany" component={SitGeoContactCompanyComponent} />

      {/* Process Particular */}
      <Drawer.Screen options={{ swipeEnabled: false }} name="InfoGeneralParticular" component={InfoGeneralParticularComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="SitGeoContactParticular" component={SitGeoContactParticularComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="PieceContratParticular" component={PieceContratParticularComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="RecapInfoParticular" component={RecapInfoParticularComponent} />


      {/* ---------- Section Offline ------------ */}

      {/* Process Particular */}
      <Drawer.Screen options={{ swipeEnabled: false }} name="InfoGeneralParticularOffline" component={InfoGeneralParticularOfflineComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="SitGeoContactParticularOffline" component={SitGeoContactParticularOfflineComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="PieceContratParticularOffline" component={PieceContratParticularOfflineComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="RecapInfoParticularOffline" component={RecapInfoParticularOfflineComponent} />

      {/* Process Company */}
      <Drawer.Screen options={{ swipeEnabled: false }} name="InfoGeneralCompanyOff" component={InfoGeneralCompanyOffComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="SitGeoContactCompanyOff" component={SitGeoContactCompanyOffComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="PieceContratCompanyOff" component={PieceContratCompanyOffComponent} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="RecapInfoCompanyOff" component={RecapInfoCompanyOffComponent} />



      {/*  */}
    </Drawer.Navigator>
  </NavigationContainer>
);

export default NavigationApp;


/*
<Stack.Navigator
  screenOptions={{
    headerShown: false
  }}
>
  <Stack.Screen name="route-name" component={ScreenComponent} />
</Stack.Navigator>
*/