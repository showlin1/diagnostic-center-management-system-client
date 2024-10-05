import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../Shared/LoadingSpinner'

const SignUp = () => {
    const [districts, setDistricts] = useState([])
    const [upazilas, setUpazilas] = useState([])
    const [loading, setLoading] = useState(false)

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
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                    <p className='text-sm text-gray-400'>Welcome to Digital Diagnostic Center</p>
                </div>
                <form
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
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
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
                            <label htmlFor='category' className='block text-gray-600'>
                                Blood Group
                            </label>
                            <select
                                required
                                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
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
                            <label htmlFor='category' className='block text-gray-600'>
                                District
                            </label>
                            <select
                                required
                                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
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
                            <label htmlFor='category' className='block text-gray-600'>
                                Upazila
                            </label>
                            <select
                                required
                                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
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
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
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
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-rose-500 w-full rounded-md py-3 text-white'
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?{' '}
                    <Link
                        to='/login'
                        className='hover:underline hover:text-rose-500 text-gray-600'
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}

export default SignUp