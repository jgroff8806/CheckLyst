import { AppRegistry } from 'react-native'
import RootComponent from './RootComponent'

// tslint:disable-next-line
const { name } = require('./app.json')

import '../../ReactotronConfig'

AppRegistry.registerComponent(name, () => RootComponent)
