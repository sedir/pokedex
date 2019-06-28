import React from 'react';
import HomeScreen from './src/screens/home';
import PokemonScreen from './src/screens/pokemon';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Header from './src/components/header';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Pokemon: {
    screen: PokemonScreen
  }
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
      height: 70,
    },
    headerBackTitle: 'Voltar',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitle: <Header />
  },
});

export default createAppContainer(AppNavigator);