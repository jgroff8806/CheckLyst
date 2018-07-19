import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Provider } from 'unstated'

import HomeScreen from '../screens/HomeScreen'
import CheckLystsScreen from '../screens/CheckLystsScreen'
import ItemsContainer from '../state/ItemsContainer'

const TabScreens = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Saved: CheckLystsScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        const icon = {
          name: '',
          size: 0,
        }

        if (routeName === 'Home') {
          icon.name = 'home'
          icon.size = 25
        } else if (routeName === 'Saved') {
          icon.name = 'tasks'
          icon.size = 20
        }

        return <Icon name={icon.name} size={icon.size} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'dodgerblue',
      inactiveTintColor: 'lightgray',
    },
  }
)

const items = new ItemsContainer()

export default class RootComponent extends Component {
  public render() {
    return (
      <Provider inject={[items]}>
        <TabScreens />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
