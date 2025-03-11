import { configureStore } from '@reduxjs/toolkit'
import leadsReducer from "../features/leads/leadsSlice"
import { leadsApi } from '@/features/api/apiSlice'

export const store = configureStore({
  reducer: {
    leads:leadsReducer,
  [leadsApi.reducerPath]:leadsApi.reducer
},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(leadsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
