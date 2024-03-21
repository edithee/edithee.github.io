import { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';


import JobListing from './JobListing';
import Spinner from './Spinner';
// import jobs from '../jobs.json';

const JobListings = ({ isHome = false }) => {

    // console.log(jobs);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {

            const apiURL = isHome ? 'http://localhost:8000/jobs?_limit=3' : 'http://localhost:8000/jobs';

            try {
                const res = await fetch(apiURL);
                const data = await res.json();
                setJobs(data);

            } catch (error) {
                console.log('err fetching data', error);

            } finally {
                setLoading(false);
            }
        }
        fetchJobs();
    }, []); //empty array to avoid loop

    const jobListings = isHome ? jobs.slice(0, 3) : jobs;

    return (
        < section className="bg-blue-50 px-4 py-10" >
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'Browse All Jobs'}
                </h2>


                {loading ? (<Spinner loading={loading} />) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            jobs.map((job) => (
                                <JobListing key={job.id} job={job} />
                            ))
                        }
                    </div>
                )}



            </div>

        </section >
    );
};

export default JobListings;