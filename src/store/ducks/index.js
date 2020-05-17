import { combineReducers } from 'redux'

import { reducer as tasks } from "./tasks"
import { reducer as loader } from "./loader"

export default combineReducers({
    tasks,
    loader
})