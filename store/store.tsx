import { configureStore } from '@reduxjs/toolkit';
import repositorySlice from './repository-slice';


const store = configureStore({
    reducer: {
        repository: repositorySlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;