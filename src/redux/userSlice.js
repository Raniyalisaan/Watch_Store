import { createSlice } from "@reduxjs/toolkit"
const userSlice = createSlice({
  name: "userSlice",
  initialState:{
    users:JSON.parse(localStorage.getItem('users')) || [],
    loading: false,

    user:JSON.parse(localStorage.getItem('user')) || null,
    isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false 
  },

  reducers: {
    userRegister: (state,action) => {
      state.users.push(action.payload);
      localStorage.setItem('users',JSON.stringify(state.users));
    },
     userLogin: (state, action) => { 
      state.user = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('isAuthenticated',JSON.stringify(state.isAuthenticated));
  },
   userLogout:(state)=>{
      state.user = null;
      state.isAuthenticated = false;

      localStorage.removeItem('user',JSON.stringify(state.user));
      localStorage.removeItem('isAuthenticated',JSON.stringify(state.isAuthenticated));
    },
    
     deleteUser: (state,action)=> {
      const userIndex = state.users.findIndex((u)=> u.id === action.payload);
      if (userIndex !== -1) {
        state.users.splice(userIndex,1);
        localStorage.setItem('users',JSON .stringify(state.users));
      }
      if(state.user?.id === action.payload){

        state.user = null;
        state.isAuthenticated = false;

        localStorage.removeItem('user');
        localStorage.removeItem('isAutheticated');

      }
    },
     changeStatus: (state,action)=> {
      const userIndex = state.users.findIndex((u)=> u.id === action.payload);
      if (userIndex !== -1) {
        state.users[userIndex].status = !state.users[userIndex].status;
        localStorage.setItem('users',JSON .stringify(state.users));
      }
      if(state.user?.id === action.payload){
        state.user = null;
        state.isAuthenticated = false;

        localStorage.removeItem('user');
        localStorage.removeItem('isAutheticated');
      }
    },
      changeRole: (state,action)=> {
      const userIndex = state.users.findIndex((u)=> u.id === action.payload.id);
      if (userIndex !== -1) {
        state.users[userIndex].role = action.payload.role;
        localStorage.setItem('users',JSON .stringify(state.users));
      }
      if(state.user?.id === action.payload.id){
        state.user.role = action.payload.role;
        state.isAuthenticated = false;

        localStorage.setItem('user',JSON .stringify(state.user));
      }
    },
}
});

export const {userRegister,userLogin,userLogout,deleteUser,changeStatus,changeRole} = userSlice.actions;
export default userSlice.reducer;