import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Colleges = () => {
    const [college, setCollege] = useState([])
    useEffect(() => {
        fetch("https://unicampus-server.vercel.app/collegesTop")
            .then(res => res.json())
            .then(data => {
                setCollege(data);
            })
    }, [])
    return (
        <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
            <div className="container lg:w-10/12 p-6 mx-auto space-y-6 sm:space-y-12">
                <div rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:dark:bg-gray-900">
                    <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                        <span className="text-xs dark:dark:text-gray-400">February 19, 2021</span>
                        <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                        <button rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Details</button>
                    </div>
                </div>
                <SectionTitle heading="World's best University"></SectionTitle>
                <div className='lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto my-8'>
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
                {/* <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:dark:bg-gray-900 dark:dark:text-gray-400">Load more posts...</button>
                </div> */}
            </div>
        </section>
    );
};

export default Colleges;