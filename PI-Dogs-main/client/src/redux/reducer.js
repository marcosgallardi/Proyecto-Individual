import { GET_DOGS, GET_TEMPERAMENTS } from "./actionsType";


let initialState = {
  temperaments: [],
  dogs: [],
};

const rootReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperaments: payload
            }
            
            
        case GET_DOGS:
            return{
                ...state,
                dogs: payload
            }

        default:
           return state 
    }
};


export default rootReducer;