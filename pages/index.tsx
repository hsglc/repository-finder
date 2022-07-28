import Table from '../components/RepositoryTable/Table'
import Pagination from '../components/Pagination'
import SearchBox from '../components/SearchBox'
import Header from '../components/Header'
import RepositoryCard from '../components/RepositoryCard'
import { useSelector } from 'react-redux'
import Head from 'next/head'

const Home = () => {
  const repoNumber = useSelector((state: any) => state.repository.repoNumber)
  
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Github Repository Finder</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className='centered'>
        <SearchBox />
        <p className='font-semibold -mb-4 mt-2 ml-1.5 text-gray-400'>Showing <span className='text-gray-700'>{repoNumber}</span> repositories</p>
        <Table />
        <RepositoryCard />
        <Pagination itemsPerPage={5} items={repoNumber}  />
      </main>
    </div>

  )
}

export default Home

