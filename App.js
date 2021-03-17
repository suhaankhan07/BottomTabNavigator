import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Facebook from './screens/fb'
import Instagram from './screens/instagram'

export default class App extends React.Component {
  render() {
    return(
     <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
 fb: {screens:Facebook},
 in: {screens:Instagram}
});

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
