import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/router";
import moment from 'moment';
import InfoCard from "../components/InfoCard";
const Search = ({searchResults}) => {
    const router = useRouter();

    const {location, startDate, endDate, numberOfGuests} = router.query;
    // date formatted
    const formattedStartDate =  moment(startDate).format("MMM Do YYYY"); 
    const formattedEndDate =  moment(endDate).format("MMM Do YYYY"); 
    const range = `${formattedStartDate} - ${formattedEndDate}`
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numberOfGuests}`}/>
            {/* Search */}

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs mt-1 px-2">300+ stays - {range}- for {numberOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold mt-1 mb-6">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 white-space-">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>
                    <div className="flex flex-col">
                    {searchResults.map(({img, location, title, description, star, price, total}) =>(
                        <InfoCard 
                        key={img} 
                        img={img}
                        location={location}
                        title={title} 
                        star={star}
                        description={description}
                        price={price}
                        total={total}
                        />
                    ))}

                    </div>
                </section>
            </main>
            <Footer/> </div>
    )
}

export default Search;


export async function getStaticProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").
    then((res) => res.json());

    return {
        props: {
            searchResults
        }
    }
}