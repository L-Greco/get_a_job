// USED THIS REDUCER BEFORE
// NOW I COMBINE TWO DIFFERENT REDUCERS TO ONE 

// import { initialState } from "../store";

// const mainReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "LIKE_COMPANY":

//             return {
//                 ...state,
//                 companies: [...state.companies, action.payload]
//             }


//         case "UNLIKE_COMPANY":

//             let updatedCompanies = state.companies.filter(company => company !== action.payload)
//             return {
//                 ...state,
//                 companies: updatedCompanies
//             }
//         default:
//             return state
//     }
// }

// export default mainReducer