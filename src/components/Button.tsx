/**
 * @todo Refactor to a render prop!
 */

import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface InterfaceButton {
  children: string
  disabled?: boolean
  isSubmit?: boolean
  onPress(): void
  onLongPress?(): void
}

export default function Button({
  children,
  disabled = false,
  isSubmit = false,
  onPress,
  onLongPress,
}: InterfaceButton) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, { backgroundColor: isSubmit ? 'limegreen' : 'dodgerblue' }]}
      onPress={onPress}
      onLongPress={onLongPress}
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
