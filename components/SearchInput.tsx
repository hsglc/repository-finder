
import { SyntheticEvent } from 'react'
import useStoreSlice from '../hooks/useStoreSlice'
import { fetchRepos, repositoryActions } from '../store/repository-slice'
import { useAppDispatch } from '../hooks/useStore'

const SearchInput = () => {
  const dispatch = useAppDispatch()

  const { search, selectedLanguage, page } = useStoreSlice()

  const searchHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(fetchRepos({ page, selectedLang: selectedLanguage, search }))
  }

  return (
    <form className='search' onSubmit={searchHandler}>
      <input value={search} onChange={e => dispatch(repositoryActions.setSearch(e.target.value))} className='searchInput' placeholder='Search (Press enter after typing)' />
      <img src="/img/search.png" className='absolute left-3 top-1.5' />
    </form>
  )
}

export default SearchInput