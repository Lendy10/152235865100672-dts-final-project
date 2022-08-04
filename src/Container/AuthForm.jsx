import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    auth,
    login,
    register,
} from "../Auth/authentication";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from '../Assets/logo.png'

export const AuthForm = (props) => {
    const navigate = useNavigate();

    const [user, isLoading] = useAuthState(auth);

    const [credential, setCredential] = useState({
        email: "",
        password: "",
    });

    const emailHandler = (event) => {
        setCredential({
            ...credential,
            email: event.target.value,
        });
    };

    const passwordHandler = (event) => {
        setCredential({
            ...credential,
            password: event.target.value,
        });
    };

    const loginHandler = () => {
        login(credential.email, credential.password);
    };

    const registerHandler = () => {
        register(credential.email, credential.password);
    };

    const authOnClickHandler = () => {
        if (props.note === "login") {
            loginHandler();
        } else {
            registerHandler();
        }
    };

    useEffect(
        () => {
            if (user) {
                navigate("/");
            }
        },
        [user, isLoading, navigate]
    );

    return (
        <>
            <div className="my-10">
                <div className="flex justify-center">
                    <a href="/">
                        <img
                            alt=""
                            className="h-14 w-14"
                            src={logo} />
                    </a>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    {props.note === 'login' ? 'Login to your account' : 'Signup Now!!'}
                </h2>
                {
                    props.note === 'login' ?
                        <p className="text-center text-sm text-gray-600 mt-5">
                            Don't have an account yet? {' '}
                            <Link to='/register' className="font-medium text-purple-600 hover:text-purple-500">
                                Signup
                            </Link>
                        </p>
                        :
                        <p className="text-center text-sm text-gray-600 mt-5">
                            Already Have an Account? {' '}
                            <Link to='/login' className="font-medium text-purple-600 hover:text-purple-500">
                                Login
                            </Link>
                        </p>
                }
            </div>
            <form className="mt-8 space-y-6">
                <div className="flex justify-center items-center flex-col">
                    <div className="my-5 w-96">
                        <label htmlFor='Username' className="sr-only">
                            Email
                        </label>
                        <input
                            value={credential.email}
                            onChange={emailHandler}
                            type='text'
                            className='rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'
                            placeholder='Enter Email'
                        />
                    </div>
                    <div className="my-5 w-96">
                        <label htmlFor='Username' className="sr-only">
                            Password
                        </label>
                        <input
                            value={credential.password}
                            onChange={passwordHandler}
                            type='password'
                            className='rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'
                            placeholder='Enter Password'
                        />
                        <button
                            onClick={authOnClickHandler}
                            type='button'
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                        >
                            {props.note === 'login' ? 'Login' : 'Signup'}
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}


