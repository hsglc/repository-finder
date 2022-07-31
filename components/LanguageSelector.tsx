import RadioButton from './RadioButton'

const LanguageSelector = () => {
    return (
        <form className='flex items-center gap-1.5'>
            <RadioButton label="JavaScript" value="Javascript" />
            <RadioButton label="Scala" value="Scala" />
            <RadioButton label="Go" value="go" />
        </form>
    )
}

export default LanguageSelector