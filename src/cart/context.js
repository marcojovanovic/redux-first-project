import React, { createContext, useReducer, useState, useEffect } from 'react';

// 1. Reducer
import reducer from './cart_reducer';

import cartItems from './data';

// url 'https://course-api.com/react-useReducer-cart-project'

// 3. Context

export const CartContext = createContext(); // izvoz za komponente

// 4 InitialState

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

// dispatch Functions

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    const res = await fetch(
      'https://course-api.com/react-useReducer-cart-project'
    );

    const data = await res.json();

    function getData() {
      dispatch({ type: 'CART_FETCH', payload: data });
    }

    getData();
  };

  
  const increaseItem = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  const decreaseItem = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  useEffect(() => {
  
      dispatch({ type: 'CALCULATE_TOTAL' });
    

   
  }, [state.cart]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        ...state,
        dispatch,
       
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider }; // izvoz za index.js
