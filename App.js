

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Additem from './screens/Additem';
import List from './screens/List';
import Login from './screens/Login';
import MobileLogin from './screens/MobileLogin';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App(){
  return(
   <GestureHandlerRootView style={{ flex: 1 }}>
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='MobileLogin' component={MobileLogin}/>
      <Stack.Screen name="Home" component={Home}  />
      <Stack.Screen name='Additem' component={Additem}/>
      <Stack.Screen name='List' component={List}/>
      

    </Stack.Navigator>
   </NavigationContainer>
   </GestureHandlerRootView>

  );
}

export default App;


