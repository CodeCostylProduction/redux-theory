import {ADD, SUB, DOU, ADD2} from './actionTypes'

export function add() {
    return {
        type: ADD
    }
}
export function sub() {
    return {
        type: SUB
    }
}
export function double(number) {
    return {
        type: DOU,
        payload: number
    }
}export function add2() {
    return {
        type: ADD2
    }
}
