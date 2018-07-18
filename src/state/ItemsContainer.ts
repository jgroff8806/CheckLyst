import { Container } from 'unstated'

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

interface InterfaceState {
  savedCheckLysts: InterfaceCheckLyst[]
}

export default class ItemsContainer extends Container<InterfaceState> {
  public state: InterfaceState = { savedCheckLysts: [] }

  public create = (newCheckLyst: InterfaceCheckLyst) => {
    this.setState(prevState => ({
      savedCheckLysts: [...prevState.savedCheckLysts, newCheckLyst],
    }))
  }

  public delete = (checkLyst: InterfaceCheckLyst) => {
    const checkLystIndex: number = this.state.savedCheckLysts.indexOf(checkLyst)

    this.setState(prevState => ({
      savedCheckLysts: [
        ...prevState.savedCheckLysts.slice(0, checkLystIndex),
        ...prevState.savedCheckLysts.slice(checkLystIndex + 1),
      ],
    }))
  }

  public edit = (checkLyst: InterfaceCheckLyst) => {
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

  public getNewLyst = () => {
    return this.state.savedCheckLysts[this.state.savedCheckLysts.length - 1]
  }
}
