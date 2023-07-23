import React from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold">Contacts</h2>
            <div className="overflow-x-auto">
                <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                    <thead>
                        <tr className="dark:dark:bg-gray-700">
                            <th className="p-3">A-Z</th>
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
                        <tr>
                            <td className="px-3 text-2xl font-medium dark:dark:text-gray-400">A</td>
                            <td className="px-3 py-2">
                                <p>Dwight Adams</p>
                            </td>
                            <td className="px-3 py-2">
                                <span>UI Designer</span>
                                <p className="dark:dark:text-gray-400">Spirit Media</p>
                            </td>
                            <td className="px-3 py-2">
                                <p>555-873-9812</p>
                            </td>
                            <td className="px-3 py-2">
                                <p>dwight@adams.com</p>
                            </td>
                            <td className="px-3 py-2">
                                <p>71 Cherry Court, SO</p>
                                <p className="dark:dark:text-gray-400">United Kingdom</p>
                            </td>
                            <td className="px-3 py-2">
                                <Link to="/form" type="button" className=" px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Admission</Link>
                            </td>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Admission;