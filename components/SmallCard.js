import Image from "next/image"
const SmallCard = ({img, location, distance}) => {
    return (
        <div className="flex space-x-4 items-center m-2 mt-5 rounded-xl cursor-pointer 
        hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out">
            {/* left */}
            <div className="relative w-16 h-16"><Image
                src={img}
                layout='fill'
                className='rounded-lg'
                alt="image"
            /></div>
            {/* right */}
            <div>
                <h2>
                    {location}
                </h2>
                <h3 className="text-gray-500">
                    {distance}
                </h3>
            </div>
        </div>
    )
}

export default SmallCard
