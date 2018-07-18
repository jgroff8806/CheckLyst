import React, { Component } from 'react'
import { View } from 'react-native'

export default class CheckLysts extends Component {
  private handleItemPress = () => {
    alert('View Lyst Detail')
  }

  public render() {
    return <View style={{ flex: 1, backgroundColor: 'orange' }} />
  }
}
