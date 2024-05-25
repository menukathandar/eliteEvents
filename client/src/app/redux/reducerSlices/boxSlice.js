// import { createSlice } from '@reduxjs/toolkit'

// const initialState = { 
//   backgroundColor: 'red',
//   height : 50,
//   width: 50,
//   borderRadius: '0%'
  
// }
// const boxSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     changeHeight(state){
//       state.height = state.height+5
//     },
//     changeWidth(state){
//       state.width = state.width+5
//     },
//     changeShape(state){
//       state.borderRadius = '50%'
//     }
//     // changeBackgroundColor(state,actions){
//     //   state.backgroundColor = actions.payload
//     // }
//     // increment(state) {
//     //   state.value++ 
//     // // or  state.value = state.value+1    
//     // },
//     // decrement(state) {
//     //   state.value--
//     // // or  state.value = state.value-1
//     // },
//     // reset(state) {
//     //   state.value =0
//     // },
//   },
// })

// export const { changeHeight, changeWidth,changeShape } = boxSlice.actions
// export default boxSlice.reducer


import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    backgroundColor: 'red', 
    width: 50,
    height: 50,
    borderRadius: '0%'
}

const boxSlice = createSlice({
  name: 'box',
  initialState: initialState,
  reducers: {
    changeHeight(state) {
      if(state.borderRadius === '50%'){
        const newHeight = state.height + 5
        state.width = newHeight
        state.height = newHeight
      }else{
        state.height=state.height+5
      }

    },
    changeWidth(state) {
      if(state.borderRadius === '50%'){
        const newWidth = state.width + 5
        state.width = newWidth
        state.height = newWidth
      }else{
        state.width=state.width + 5
      }
    },
    changeShape(state) {
      state.borderRadius = '50%'
      state.width=state.height
    },
    changeBackgroundColor(state,actions) {
      state.backgroundColor = actions.payload
    },
  },
})

export const { changeHeight, changeShape,changeWidth,changeBackgroundColor } = boxSlice.actions
export default boxSlice.reducer