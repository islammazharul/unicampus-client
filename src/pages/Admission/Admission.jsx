import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Admission = () => {
    const [college, setCollege] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/colleges")
            .then(res => res.json())
            .then(data => {
                setCollege(data);
            })
    }, [])
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:dark:text-gray-100">
            <SectionTitle heading="Admission of University"></SectionTitle>
            <div className="overflow-x-auto">
                <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                    <thead>
                        <tr className="dark:dark:bg-gray-700">
                            {/* <th className="p-3">A-Z</th> */}
                            <th className="p-3">Image</th>
                            <th className="p-3">College Name</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Address</th>
                            <th className="p-3">
                                <span className="sr-only">Admission</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="border-b dark:dark:bg-gray-900 dark:dark:border-gray-700">
                        {
                            college.map(data =>
                                <tr key={data._id}>
                                    {/* <td className="px-3 text-2xl font-medium dark:dark:text-gray-400">A</td> */}
                                    <td className="px-3 py-2">
                                        <img src={data.college_image} className='h-12 w-12' alt="" />

                                    </td>
                                    <td className="px-3 py-2">

                                        <p className="dark:dark:text-gray-400">{data.college_name}</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <p>555-873-9812</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <p>{data.email}</p>
                                    </td>
                                    <td className="px-3 py-2">

                                        <p className="dark:dark:text-gray-400">{data.address}</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <Link to="/form" type="button" className=" px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Admission</Link>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Admission;