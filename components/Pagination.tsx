/** @format */

import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories } from "../store/repository-actions";

interface IProps {
  itemsPerPage: number;
  items: number;
}

function Pagination({ itemsPerPage, items }: IProps) {
  // We start with an empty list of items.
  const dispatchRepositories = useDispatch();
  const search = useSelector((state: any) => state.repository.search);
  const selectedLanguage = useSelector(
    (state: any) => state.repository.selectedLanguage
  )


  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = event.selected + 1;
    dispatchRepositories(fetchRepositories(selectedLanguage, newOffset, search));
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
        // Only the first 1000 search results are available, so I limited the number of pages to 50."
        pageCount={Math.ceil(items / itemsPerPage) < 50 ? Math.ceil(items / itemsPerPage) : 50}
        activeLinkClassName="active-pagination-button"
        pageLinkClassName="link-pagination-button"
      />
    </>
  );
}

export default Pagination;
