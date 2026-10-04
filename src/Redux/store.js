import {configureStore} from '@reduxjs/toolkit'
import searchReducer from '../Redux/Features/searchSlice'

export const store = configureStore({
    reducer:{
        search: searchReducer

    }
})