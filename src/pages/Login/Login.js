import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';
import { FcGoogle } from 'react-icons/fc';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, PassError] =
        useSendPasswordResetEmail(auth);
    const [token] = useToken(user || gUser)

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        getValues,
    } = useForm();



    const onSubmit = async (data) => {
        const { email, password } = data;
        await signInWithEmailAndPassword(email, password);
        reset();
    };
    const handleResetPassword = async () => {
        const email = getValues("email");
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success("Password Reset Email Sent Successfully");
            reset();
        } else {
            toast.info("Please Provide Email First");
        }
    };

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, token]);


    let errorMessage;

    if (error || PassError) {
        errorMessage = <p className="text-red-500">{error?.message || PassError?.message}</p>;
    }
    if (loading || gLoading || sending) {
        errorMessage = "";
        return <Spinner></Spinner>;
    }
    return (
        <div className='flex flex-col h-screen w-full items-center justify-center'>
            <div className="w-11/12 md:w-1/3 mx-auto mb-10 shadow-xl p-5 rounded-md">
                <h1 className='text-start text-accent text-3xl font-semibold mb-5'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required",
                                },
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Provide a valid email",
                                },
                            })}
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                        />
                        <label className="label">
                            {errors.email?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.email.message}
                                </span>
                            )}
                            {errors.email?.type === "pattern" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.email.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required",
                                }
                            })}
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                        />
                        <label className="label p-0">
                            {errors.password?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.password.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="flex justify-start items-center mb-3">
                        <small>
                            <button onClick={handleResetPassword} type="button">
                                Forgot Password ?
                            </button>
                        </small>
                    </div>
                    {errorMessage}
                    <div className="form-control">
                        <button className="btn btn-accent text-white">Login</button>
                    </div>
                </form>
                <p>
                    <small>
                        New to Tool Kit?{" "}
                        <Link to="/register" className="text-blue-800">
                            Create new account
                        </Link>
                    </small>
                </p>
                <div className="divider my-2">OR</div>
                {gError && <p className="text-red-500">{gError?.message}</p>}
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-accent text-white btn-outline w-full">
                    <FcGoogle className='h-6 w-6 mr-2' /> <span>Continue With Google</span>
                </button>
            </div>
        </div >
    );
};

export default Login;