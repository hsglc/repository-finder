import { useAppSelector } from './useStore'

const useStoreSlice = () => {
    const selectedLanguage = useAppSelector((state: any) => state.repository.selectedLanguage);
    const search = useAppSelector((state: any) => state.repository.search);
    const page = useAppSelector((state: any) => state.repository.page);
    const error = useAppSelector((state: any) => state.repository.error);
    const loading = useAppSelector((state: any) => state.repository.loading);
    const repositories = useAppSelector((state: any) => state.repository.repositories);
    const repoNumber = useAppSelector((state: any) => state.repository.repoNumber);
    const resetPagination = useAppSelector((state: any) => state.repository.resetPagination);

    return {
        selectedLanguage, search, page, error, loading, repositories, repoNumber, resetPagination
    };

}

export default useStoreSlice;