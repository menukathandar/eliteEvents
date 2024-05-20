const { configureStore } = require("@reduxjs/toolkit");
const { default: counterSlice } = require("../reducerSlices/counterSlice");

const store = configureStore({
    reducer: {
        counter : counterSlice,
    }
})
export default store