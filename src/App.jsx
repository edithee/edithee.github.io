import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import HomeCards from './components/HomeCards';
// import JobListings from './components/JobListings';
// import ViewAllJobs from './components/ViewAllJobs';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import E404Page from './pages/E404Page';
import JobPage from './pages/JobPage';


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} />
      <Route path='*' element={<E404Page />} />
    </Route>
  )
);

const App = () => {

  return <RouterProvider router={router} />;

};

export default App;

