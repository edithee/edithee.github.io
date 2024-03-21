import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
    return (
        <>
            <Hero title='Test Title' subtitle='This is a subtitly' />
            <HomeCards />
            <JobListings />
            <ViewAllJobs />
        </>
    );
};

export default HomePage;