import { configureStore } from '@reduxjs/toolkit';
import repositoryReducer from './repository-slice';
import storage from 'redux-persist/lib/storage'; // default level is 1 that is web's local storage. In every app must decide to how many level of state they want to "merge"
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage,
    // it can takes 2 more fields they are whiteList and blackList arrays. Their purpose is make which slice might be persisted or not.
    // and the other field is that stateReconciler and the stateReconciler aims to determine level of merge process
}


const persistedReducer = persistReducer(persistConfig, repositoryReducer);

// configureStore wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension
const store = configureStore({
    reducer: {
        //  By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state
        repository: persistedReducer, // functions that calculate a new state value based on previous state + an action
    },

    // Returns an array containing the default list of middleware
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {

                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // An array of action types to ignore when checking for serializability.  Defaults to []
               
            },
        }),
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// used ReturnType keyword to get getState and dispatch functions' type of store and export their types. 

export const persistor = persistStore(store);

export default store;
