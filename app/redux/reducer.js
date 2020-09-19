import * as actions from './actions/actionTypes'

export default function reducer (state = [], action) {
    switch (action.type) {
        case actions.Amount_Added:
            return [
                ...state,{
                    amount:action.payload.amount,
                    visiable:true

                }
            ]
            default:
                return state;
            
    }
}