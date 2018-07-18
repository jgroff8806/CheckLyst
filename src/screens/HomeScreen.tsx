import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  ImageEditor,
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import randomUuid from 'uuid/v4'
import { Container, Subscribe } from 'unstated'

import Button from '../components/Button'
import ItemsList from '../components/ItemsList'
import ItemsContainer from '../state/ItemsContainer'
import HomeView from '../views/HomeView'
import { IContainerItems } from '../types/items'

interface InterfaceStyles {
  home: ViewStyle
  homeHeader: TextStyle
  inputNewItem: ViewStyle
  itemsWrapper: ViewStyle
}

export default class HomeScreen extends Component<{}> {
  public render() {
    return (
      <Subscribe to={[ItemsContainer]}>
        {(items: Container<IContainerItems>) => (
          <HomeView create={items.create} delete={items.delete} edit={items.edit} />
        )}
      </Subscribe>
    )
  }
}

const styles: InterfaceStyles = {
  home: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  homeHeader: {
    textAlign: 'center',
    fontSize: 20,
  },
  inputNewItem: {
    height: 40,
    borderColor: 'dodgerblue',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  itemsWrapper: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: 'dodgerblue',
    padding: 20,
  },
}
