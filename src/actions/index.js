export const likeCompany = (company) => {
    return { type: "LIKE_COMPANY", payload: company }
}

export const unlikeCompany = (company) => ({
    type: "UNLIKE_COMPANY",
    payload: company
})

export const typeQuery = (query) => ({
    type: "TYPE_QUERY",
    payload: query
})

export const fetchJobsAction = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true,
            })
            let resp = await fetch('https://remotive.io/api/remote-jobs?search=')
            console.log(getState())
            if (resp.ok) {
                let books = await resp.json()
                dispatch({
                    type: 'GET_BOOKS',
                    payload: books,
                })
                dispatch({
                    type: 'SET_LOADING',
                    payload: false,
                })
                dispatch({
                    type: 'SET_ERROR',
                    payload: false,
                })
            } else {
                console.log('error')
                dispatch({
                    type: 'SET_LOADING',
                    payload: false,
                })
                dispatch({
                    type: 'SET_ERROR',
                    payload: true,
                })
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: 'SET_LOADING',
                payload: false,
            })
            dispatch({
                type: 'SET_ERROR',
                payload: true,
            })
        }
    }
}