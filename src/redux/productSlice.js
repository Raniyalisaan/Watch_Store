import { createSlice } from "@reduxjs/toolkit"
const productSlice = createSlice({
  name:"productSlice",
 initialState:{
  products: JSON.parse(localStorage.getItem('products')) || [],
  loading: false,
  cartItems:JSON.parse(localStorage.getItem('watch_cartItems')) || [],


},
reducers: {
   addProduct: (state, action) => {  //action----> object = {payload:{fullname:}}
      state.products.push(action.payload);
      localStorage.setItem('products', JSON.stringify(state.products));
    },

addToCart: (state, action) => {
  const cartProduct = action.payload;

  const existingItem = state.cartItems.find(
    (item) => item.id === cartProduct.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cartItems.push({
      ...cartProduct,
      quantity: 1,
    });
  }

  localStorage.setItem(
    "watch_cartItems",
    JSON.stringify(state.cartItems)
  );
},

    editProduct: (state, action) => {
      const index = state.products.findIndex(
        (pr) => pr.id === action.payload.id
      );

      if(index !== -1){
        state.products[index] = action.payload;

        localStorage.setItem(
          'products',
          JSON.stringify(state.products)
        );
      }
    },

    deleteProduct: (state,action)=> {
        state.products = state.products.filter(
        (pr) => pr.id !== action.payload
      );

        localStorage.setItem(
          'products',
          JSON.stringify(state.products)
        );
      },

        deletecartItem: (state,action)=> {
        state.cartItems = state.cartItems.filter(
        (pr) => pr.id !== action.payload
      );

        localStorage.setItem(
          'watch_cartItems',
          JSON.stringify(state.cartItems)
        );
      },

    incrementCartItemQuantity: (state, action) => {
       const cartItemIndex =state.cartItems.findIndex((item)=> item.id === action.payload);
    if(cartItemIndex !== -1){
        state.cartItems[cartItemIndex].quantity++ ;
      localStorage.setItem('watch_cartItems', JSON.stringify(state.cartItems))

    }
  },
  decrementCartItemQuantity: (state, action) => {
       const cartItemIndex =state.cartItems.findIndex((item)=> item.id === action.payload);
    if(cartItemIndex !== -1){
        state.cartItems[cartItemIndex].quantity-- ;
      localStorage.setItem('watch_cartItems', JSON.stringify(state.cartItems))

    }
  }
    }
  }
);

export const { addProduct,addToCart,editProduct,deleteProduct,deletecartItem,incrementCartItemQuantity,decrementCartItemQuantity } = productSlice.actions;

export default productSlice.reducer; 