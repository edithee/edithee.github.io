import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import HomeCards from './components/HomeCards';
// import JobListings from './components/JobListings';
// import ViewAllJobs from './components/ViewAllJobs';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

const App = () => {

  return <RouterProvider router={router} />;

};

export default App;

