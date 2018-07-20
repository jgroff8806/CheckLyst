import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Subscribe } from 'unstated'
import { SafeAreaView } from 'react-navigation'
import Accordion from 'react-native-collapsible/Accordion'

import ItemsContainer from '../state/ItemsContainer'
import { IItem, ICheckLyst } from '../types/items'

export default class CheckLysts extends Component {
  private handleItemPress = () => {
    alert('View Lyst Detail')
  }

  private renderHeader = (lyst: ICheckLyst): JSX.Element => {
    return (
      <View style={{ backgroundColor: 'dodgerblue', padding: 20 }}>
        <Text style={{ textAlign: 'center', color: 'white' }}>{lyst.name}</Text>
      </View>
    )
  }

  private renderContent = (lyst: ICheckLyst): JSX.Element => {
    return (
      <View>
        {lyst.items.map(item => (
          <View
            key={item.id}
            style={{
              backgroundColor: 'lightgrey',
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              padding: 15,
            }}
          >
            <Text style={{ color: 'dodgerblue' }}>{item.name}</Text>
          </View>
        ))}
      </View>
    )
  }

  public render() {
    return (
      <Subscribe to={[ItemsContainer]}>
        {items => (
          <SafeAreaView style={{ flex: 1 }}>
            <Accordion
              sections={items.state.savedCheckLysts}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
            />
          </SafeAreaView>
        )}
      </Subscribe>
    )
  }
}
