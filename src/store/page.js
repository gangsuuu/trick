import { configureStore, createSlice } from '@reduxjs/toolkit'

let page = createSlice({
    name: 'page',
    initialState : '',
    reducers: {
        changePage(state,actions) {
          return  actions.payload
        }

    }
})

export let { changePage } = page.actions

export default configureStore({
  reducer: { 
    page : page.reducer
  }
}) 