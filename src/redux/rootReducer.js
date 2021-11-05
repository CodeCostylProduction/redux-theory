const initialState = {
    counter: 15
}

export default function rootReducer(state = initialState, action ) {

    switch (action.type) {
        case 'ADD':
            return {
                counter: state.counter + 1
            }
        case 'SUB':
            return {
                counter: state.counter - 1
            }
        case 'DOU':
            return {
                counter: state.counter * 2
            }
        default:
            return state
    }
}