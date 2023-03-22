import { ERROR_BASKET, ERROR_DATA, LOADING_BASKET, LOADING_DATA, SUCCESS_BASKET, SUCCESS_DATA } from "./actionType"

const appState= {
    loading: false,
    error: false,
    loading_cart: false,
    error_cart: false,
    products:[],
    basket:[],
}

export const appReducer=(state= appState,{type, payload})=>{
switch (type){
 case LOADING_DATA:{
    return {...state,
        loading:true
    }
 }

 case ERROR_DATA:{
    return {...state,
        error:true,
        loading:false
    }
 }

 case SUCCESS_DATA :{
    return {...state,
        loading:false,
        error: false,
        data: payload
    }
 }

 case LOADING_BASKET:{
    return {...state,
        loading:true
    }
 }

 case ERROR_BASKET:{
    return {...state,
        error_cart:true,
        loading_cart:false
    }
 }

 case SUCCESS_BASKET :{
    return {...state,
        loading_cart:false,
        error_cart: false,
        basket: payload
    }
 }
 default: {
    return state
 }
}
}