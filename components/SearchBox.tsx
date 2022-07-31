import React from 'react'
import LanguageSelector from './LanguageSelector'
import SearchInput from './SearchInput'
import NumberFormatter from '../components/NumberFormatter'
import useStoreSlice from '../hooks/useStoreSlice'


const SearchBox = () => {
    const { repoNumber } = useStoreSlice()

    return (
        <div className='flex flex-col gap-12 mt-8 mx-1.5 md:mx-0'>
            <SearchInput />
            <div className='px-5 flex flex-col md:flex-row md:justify-between md:items-center'>
                <LanguageSelector />
                <p className='font-semibold mt-2 ml-1.5 text-gray-400'>Showing <span className='text-gray-700'>
                    <NumberFormatter number={repoNumber} />
                </span> repositories</p>
            </div>
        </div>
    )
}

export default SearchBox