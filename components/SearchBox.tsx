import React from 'react'
import LanguageSelector from './LanguageSelector'
import SearchInput from './SearchInput'

const SearchBox = () => {
    return (
        <div className='flex flex-col gap-12 mt-8 mx-1.5 md:mx-0'>
            <SearchInput />
            <LanguageSelector />
        </div>
    )
}

export default SearchBox