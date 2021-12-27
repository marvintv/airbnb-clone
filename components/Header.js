import Image from 'next/image'
import { SearchIcon,
        GlobeAltIcon,
        MenuIcon,
        UserCircleIcon,
        UsersIcon
} from '@heroicons/react/solid'

const Header = () => {
    return (

        // sticky, navbar stuck to page, stick to top
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
           
            {/* left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
               <Image alt="logo" src="https://links.papareact.com/qd3" objectFit="contain" objectPosition="left"  layout="fill"/>
            </div>

            {/* middle search */}
            <div className="flex flex-row items-center md:border-2 rounded-full py-2 md:shadow-sm">

                <input className="flex-grow pl-5 bg-transparent outline-none text-small text-gray-600 placeholder-gray-400" type="text" placeholder="Start Your Search"/>
                <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 mr-2 cursor-pointer hidden md:inline-flex md:mx-2"/>
            </div>


            {/* right */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">

                {/* inline when medium. show on medium */}
                <p className="hidden md:inline cursor-pointer">Become a Host</p>
                <GlobeAltIcon className="h-6 space-x-2 cursor-pointer"/>

                <div className="flex items-center space-x-2 p-2 rounded-full border-2">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>  

            </div>



        </header>

        
    )
}

export default Header
