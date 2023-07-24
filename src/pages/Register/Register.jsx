import React, { useContext } from 'react';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm();
    const { createUser, updateProfilePic } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                // console.log("logged user", loggedUser);
                updateProfilePic(data.name, data.photo)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email, photo: data.photo, }
                        // axiosSecure.post("/users", savedUser)
                        fetch("http://localhost:5000/users", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log("saved", data)
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your work has been saved',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate(from, { replace: true })
                                }
                            })
                    })
                    .catch(error => console.log(error.message))
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="w-full max-w-md my-8 p-4 mx-auto rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
            <h2 className="mb-3 text-3xl font-semibold text-center">Register to your account</h2>
            <p className="text-sm text-center text-gray-400">Already have account?
                <a href="/login" rel="noopener noreferrer" className="focus:underline hover:underline text-violet-400"> Login here</a>
            </p>
            <SocialLogin></SocialLogin>
            <div className="flex items-center w-full my-4">
                <hr className="w-full text-gray-400" />
                <p className="px-3 text-gray-400">OR</p>
                <hr className="w-full text-gray-400" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Name</label>
                        <input type="text" name="name" id="name" placeholder="Your Name" {...register("name", { required: true })} className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" {...register("email", { required: true })} className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" {...register("password", { required: true })} className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                </div>
                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Register</button>
            </form>
        </div>
    );
};

export default Register;