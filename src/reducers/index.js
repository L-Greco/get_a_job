import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIKE_COMPANY":
            let newCompanies = [...state.companies, action.payload]
            let doubleChecker = newCompanies.filter(company => company === action.payload)

            if (doubleChecker.length > 1) {
                alert("You must really love this company cause you have already liked it!!!")

            }
            else {
                return {
                    ...state,
                    companies: [...state.companies, action.payload]
                }
            }

        // case "UNLIKE_COMPANY" :
        //     let newCompanies = state.companies.filter(company=>company!==action.payoad) 
        //     return {
        //         ...state,
        //         companies:newCompanies
        //     }   
        default:
            return state
    }
}

export default mainReducer