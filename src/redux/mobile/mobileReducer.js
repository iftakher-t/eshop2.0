
import 
import 


const mobileReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_MOBILE: return{
            ...state,
            totalMobile: state.totalMobile -1
        }
        default: return state
    }
}

export default mobileReducer