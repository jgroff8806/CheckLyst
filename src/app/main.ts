import { AppRegistry } from 'react-native'
import RootComponent from './RootComponent'

const { name } = require('./app.json')

AppRegistry.registerComponent(name, () => RootComponent)
