import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import dataReducer from "../reducers/data.js"
import likeReducer from "../reducers/like.js"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const initialState = {
    like: {
        companies: []
    },
    data: {
        jobs: [],
        query: "",
        isLoading: false,
        error: ""

    }

}

const combinedReducer = combineReducers({
    like: likeReducer,
    data: dataReducer
})

const configureStore = () => createStore(combinedReducer, initialState, composeEnhancers(applyMiddleware(thunk)))


export default configureStore