import React from 'react'
import LanguageSelector from './LanguageSelector'
import SearchInput from './SearchInput'
import NumberFormatter from '../components/NumberFormatter'
import { useSelector } from 'react-redux'


const SearchBox = () => {
    const repoNumber = useSelector((state: any) => state.repository.repoNumber)

    return (
        <div className='flex flex-col gap-12 mt-8 mx-1.5 md:mx-0'>
            <SearchInput />
            <div className='md:ml-5'>
                <LanguageSelector />
                <p className='font-semibold -mb-4 mt-2 ml-1.5 text-gray-400'>Showing <span className='text-gray-700'>
                    <NumberFormatter number={repoNumber} />
                </span> repositories</p>
            </div>
        </div>
    )
}

export default SearchBox