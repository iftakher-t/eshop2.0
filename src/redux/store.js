import { createStore } from  'redux'
import { mobileReducer } from './redux'

const store = createStore(mobileReducer)

export default store;