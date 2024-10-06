import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoadingSpinner from '../Shared/LoadingSpinner'
import toast from 'react-hot-toast'
import useAuth from '../../hooks/useAuth'
import { Helmet } from 'react-helmet-async'
import { imageUpload } from '../../api/utils'
import { TbFidgetSpinner } from 'react-icons/tb'

const SignUp = () => {
    const [districts, setDistricts] = useState([])
    const [upazilas, setUpazilas] = useState([])
    const navigate = useNavigate();
    const { createUser, updateUserProfile, loading, setLoading } = useAuth();


    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const bloodGroup = form.bloodGroup.value;
        const district = form.district.value;
        const upazila = form.upazila.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const image = form.image.files[0];

        try {
            setLoading(true);
            // 1. Upload image and get image url
            const image_url = await imageUpload(image);
            console.log(image_url)
            // 2. User Registration
            const result = await createUser(email, password);
            console.log(result);

            //  3. Save username and photo in firebase
            await updateUserProfile(name, image_url);
            navigate('/');
            toast.success('SignUp Successful')

        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

    }
    useEffect(() => {
        setLoading(true)
        fetch(`./districts.json`)
            .then(res => res.json())
            .then(data => {
                setDistricts(data);
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        setLoading(true)
        fetch(`./upazilas.json`)
            .then(res => res.json())
            .then(data => {
                setUpazilas(data);
                setLoading(false)
            })
    }, [])



    if (loading) return <LoadingSpinner />

    return (

        <>
            <Helmet>
                <title>Digital Diagnostic Center | SignUp</title>
            </Helmet>
            <div className='flex justify-center items-center min-h-screen m-5 '>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl  font-bold'>Sign Up</h1>
                        <p className='text-sm  text-gray-400'>Welcome to Digital Diagnostic Center</p>
                    </div>
                    <form onSubmit={handleSubmit}
                        noValidate=''
                        action=''
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='image' className='block mb-2 text-sm'>
                                    Select Image:
                                </label>
                                <input
                                    required
                                    type='file'
                                    id='image'
                                    name='image'
                                    accept='image/*'
                                />
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='bloodGroup' className='block text-gray-600'>
                                    Blood Group
                                </label>
                                <select
                                    required
                                    name='bloodGroup'
                                    className='w-full px-4 py-3 border-cyan-300 focus:outline-cyan-500 rounded-md'
                                >
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                </select>
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='district' className='block text-gray-600'>
                                    District
                                </label>
                                <select
                                    required
                                    name='district'
                                    className='w-full px-4 py-3 border-cyan-300 focus:outline-cyan-500 rounded-md'
                                >
                                    {
                                        districts.map(district => (
                                            <option value={district.id} key={district.id}>
                                                {district.name}
                                            </option>
                                        ))
                                    }

                                </select>
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='upazila' className='block text-gray-600'>
                                    Upazila
                                </label>
                                <select
                                    required
                                    name='upazila'
                                    className='w-full px-4 py-3 border-rose-300 focus:outline-cyan-500 rounded-md'
                                >
                                    {
                                        upazilas.map(upazila => (
                                            <option value={upazila.id} key={upazila.id}>
                                                {upazila.name}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    type='password'
                                    name='password'
                                    autoComplete='new-password'
                                    id='password'
                                    required
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900'
                                />
                            </div>
                            <div>
                                {/* Confirm Password */}
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Confirm Password
                                    </label>
                                </div>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    autoComplete='new-password'
                                    id='confirmPassword'
                                    placeholder="Confirm Password"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <div>
                                <button
                                    disabled={loading}
                                    type='submit'
                                    className='bg-cyan-500 w-full rounded-md py-3 text-white'
                                >
                                    {loading ? <TbFidgetSpinner className='animate-spin m-auto'></TbFidgetSpinner> : 'Continue'}
                                </button>
                            </div>
                        </div>
                    </form>

                    <p className='px-6 text-sm text-center text-gray-400 mt-5'>
                        Already have an account?{' '}
                        <Link
                            to='/login'
                            className='hover:underline hover:text-cyan-500 text-gray-600'
                        >
                            Login
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignUp