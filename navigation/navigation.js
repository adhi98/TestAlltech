import React from 'react';
import AlbumScreen from '../src/album/screen/AlbumScreen';
import HomeScreen from '../src/home/screen/HomeScreen';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

const AppStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Album: {screen: AlbumScreen},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(AppStack);
