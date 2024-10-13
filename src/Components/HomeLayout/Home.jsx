import { React } from "react"
import { HeroSection, Destinations, PopularTours, TaxiServices, Testimonial } from "../HomeLayout/index";

const Home = () => {

    return (
        <>
            <div>
                <HeroSection />
                <Destinations />
                <PopularTours />
                <TaxiServices />
                <Testimonial />
            </div>
        </>
    )
}

export default Home;