import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  color: 'red',
  width : 50,
  height : 50 
}
const boxSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++ 
    // or  state.value = state.value+1    
    },
    decrement(state) {
      state.value--
    // or  state.value = state.value-1
    },
    reset(state) {
      state.value =0
    },
  },
})

export const { increment, decrement, reset } = boxSlice.actions
export default boxSlice.reducer