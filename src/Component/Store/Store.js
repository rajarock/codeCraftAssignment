import { observable } from 'mobx'

class Store {
    @observable activeIdx = 1
    @observable activeDevice = 'bed lamp'
    @observable dimensions = {}

}

const state = new Store()

export { state }
export default state