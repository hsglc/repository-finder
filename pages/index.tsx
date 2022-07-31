import Table from '../components/RepositoryTable/Table'
import Pagination from '../components/Pagination'
import SearchBox from '../components/SearchBox'
import Header from '../components/Header'
import RepositoryCard from '../components/RepositoryCard'
import Head from 'next/head'
import { useAppDispatch, useAppSelector } from '../hooks/types'
import { fetchRepos } from '../store/repository-slice'
import { useEffect } from 'react'

const Home = () => {

  const dispatch = useAppDispatch()
  const page = useAppSelector(state => state.repository.page)
  const selectedLanguage = useAppSelector(state => state.repository.selectedLanguage)
  const search = useAppSelector(state => state.repository.search)

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
        <SearchBox />
        <Table />
        <RepositoryCard />
        <Pagination itemsPerPage={5}  />
      </main>
    </div>

  )
}

export default Home


