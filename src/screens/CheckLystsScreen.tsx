import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Subscribe } from 'unstated'
import { SafeAreaView } from 'react-navigation'

import ItemsContainer from '../state/ItemsContainer'
import { IItem, ICheckLyst } from '../types/items'

export default class CheckLysts extends Component {
  private handleItemPress = () => {
    alert('View Lyst Detail')
  }

  public render() {
    return (
      <Subscribe to={[ItemsContainer]}>
        {items => (
          <SafeAreaView style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              {items.state.savedCheckLysts.map((checkLyst: ICheckLyst) => (
                <View key={checkLyst.id}>
                  <Text style={{ color: 'dodgerblue', fontSize: 20 }}>{checkLyst.name}</Text>
                  <View>
                    {checkLyst.items.map((item: IItem) => (
                      <Text style={{ color: 'dodgerblue' }} key={item.id}>
                        {item.name}
                      </Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </SafeAreaView>
        )}
      </Subscribe>
    )
  }
}
