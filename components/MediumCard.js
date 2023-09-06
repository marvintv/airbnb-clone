
import Image from 'next/image'

const MediumCard = ({img, title}) => {


    return (
        <div className="hover:scale-105 cursor-pointer transform transition duration-300 ease-out">
            <div className="relative w-80 h-80">
                <Image src={img} alt={title} layout="fill" className="rounded-xl"/>
            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
            
        </div>
    )
}

export default MediumCard
