import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import dataReducer from "../reducers/data.js"
import likeReducer from "../reducers/like.js"


export const initialState = {
    like: {
        companies: []
    },
    data: {
        jobs: []
    }

}

const combinedReducer = combineReducers({
    like: likeReducer,
    data: dataReducer
})

const configureStore = () =>
    createStore(combinedReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default configureStore