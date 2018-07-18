export interface IItem {
  id: string
  name: string
  completed: boolean
}

export interface ICheckLyst {
  id: string
  name: string
  items: IItem[]
}

export interface IContainerItems {
  state: { savedCheckLyst: ICheckLyst[] }
  create(checkLyst: ICheckLyst): void
  delete(checkLyst: ICheckLyst): void
  edit(checkLyst: ICheckLyst): void
}
