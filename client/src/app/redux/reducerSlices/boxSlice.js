import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  backgroundColor: 'red',
  height : 50,
  width: 50,
  // borderRadius: '0%'
  
}
const boxSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeHeight(state){
      state.height = state.height+5
    },
    changeWidth(state){
      state.width = state.width+5
    },
    changeShape(state){
      // state.borderRadius = '50%'
    }
    // changeBackgroundColor(state,actions){
    //   state.backgroundColor = actions.payload
    // }
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

export const { changeHeight, changeWidth } = boxSlice.actions
export default boxSlice.reducer