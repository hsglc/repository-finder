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
  useEffect(() => {
    dispatch(fetchRepos({ page: 1, selectedLang: 'Javascript', search: '' }))
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


