import React, { Component } from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Provider } from 'unstated'

import HomeScreen from '../screens/HomeScreen'
import CheckLystsScreen from '../screens/CheckLystsScreen'
import ItemsContainer from '../state/ItemsContainer'
import LystDetailScreen from '../screens/LystDetailScreen'

const LystStack = createStackNavigator({
  Saved: CheckLystsScreen,
  LystDetail: LystDetailScreen,
})

const TabScreens = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Saved: LystStack,
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
