import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IRepositoryState {
    repositories: any[];
    repoNumber: number;
    selectedLanguage: string;
    search: string;
    page: number;
}

const initialState: IRepositoryState = {
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
        setRepositories: (state, action:PayloadAction<any[]>) => {
            state.repositories = action.payload;

        },
        setPage: (state, action:PayloadAction<number> ) => {
            state.page = action.payload;
        },
        setSelectedLanguage: (state, action: PayloadAction<string>) => {
            state.selectedLanguage = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setRepoNumber: (state, action: PayloadAction<number>) => {
            state.repoNumber = action.payload;
        }
    },
});

export const repositoryActions = repositorySlice.actions;

export default repositorySlice;