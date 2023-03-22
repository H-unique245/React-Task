import { ERROR_BASKET, ERROR_DATA, LOADING_BASKET, LOADING_DATA, REMOVE_BASKET, SUCCESS_BASKET, SUCCESS_DATA } from "./actionType"

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
        loading_cart:true
    }
 }

 case ERROR_BASKET:{
    return {...state,
        error_cart:true,
        loading_cart:false
    }
 }

 case SUCCESS_BASKET :{
     // Check if the item is already in the basket
  const existingItem = state.basket.find((item) => item._id === payload._id);
  if (existingItem) {
    // If the item is already in the basket, replace it with the new one
    const updatedBasket = state.basket.map((item) =>
      item._id === payload._id ? payload : item
    );
    return {
      ...state,
      loading_cart: false,
      error_cart: false,
      basket: updatedBasket,
    };
  } else {
    // If the item is not in the basket, add it
    return {
      ...state,
      loading_cart: false,
      error_cart: false,
      basket: [...state.basket, payload],
    };
  }
 }
 
 case REMOVE_BASKET: {
    // const updatedBasket = state.basket.filter((product) => {
    //   return product._id !== payload._id;
    // });
    return {
      ...state,
      loading_cart: false,
      error_cart: false,
      basket: [...state.basket].filter((product) => product._id !== payload._id )
    };
  }

 default: {
    return state
 }
}
}