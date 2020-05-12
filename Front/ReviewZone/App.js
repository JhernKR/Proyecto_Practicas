import 'react-native-gesture-handler';
import * as React from 'react';

import {ScrollView, View} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LogIn from './Screens/LogIn.js';
import Register from './Screens/Register.js';
import Reviews from './Screens/Reviews.js';
import DetallesSerie from './Screens/DetallesSerie.js';
import DetallesPelicula from './Screens/DetallesPelicula.js';
import DetallesAnime from './Screens/DetallesAnime.js';
import DetallesVideojuego from './Screens/DetallesVideojuego.js';
import DetallesManga from './Screens/DetallesManga.js';
import Add from './Screens/Add.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="LogIn" component={LogIn} options={{headerShown:false}}/>
        <Stack.Screen name="Reviews" component={Reviews} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        <Stack.Screen name="DetallesSerie" component={DetallesSerie} options={{headerShown:false}}/>
        <Stack.Screen name="DetallesPelicula" component={DetallesPelicula} options={{headerShown:false}}/>
        <Stack.Screen name="DetallesAnime" component={DetallesAnime} options={{headerShown:false}}/>
        <Stack.Screen name="DetallesVideojuego" component={DetallesVideojuego} options={{headerShown:false}}/>
        <Stack.Screen name="DetallesManga" component={DetallesManga} options={{headerShown:false}}/>
        <Stack.Screen name="Add" component={Add} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

