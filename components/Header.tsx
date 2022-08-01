
const Header = () => {
  return (
    <header className='bg-gradient-to-r from-indigo-500 via-blue-400 to-blue-300 text-white py-3 px-1.5 md:p-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-lg md:text-2xl font-bold md:pl-5 tracking-wider'>GITHUB REPOSITORY FINDER</h1>
        <img src="/img/github-logo.png" alt="github-logo" />
      </div>
    </header>
  )
}

export default Header