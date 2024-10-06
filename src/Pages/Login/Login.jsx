import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { TbFidgetSpinner } from 'react-icons/tb';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';
    const { signInWithGoogle, signIn, loading, setLoading, resetPassword } = useAuth();
    const [email, setEmail] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        try {
            setLoading(true);
            // 1. Sign in user
            await signIn(email, password);
            navigate(from);
            toast.success('SignUp Successful')

        } catch (err) {
            console.log(err);
            toast.error(err.message);
            setLoading(false);
        }

    }

    const handleResetPassword = async () => {
        if (!email) return toast.error('Please write your email first!');
        try {
            await resetPassword(email)
            toast.success('Request Success! Check your email for further process....');
            setLoading(false);
        } catch (err) {
            console.log(err);
            toast.error(err.message);
            setLoading(false);
        }
        console.log(email);
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                    <p className='text-sm text-gray-400'>
                        Sign in to access your account
                    </p>
                </div>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                onBlur={e => setEmail(e.target.value)}
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
                                autoComplete='current-password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                        <div className='space-y-1'>
                            <button onClick={handleResetPassword} className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
                                Forgot password?
                            </button>
                        </div>
                    </div>

                    <div>
                        <button
                            disabled={loading}
                            type='submit'
                            className='bg-rose-500 w-full rounded-md py-3 text-white'
                        >
                            {loading ? (<TbFidgetSpinner className='animate-spin m-auto'></TbFidgetSpinner>) : ('Login')}
                        </button>
                    </div>
                </form>


                <p className='px-6 text-sm text-center text-gray-400 mt-5'>
                    Don&apos;t have an account yet?{' '}
                    <Link
                        to='/signup'
                        className='hover:underline hover:text-rose-500 text-gray-600'
                    >
                        Sign up
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}

export default Login