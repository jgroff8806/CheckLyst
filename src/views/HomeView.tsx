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
import { Subscribe } from 'unstated'

import Button from '../components/Button'
import ItemsList from '../components/ItemsList'
import ItemsContainer from '../state/ItemsContainer'

interface InterfaceItem {
  id: string
  name: string
  completed: boolean
}

interface InterfaceCheckLyst {
  id: string
  name: string
  items: InterfaceItem[]
}

interface InterfaceSavedCheckLysts {
  savedCheckLysts: InterfaceCheckLyst[]
}

interface InterfaceState {
  inputValue: string
  inputNameValue: string
}

interface InterfaceProps {
  create(checkLyst: InterfaceCheckLyst): void
  delete(checkLyst: InterfaceCheckLyst): void
  edit(checkLyst: InterfaceCheckLyst): void
  items: InterfaceCheckLyst[]
}

interface InterfaceStyles {
  home: ViewStyle
  homeHeader: TextStyle
  inputNewItem: ViewStyle
  itemsWrapper: ViewStyle
}

export default class HomeScreen extends Component<
  InterfaceProps,
  InterfaceState
> {
  public state: InterfaceState = { inputValue: '', inputNameValue: '' }
  private inputNewItem: React.RefObject<TextInput> = React.createRef()
  private inputNewName: React.RefObject<TextInput> = React.createRef()

  private handleSubmit = () => {
    this.setState(() => ({
      inputValue: '',
    }))

    this.inputNewItem.current.clear()
  }

  private handleNameSubmit = () => {
    this.props.create({
      id: randomUuid(),
      name: this.state.inputNameValue,
      items: [],
    })

    this.setState(() => ({
      inputNameValue: '',
    }))

    this.inputNewName.current.clear()

    // setTimeout(() => {
    //   this.inputNewName.current.focus()
    // }, 100)
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

  private handleNameChange = (inputNameValue: string) => {
    this.setState(() => ({ inputNameValue }))
  }

  public render() {
    return (
      <Subscribe to={[ItemsContainer]}>
        {items => (
          <SafeAreaView style={styles.home}>
            <View style={{ flex: 1 }}>
              <Text style={styles.homeHeader}>New CheckLyst</Text>
              <View>
                <TextInput
                  style={styles.inputNewItem}
                  autoFocus
                  enablesReturnKeyAutomatically
                  maxLength={60}
                  placeholder="e.g. Grocery Store List"
                  onChangeText={inputNameValue =>
                    this.handleNameChange(inputNameValue)
                  }
                  onSubmitEditing={this.handleNameSubmit}
                  ref={this.inputNewName}
                  value={this.state.inputNameValue}
                />
                <TextInput
                  style={styles.inputNewItem}
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
                    disabled={!items.state.savedCheckLysts.length}
                    isCancel
                    onPress={this.handleCancelPress}
                  >
                    Clear All
                  </Button>
                </View>
              </View>
            </View>
            <View style={styles.itemsWrapper}>
              <Text style={{ fontSize: 24, textAlign: 'center' }}>
                {items.state.savedCheckLysts &&
                items.state.savedCheckLysts[0] &&
                items.state.savedCheckLysts[0].name
                  ? items.state.savedCheckLysts[0].name
                  : 'No Lysts'}
              </Text>
              <ItemsList
                handlePress={this.handleItemPress}
                items={this.props.getNewLyst()}
              />
            </View>
          </SafeAreaView>
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
