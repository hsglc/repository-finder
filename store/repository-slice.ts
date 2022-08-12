import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IRepository } from "../types";


interface IRepositoryState {
    repositories: any[];
    repoNumber: number;
    selectedLanguage: string;
    search: string;
    page: number;
    error: string;
    resetPagination: boolean;
    loading: boolean;
}

const initialState: IRepositoryState = {
    repositories: [],
    page: 1,
    selectedLanguage: 'Javascript',
    search: '',
    repoNumber: 0,
    error: '',
    resetPagination: false,
    loading: false
};

export const fetchRepos = createAsyncThunk(
    'repository/fetchRepos',
    async (queries: { page: number, selectedLang: string, search: string }) => {
        const { page, selectedLang, search } = queries;
        const response = await fetch(`https://api.github.com/search/repositories?q=language:${selectedLang}+${search}in:description&sort=stars&order=desc&page=${page}&per_page=20`);
        const data = await response.json();
        const extractedRepos = data?.items?.map((item: IRepository) => {
            return {
                id: item.id,
                name: item.owner.login,
                description: item.description,
                stars: item.stargazers_count,
                forks: item.forks,
                updated_at: item.updated_at,
                link: item.html_url
            }
        })
        return { items: extractedRepos, total_count: data?.total_count, error: data?.message };
    }
)

const repositorySlice = createSlice({
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    // That one root reducer function is responsible for handling all of the actions that are dispatched, and calculating what the entire new state result should be every time
    name: "repository",
    initialState,
    reducers: {
        setRepositories: (state, action: PayloadAction<IRepository[]>) => {
            state.repositories = action.payload;

        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSelectedLanguage: (state, action: PayloadAction<string>) => {
            state.selectedLanguage = action.payload;
            state.resetPagination = state.selectedLanguage === action.payload;
            // Reset the page to 1 when the language changes.
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
            
        },
        setRepoNumber: (state, action: PayloadAction<number>) => {
            state.repoNumber = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchRepos.pending, (state, action) => {
            state.loading = true;
        }),

            builder.addCase(fetchRepos.fulfilled, (state, action) => {
                state.resetPagination = false;
                state.repositories = action.payload.items;
                state.repoNumber = action.payload.total_count;
                state.error = action.payload.error;
                state.loading = false;
            })


    },
});

export const repositoryActions = repositorySlice.actions;

export default repositorySlice.reducer;