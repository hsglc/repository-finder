
import { SyntheticEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRepositories } from '../store/repository-actions'
import { repositoryActions } from '../store/repository-slice'

const SearchInput = () => {
  const dispatch = useDispatch()
  const selectedLanguage = useSelector(
    (state: any) => state.repository.selectedLanguage
  );
  const search = useSelector(
    (state: any) => state.repository.search
  )

  const searchHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(fetchRepositories(selectedLanguage, 1, search))
  }

  return (
    <form className='search' onSubmit={searchHandler}>
      <input value={search} onChange={e => dispatch(repositoryActions.setSearch(e.target.value))} className='searchInput' placeholder='Search (Press enter after typing)' />
      <img src="/img/search.png" className='absolute left-3 top-1.5' />
    </form>
  )
}

export default SearchInput