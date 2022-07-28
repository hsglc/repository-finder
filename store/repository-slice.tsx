import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    repositories: [],
    page: 1,
    selectedLanguage: 'Javascript',
    search: '',
    repoNumber: 0,
};

const repositorySlice = createSlice({
    name: "repository",
    initialState,
    reducers: {
        setRepositories: (state, action) => {
            state.repositories = action.payload;

        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setSelectedLanguage: (state, action) => {
            state.selectedLanguage = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setRepoNumber: (state, action) => {
            state.repoNumber = action.payload;
        }
    },
});

export const repositoryActions = repositorySlice.actions;

export default repositorySlice;