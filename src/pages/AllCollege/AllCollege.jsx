import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const AllCollege = () => {
    const [college, setCollege] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/colleges")
            .then(res => res.json())
            .then(data => {
                setCollege(data);
            })
    }, [])
    return (
        <>
            <SectionTitle heading="World's best University"></SectionTitle>
            <div className='lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-9/12 mx-auto my-8'>
                {
                    college.map(data =>
                        <div key={data._id} className=" max-w-sm p-2 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:dark:bg-gray-500" src={data.college_image} />
                            <div className="p-4 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{data.college_name}</h3>
                                <p className="text-xs dark:dark:text-gray-400">Admission Date: {data.admission_date}</p>
                                <p>Number of the Research: {data.research}</p>
                                <p>Rating: {data.rating}</p>
                                <button rel="noopener noreferrer" href="#" className="px-8 py-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">Details</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default AllCollege;