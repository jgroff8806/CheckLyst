import React, { Component } from 'react'
import { Container, Subscribe } from 'unstated'

import ItemsContainer from '../state/ItemsContainer'
import HomeView from '../views/HomeView'
import { IContainerItems } from '../types/items'

export default class HomeScreen extends Component<{}> {
  public render() {
    return (
      <Subscribe to={[ItemsContainer]}>
        {(items: Container<IContainerItems>) => <HomeView create={items.create} />}
      </Subscribe>
    )
  }
}
