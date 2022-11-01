import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const add_user= createAsyncThunk('user_reducers/add_user', async (user) => {
 
  const res=await  axios.get(" http://localhost:4000/users?email="+user.email )
 .then(function (response) {
  
    return response.data[0];

  }).then((res)=>{
console.log(res.firstName);
 
  return  {name:res.firstName+" "+res.lastName, email:res.email}  ;
  
  }).catch(()=>{
 
})
return res;
})
export const user_slice = createSlice({
  name: 'user_reducers',
  initialState : {
    user_data:{
      name: "",
      email:"" 
  },    
    loading:null,
    error:false
  },
  reducers: {
    // add_user: (state,action) => {
    //        state.user_data  = action.payload; 
             
    // },
    // start_user:(state)=>{
    //   state.loading=true;
    // },
    // success_user:(state)=>{
    //   state.error=false;
    //   state.loading=null;
    // },
    // error_user:(state)=>{
    //   state.loading=false;
    //   state.error=true;
    // }
  },
  extraReducers:{
    [add_user.pending]:(state) => {
      state.loading=true;
               
      },
      [add_user.fulfilled]:(state,action) => {
        state.user_data  = action.payload; 
        console.log(action);
        state.error=false;
        state.loading=null;
                 
        },
        [add_user.rejected]:(state) => {
          state.loading=false;
          state.error=true;
                   
          },
  }
})

  
export default user_slice.reducer