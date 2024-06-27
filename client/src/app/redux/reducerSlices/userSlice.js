// import { createSlice } from "@reduxjs/toolkit"
// const initialState = {
//     token : '',
//     isLoggedIn : false,
// }

import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    isLoggedIn: false,
    token: '',
    // kycVerifiedStatus: '',
    userDetails: {}
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setLoginDetails(state, actions) {
        const {user, token} = actions.payload
       return {
        ...state,
        isLoggedIn: true,
        token: token,
        userDetails: user
       }
    },

    logoutUser(state, actions) {
           return initialState
    },
//     setUserKycVerifiedStatus(state, actions) {
//       return {
//         ...state,
//         kycVerifiedStatus: actions.payload
//       }
// },
  },
})

export const{ setLoginDetails, logoutUser,setUserKycVerifiedStatus } = userSlice.actions
export default userSlice.reducer