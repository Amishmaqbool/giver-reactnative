import * as actions from './actionTypes'

export default function reducer (state = [], action) {
    switch (action.type) {
        case actions.Amount_Added:
            return [
                ...state,{
                    amount:action.payload.amount,
                    visable:true

                }
            ]
            default:
                return state;
            
    }
}