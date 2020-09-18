import * as actions from './actionTypes'

export function amountAdded(amount) {
    return {
        type:actions.Amount_Added,
        payload:{
            amount
        }
        
    };
}