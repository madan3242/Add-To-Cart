import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from './rootReducer'

const middlewares = [thunk, logger]

export const store = configureStore({
    reducer: rootReducer
}, composeWithDevTools(applyMiddleware(...middlewares)))