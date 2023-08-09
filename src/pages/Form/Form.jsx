import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Form = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch(`https://unicampus-server.vercel.app/admission`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Admission successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    };
    return (
        <div className="w-full px-2 my-10">
            <SectionTitle heading="Admission Form" ></SectionTitle>
            <div className='lg:w-9/12 lg:p-8 mx-auto bg-gray-800 rounded-md text-gray-100 p-5'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Institute Name*</span>
                        </label>
                        <input type="text" placeholder="Institute Name"
                            {...register("institute_name", { required: true, maxLength: 120 })}
                            className="input input-bordered rounded-md w-full text-gray-900 h-10 px-2" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Subject Name*</span>
                        </label>
                        <input type="text" placeholder="Subject Name"
                            {...register("subject_name", { required: true, maxLength: 120 })}
                            className="input input-bordered rounded-md w-full text-gray-900 h-10 px-2" />
                    </div>


                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Candidate Name*</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder={user?.displayName}
                            {...register("candidate_name", { required: true, maxLength: 120 })}
                            className="input input-bordered rounded-md w-full text-gray-900 h-10 px-2" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Candidate Email*</span>
                        </label>
                        <input type="email" defaultValue={user?.email} placeholder={user?.email}
                            {...register("email", { required: true })}
                            className="input input-bordered rounded-md w-full text-gray-900 h-10 px-2" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Phone*</span>
                        </label>
                        <input type="phone" {...register("phone", { required: true })} placeholder="Type here" className="input input-bordered rounded-md w-full text-gray-900 h-10 px-2" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Date of Birth*</span>
                        </label>
                        <input type="date" placeholder="Date of Birth"
                            {...register("birth-date", { required: true, maxLength: 120 })}
                            className="input input-bordered rounded-md w-full text-gray-900 h-10 px-2" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Address*</span>
                        </label>
                        <input type="address" {...register("address", { required: true })} placeholder="Type here" className="input input-bordered rounded-md w-full text-gray-900 h-10 px-2" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Candidate Image*</span>
                        </label>
                        <input type="file" {...register("candidate_image", { required: true })} className="file-input file-input-bordered rounded-md w-full h-10 px-2" />
                    </div>
                    <div className='flex justify-center'>
                        <input className="btn px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900 mt-4" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;