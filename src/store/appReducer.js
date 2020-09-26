import notebooks from './mock/notebooks'
import inputs from './mock/inputs'

const initialState = { 
    text: '',
    data: [],
    first: '',
    second: '',
    third: '',
    anaytics: []
}

export default (state = initialState, action) => {
    switch (action.type){
        case "CHANGE_TEXT":
            return { ...state, text: action.payload }
        case "GET_DATA":
            return { ...state, data: action.payload }
        case 'SET_FIRST':
            return { ...state, first: action.payload }
        case 'SET_SECOND':
            return { ...state, second: action.payload }
        case 'SET_THIRD':
            return { ...state, third: action.payload }
        case 'FAST_SEARCH':
            let data = notebooks.low
            data = (inputs.medium.includes(action.payload) ) ? notebooks.medium : data
            data = (inputs.high.includes(action.payload) ) ? notebooks.high : data
            data = (inputs.ultra.includes(action.payload) ) ? notebooks.ultra : data
            return { ...state, data: data }
        case 'GET_ANALYTICS':
            return { ...state, analytics: action.payload }
        default:
            return state
    }
}


