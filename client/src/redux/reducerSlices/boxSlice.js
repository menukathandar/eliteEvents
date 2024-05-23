import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  backgroundColor: 'red',
  height : 50,
  width: 50 
}
const boxSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeHeight(state){
      state.height = state.height+5
    },
    // increment(state) {
    //   state.value++ 
    // // or  state.value = state.value+1    
    // },
    // decrement(state) {
    //   state.value--
    // // or  state.value = state.value-1
    // },
    // reset(state) {
    //   state.value =0
    // },
  },
})

export const { changeHeight} = boxSlice.actions
export default boxSlice.reducer