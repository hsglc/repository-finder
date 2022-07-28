import { configureStore } from '@reduxjs/toolkit';
import repositorySlice from './repository-slice';


const store = configureStore({
    reducer: {
        repository: repositorySlice.reducer,
    }
})

export default store;