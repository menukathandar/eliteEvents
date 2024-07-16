'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
// import store from './store/configureStore'

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