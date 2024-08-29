import { React } from "react"
import { HeroSection, Destinations, PopularTours, TaxiServices } from "../HomeLayout/index";

const Home = () => {

    return (
        <>
            <div>
                <HeroSection />
                <Destinations />
                <PopularTours />
                <TaxiServices />
            </div>
        </>
    )
}

export default Home;