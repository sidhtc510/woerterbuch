'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './index.js'

const ReduxProvider = ({ children }) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;