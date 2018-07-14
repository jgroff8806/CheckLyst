import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface InterfaceButton {
  children: string
  disabled?: boolean
  isCancel?: boolean
  onPress(): void
}

export default function Button({
  children,
  disabled = false,
  isCancel = false,
  onPress,
}: InterfaceButton) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        { backgroundColor: isCancel ? 'tomato' : 'dodgerblue' },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    color: 'dodgerblue',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
})
