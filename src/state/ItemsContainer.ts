import { Container } from 'unstated'
import { IItem, ICheckLyst } from '../types/items'

interface InterfaceState {
  savedCheckLysts: ICheckLyst[]
}

export default class ItemsContainer extends Container<InterfaceState> {
  public state: InterfaceState = { savedCheckLysts: [] }

  public create = (newCheckLyst: ICheckLyst) => {
    this.setState(prevState => ({
      savedCheckLysts: [...prevState.savedCheckLysts, newCheckLyst],
    }))
  }

  public delete = (checkLyst: ICheckLyst) => {
    const checkLystIndex: number = this.state.savedCheckLysts.indexOf(checkLyst)

    this.setState(prevState => ({
      savedCheckLysts: [
        ...prevState.savedCheckLysts.slice(0, checkLystIndex),
        ...prevState.savedCheckLysts.slice(checkLystIndex + 1),
      ],
    }))
  }

  public edit = (checkLyst: ICheckLyst) => {
    const checkLystIndex: number = this.state.savedCheckLysts.indexOf(checkLyst)

    this.setState(prevState => ({
      savedCheckLysts: prevState.savedCheckLysts.map((lyst, index) => {
        if (index !== checkLystIndex) return lyst

        return {
          ...lyst,
          ...checkLyst,
        }
      }),
    }))
  }
}
