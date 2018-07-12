import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Button({
  children,
  disabled = false,
  isCancel = false,
  onPress,
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        { backgroundColor: isCancel ? 'tomato' : 'dodgerblue' },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'dodgerblue',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
})

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isCancel: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
}
