import ReactPaginate from "react-paginate";
import { fetchRepos, repositoryActions } from "../store/repository-slice";
import { useAppDispatch } from '../hooks/useStore'
import useStoreSlice from '../hooks/useStoreSlice';

interface IProps {
  itemsPerPage: number;
}

function Pagination({ itemsPerPage }: IProps) {
  const dispatchRepositories = useAppDispatch();
  const { search, repoNumber, page, resetPagination, selectedLanguage } = useStoreSlice();

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = event.selected + 1;
    dispatchRepositories(repositoryActions.setPage(newOffset));
    dispatchRepositories(fetchRepos({ page: newOffset, selectedLang: selectedLanguage, search }));
  };

  return (
    <>
      <ReactPaginate
        breakLabel=".."
        nextLabel="Next"
        previousLabel="Previous"
        containerClassName="pagination"
        pageClassName="page"
        breakClassName="break"
        nextClassName="prev-next-pagination-button"
        previousClassName="prev-next-pagination-button"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        forcePage={resetPagination ? 0 : page - 1}
        // Only the first 1000 search results are available, so I limited the number of pages to 50."
        pageCount={Math.ceil(repoNumber / itemsPerPage) < 50 ? Math.ceil(repoNumber / itemsPerPage) : 50}
        activeLinkClassName="active-pagination-button"
        pageLinkClassName="link-pagination-button"
      />
    </>
  );
}

export default Pagination;
