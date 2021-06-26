import { initialState } from "../store";

const dataReducer = (state = initialState.data, action) => {
    switch (action.type) {
        case "TYPE_QUERY":
            return {
                ...state,
                query: action.payload
            }
        case 'GET_JOBS':
            return {
                ...state,
                jobs: action.payload,
            }

        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
            }

        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            }

        default:
            return state
    }
}

export default dataReducer