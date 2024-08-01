import { configureStore, createSlice } from '@reduxjs/toolkit'

let pageSize = createSlice({
    name: 'pageSize',
    initialState : '',
    reducers: {
        changePageSize(state,actions) {
          return  actions.payload
        }

    }
})



export let { changePageSize } = pageSize.actions

export default configureStore({
  reducer: { 
    pageSize : pageSize.reducer
  }
}) 