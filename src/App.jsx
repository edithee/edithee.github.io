import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import HomeCards from './components/HomeCards';
// import JobListings from './components/JobListings';
// import ViewAllJobs from './components/ViewAllJobs';

import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage />} />)
);

const App = () => {

  return <RouterProvider router={router} />;

};

export default App;


// return (
//   // <div>App</div>
//   <>
//     <Navbar />
//     <Hero title='Test Title' subtitle='This is a subtitly' />

//     <HomeCards />

//     <JobListings />

//     <ViewAllJobs />


//   </>
// );