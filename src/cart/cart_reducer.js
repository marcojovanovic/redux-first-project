const cart_reducer = (state, action) => {
  if (action.type === 'CART_FETCH') {
    return { ...state, cart: action.payload };
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === 'INCREASE') {
    let calculate = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });

    return { ...state, cart: calculate };
  }
  if (action.type === 'DECREASE') {
    let calculate = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      })
      .filter((item) => item.amount > 0);

    return { ...state, cart: calculate };
  }

  if (action.type === 'CALCULATE_TOTAL') {
    const { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;

        cartTotal.amount += amount;

        cartTotal.total += price * amount;

        return cartTotal;
      },
      { total: 0, amount: 0 }
    );

    return { ...state, amount, total };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
