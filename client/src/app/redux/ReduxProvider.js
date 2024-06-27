// 'use client'
// import React from 'react'
// import { Provider } from 'react-redux'
// import store from './store/configureStore'

// const ReduxProvider = ({children}) => {
//   return (
//     <Provider store = {store}>{children}</Provider>
//   )
// }

// export default ReduxProvider

'use client'
import React from 'react'

import { persistor,store } from './store/configureStore'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
const ReduxProvider = ({children}) => {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        {children}
        </PersistGate>
      </Provider>
  )
}

export default ReduxProvider