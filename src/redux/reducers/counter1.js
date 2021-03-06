import {ADD, SUB, DOU} from '../actions/actionTypes'

const initialState = {
    counter: 0
}

export default function counter1(state = initialState, action ) {

    switch (action.type) {
        case ADD:
            return {
                counter: state.counter + 1
            }
        case SUB:
            return {
                counter: state.counter - 1
            }
        case DOU:
            return {
                counter: state.counter * action.payload
            }
        default:
            return state
    }
}