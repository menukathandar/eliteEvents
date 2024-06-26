import boxSlice from "../reducerSlices/boxSlice";
const { configureStore } = require("@reduxjs/toolkit");
const { default: counterSlice } = require("../reducerSlices/counterSlice");


const store = configureStore({
    reducer: {
       user:userSlice
    }
})
export default store