import mboalogo from '../assets/images/mboalogo.svg'

function Navbar() {
    return (
        <nav className='px-6  md:w-1/2 mx-auto flex justify-between'>
            <img src={mboalogo} className='w-40' />
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-black bg-gray-100  ring-1 focus:outline-none ring-black font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center " type="button">
                Language
                <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">English</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">French</a>
                    </li>

                </ul>
            </div>

        </nav>
    )
}

export default Navbar