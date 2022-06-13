let cartFromStorage = JSON.parse(window.localStorage.getItem("cart"));

let initialState = cartFromStorage || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      let cart = state.map((product) => {
        let { amount, ...rest } = product;
        return rest;
      });

      let { amount, ...data } = action.data;

      let includes = cart.find(
        (p) => JSON.stringify(data) === JSON.stringify(p)
      )
        ? true
        : false;

      if (includes) {
        return state.map((p) => {
          let { amount, ...rest } = p;

          if (JSON.stringify(rest) === JSON.stringify(data)) {
            return { ...rest, amount: amount + 1 };
          } else {
            return p;
          }
        });
      }

      return [...state, action.data];

    case "INCREASEAMOUNT":
      let productToIncrease = state.find(
        (p) => JSON.stringify(action.data) === JSON.stringify(p)
      );
      productToIncrease = {
        ...productToIncrease,
        amount: productToIncrease.amount + 1,
      };

      return state.map((p) =>
        JSON.stringify(p) === JSON.stringify(action.data)
          ? productToIncrease
          : p
      );

    case "DECREASEAMOUNT":
      if (action.data.amount < 2)
        return state.filter(
          (product) => JSON.stringify(product) !== JSON.stringify(action.data)
        );

      let productToDecrease = state.find(
        (p) => JSON.stringify(action.data) === JSON.stringify(p)
      );
      productToDecrease = {
        ...productToDecrease,
        amount: productToDecrease.amount - 1,
      };

      return state.map((p) =>
        JSON.stringify(p) === JSON.stringify(action.data)
          ? productToDecrease
          : p
      );

    case "DELETE":
      return state.filter(
        (product) => JSON.stringify(product) !== JSON.stringify(action.data)
      );

    default:
      return state;
  }
};

export const addProductToCart = (data) => {
  return (dispatch) => {
    dispatch({
      type: "ADD",
      data,
    });
  };
};

export const increaseAmount = (data) => {
  return (dispatch) => {
    dispatch({
      type: "INCREASEAMOUNT",
      data,
    });
  };
};

export const decreaseAmount = (data) => {
  return (dispatch) => {
    dispatch({
      type: "DECREASEAMOUNT",
      data,
    });
  };
};

export const deleteProductFromCart = (data) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE",
      data,
    });
  };
};

export default cartReducer;
