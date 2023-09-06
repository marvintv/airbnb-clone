import Image from 'next/image'
import { SearchIcon,
        GlobeAltIcon,
        MenuIcon,
        UserCircleIcon,
        UsersIcon
} from '@heroicons/react/solid'
import { useState } from 'react'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';


const Header = () => {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState(1);


    const handleSelect = (ranges) => {
        console.log(ranges)
            setStartDate(ranges.selection.startDate)
            setEndDate(ranges.selection.endDate)
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const resetInput = () => {
        setSearchInput("")
    }
    return (

        // sticky, navbar stuck to page, stick to top
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
           
            {/* left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
               <Image alt="logo" src="https://links.papareact.com/qd3" objectFit="contain" objectPosition="left"  layout="fill"/>
            </div>

            {/* middle search */}
            <div className="flex flex-row items-center md:border-2 rounded-full py-2 md:shadow-sm">

                <input value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} className="flex-grow pl-5 bg-transparent outline-none text-small text-gray-600 placeholder-gray-400" type="text" placeholder="Start Your Search"/>
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

        {searchInput &&  
            <div className="flex flex-col col-span-3 mx-auto">
                <DateRangePicker
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={["#FD5B61"]}
                    onChange={handleSelect}
                />
                <div className="flex items-center border-b mb-4">
                    <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                    <UsersIcon className="h-5"/>
                    <input min={1} value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} type="number" className="w-12 pl-2 text-lg outline-none text-red-400" />
                </div>
                <div className="flex">
                    {/* emmet for react */}
                    <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
                    <button className="flex-grow text-red-400">Search</button>
                </div>
            </div>
        }
       
        </header>


    )
}

export default Header
