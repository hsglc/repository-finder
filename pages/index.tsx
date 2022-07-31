import Table from '../components/RepositoryTable/Table'
import Pagination from '../components/Pagination'
import SearchBox from '../components/SearchBox'
import Header from '../components/Header'
import RepositoryCard from '../components/RepositoryCard'
import Head from 'next/head'
import { useAppDispatch } from '../hooks/useStore'
import { fetchRepos } from '../store/repository-slice'
import { useEffect } from 'react'
import Spinner from '../components/Spinner'
import useStoreSlice from '../hooks/useStoreSlice'

const Home = () => {

  const dispatch = useAppDispatch()
  const {page,selectedLanguage, search, error,loading} = useStoreSlice()


  useEffect(() => {
    dispatch(fetchRepos({ page: page || 1, selectedLang: selectedLanguage || 'Javascript', search: search || '' }))
  }, [])

  return (
    <div className='flex flex-col'>
      <Head>
        <title>Github Repository Finder</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className='centered'>
        {loading && !error  ? <Spinner message="Loading..." />
          : <>
            <SearchBox />
            <Table />
            <RepositoryCard />
            <Pagination itemsPerPage={5} />
          </>}
        {error && <Spinner message="You have reached the search limit. Please try again later!" />}
      </main>
    </div >

  )
}

export default Home


