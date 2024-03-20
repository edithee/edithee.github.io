import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    // <div>App</div>
    <>
      <Navbar />
      <Hero title='Test Title' subtitle='This is a subtitly' />

      <HomeCards />

      <JobListings />

      <ViewAllJobs />


    </>
  );
};

export default App;

