import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import randomUuid from 'uuid/v4'

import Button from '../components/Button'

interface Item {
  id: string
  name: string
  completed: boolean
}

interface State {
  items: Item[]
  inputValue: string
}

export default class HomeScreen extends Component<{}, State> {
  private inputNewItem: React.RefObject<TextInput> = React.createRef()

  state: State = { items: [], inputValue: '' }

  handleSubmit = () => {
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

  handleItemPress = (selectedItem: Item) => {
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

  render() {
    const { items } = this.state
    return (
      <SafeAreaView style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            New CheckLyst
          </Text>
          <View>
            <TextInput
              style={{
                height: 40,
                borderColor: 'dodgerblue',
                borderWidth: 2,
                borderRadius: 10,
                paddingLeft: 10,
                paddingRight: 10,
              }}
              autoFocus
              autoCapitalize="none"
              enablesReturnKeyAutomatically
              maxLength={60}
              placeholder="e.g. Take the trash out"
              onChangeText={inputValue => this.setState({ inputValue })}
              onSubmitEditing={this.handleSubmit}
              ref={this.inputNewItem}
              value={this.state.inputValue}
            />
            <View style={{ flexDirection: 'row' }}>
              <Button
                disabled={!this.state.inputValue.length}
                onPress={this.handleSubmit}
              >
                Add
              </Button>
              <Button
                disabled={!items.length}
                isCancel
                onPress={() => {
                  this.setState(() => ({
                    items: [],
                    inputValue: '',
                  }))
                }}
              >
                Clear All
              </Button>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            borderTopWidth: 1,
            borderTopColor: 'dodgerblue',
            padding: 20,
          }}
        >
          {items && items.length
            ? items.map(item => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => this.handleItemPress(item)}
                >
                  <Text
                    style={{
                      borderWidth: 2,
                      borderColor: 'dodgerblue',
                      borderRadius: 5,
                      color: 'dodgerblue',
                      marginTop: 5,
                      marginBottom: 5,
                      padding: 10,
                      textDecorationLine: item.completed
                        ? 'line-through'
                        : 'none',
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))
            : null}
        </View>
      </SafeAreaView>
    )
  }
}
