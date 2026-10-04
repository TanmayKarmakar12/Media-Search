import {createSlice} from '@reduxjs/toolkit'

const searchSlice =  createSlice({
    name: "serach",
    initialState:{
        query: '',
        activeTab: 'photos',
        results: [],
        loading: false,
        error: null
    },
    reducers:{
        setQuery(state,action){
            state.query = action.payload

        },
        setActiveTab(state,action){
            state.activeTab = action.payload

        },
        setResults(state,action){
            state.results = action.payload
            state.loading = false

        },
        setLoading(state,action){
            state.loading = true
            state.error = null

        },
        setError(state,action){
            state.error = action.payload
            state.loading = false

        },
        clearResultss(state){
            state.results = []
        }
    }
})

export const {setQuery,setActiveTab,setError,setLoading,setResults} = searchSlice.actions


export default searchSlice.reducer;