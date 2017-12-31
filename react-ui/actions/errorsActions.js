export const ADD_ERROR = 'ADD_ERROR'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const addError = (err) => ({
    type: ADD_ERROR
})

export const clearErrors = (err) => ({
    type: CLEAR_ERRORS
})