import React, { useState } from 'react'

const Login = (props) => {
    const [ form, setForm ] = useState({})

    const handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setForm(prevState => ({ ...prevState, [ name ]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('hi')
        props.history.push('/profile');
    }

    return (
        <div className="flex">
            <div className="w-1/4 lg:w-1/3"></div>
            <div className="w-2/4 lg:w-1/3 p-4 bg-white mt-10">
                <form className="p-4" onSubmit={handleSubmit}>
                    <h1 className="text-4xl">Ping Here</h1>
                    <div className="mt-4">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input type="email" name="email" placeholder="Your Email" onChange={handleInput}
                            className="mt-2 p-2 bg-gray-200 rounded border border-gray-400 w-full" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input type="password" name="password" placeholder="Your Password" onChange={handleInput}
                            className="mt-2 p-2 bg-gray-200 rounded border border-gray-400 w-full" />
                    </div>
                    <div className="mt-4">
                        <input type="submit"
                            className="mt-2 p-2 border border-gray-400 rounded cursor-pointer bg-purple-500 hover:bg-purple-600 text-white" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
