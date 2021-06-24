import { initialState } from "../store";

const likeReducer = (state = initialState.like, action) => {
    switch (action.type) {
        case "LIKE_COMPANY":

            return {
                ...state,
                companies: [...state.companies, action.payload]
            }


        case "UNLIKE_COMPANY":

            let updatedCompanies = state.companies.filter(company => company !== action.payload)
            return {
                ...state,
                companies: updatedCompanies
            }
        default:
            return state
    }
}

export default likeReducer