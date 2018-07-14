import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import randomUuid from 'uuid/v4'

import Button from '../components/Button'
import ItemsList from '../components/ItemsList'

interface InterfaceItem {
  id: string
  name: string
  completed: boolean
}

interface InterfaceState {
  items: InterfaceItem[]
  inputValue: string
}

interface InterfaceStyles {
  home: ViewStyle
  homeHeader: TextStyle
  inputNewItem: ViewStyle
  itemsWrapper: ViewStyle
}

export default class HomeScreen extends Component<{}, InterfaceState> {
  public state: InterfaceState = { items: [], inputValue: '' }
  private inputNewItem: React.RefObject<TextInput> = React.createRef()

  private handleSubmit = () => {
    this.setState(prevState => ({
      inputValue: '',
      items: [
        ...prevState.items,
        {
          id: randomUuid(),
          name: prevState.inputValue,
          completed: false,
        },
      ],
    }))

    this.inputNewItem.current.clear()

    setTimeout(() => {
      this.inputNewItem.current.focus()
    }, 100)
  }

  private handleItemPress = (selectedItem: InterfaceItem) => {
    this.setState(() => ({
      items: this.state.items.map(
        item =>
          selectedItem.name === item.name
            ? {
                ...item,
                completed: !item.completed,
              }
            : item
      ),
    }))
  }

  private handleCancelPress = () => {
    this.setState(() => ({
      items: [],
      inputValue: '',
    }))
  }

  private handleChange = (inputValue: string) => {
    this.setState(() => ({ inputValue }))
  }

  public render() {
    const { items } = this.state
    return (
      <SafeAreaView style={styles.home}>
        <View style={{ flex: 1 }}>
          <Text style={styles.homeHeader}>New CheckLyst</Text>
          <View>
            <TextInput
              style={styles.inputNewItem}
              autoFocus
              autoCapitalize="none"
              enablesReturnKeyAutomatically
              maxLength={60}
              placeholder="e.g. Take the trash out"
              onChangeText={inputValue => this.handleChange(inputValue)}
              onSubmitEditing={this.handleSubmit}
              ref={this.inputNewItem}
              value={this.state.inputValue}
            />
            <View>
              <Button
                disabled={!this.state.inputValue.length}
                onPress={this.handleSubmit}
              >
                Add
              </Button>
              <Button
                disabled={!items.length}
                isCancel
                onPress={this.handleCancelPress}
              >
                Clear All
              </Button>
            </View>
          </View>
        </View>
        <View style={styles.itemsWrapper}>
          <ItemsList handlePress={this.handleItemPress} items={items} />
        </View>
      </SafeAreaView>
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
