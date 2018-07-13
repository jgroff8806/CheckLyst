import { AppRegistry } from 'react-native'
import RootComponent from './RootComponent'

// tslint:disable-next-line
const { name } = require('./app.json')

AppRegistry.registerComponent(name, () => RootComponent)
