import ReactPaginate from "react-paginate";
import { fetchRepos } from "../store/repository-slice";
import { useAppDispatch, useAppSelector } from '../hooks/types'

interface IProps {
  itemsPerPage: number;
}

function Pagination({ itemsPerPage }: IProps) {
  // We start with an empty list of items.
  const dispatchRepositories = useAppDispatch();
  const search = useAppSelector((state: any) => state.repository.search);
  const repoNumber = useAppSelector((state: any) => state.repository.repoNumber);
  const resetPagination = useAppSelector((state: any) => state.repository.resetPagination)
  const selectedLanguage = useAppSelector(
    (state: any) => state.repository.selectedLanguage
  )

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = event.selected + 1;
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
        pageRangeDisplayed={3}
        forcePage={resetPagination ? 0 : undefined}
        // Only the first 1000 search results are available, so I limited the number of pages to 50."
        pageCount={Math.ceil(repoNumber / itemsPerPage) < 50 ? Math.ceil(repoNumber / itemsPerPage) : 50}
        activeLinkClassName="active-pagination-button"
        pageLinkClassName="link-pagination-button"
      />
    </>
  );
}

export default Pagination;
