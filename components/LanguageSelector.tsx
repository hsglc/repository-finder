import React from 'react'
import Checkbox from './Checkbox'

const LanguageSelector = () => {
    return (
        <form className='flex items-center gap-1.5'>
            <Checkbox label="JavaScript" value="Javascript" />
            <Checkbox label="Scala" value="Scala" />
            <Checkbox label="Go" value="Go" />
        </form>
    )
}

export default LanguageSelector