import RadioButton from './RadioButton'

const LanguageSelector = () => {
    return (
        <form className='flex items-center gap-1.5'>
            <RadioButton label="JavaScript" value="Javascript" />
            <RadioButton label="Python" value="Python" />
            <RadioButton label="Scala" value="Scala" />
        </form>
    )
}

export default LanguageSelector