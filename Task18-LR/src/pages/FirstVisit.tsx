import viteLogo from "/vite.svg";
// import React from "react";
import { useState } from "react";


function FirstVisit() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    // export async function getClients() {
    //   const response = await fetch(import.meta.env.VITE_API_URL)
    //   const data = await response.json()
    
    //   return data
    // }
    return (
    <>
      {console.log("first visit")}
      <div className="flex justify-center items-center mt-10 drop-shadow-lg">
        <div className="flex justify-center items-center bg-slate-100">
          <div className="w-auto text-3xl px-6 py-12">
            <div className="flex justify-center  items-center mb-4 ">
              <p>&emsp;Welcome to </p>
              <p className="text-indigo-600"> &nbsp;Fakebook&ensp;</p>
            </div>
            {/* <div className="flex justify-center items-center text-lg mb-4">
                        <p>&emsp;Where everyone is fake </p>
                    </div> */}

            <div>
              <div className="flex justify-center items-center text-sm">
                <p>&emsp;Powered by &nbsp; </p>
              </div>

              <div className="flex justify-center items-center text-sm">
                <img className="h-10 w-auto" src={viteLogo} />
                {/* <img className="h-10 w-auto" src={reactLogo}/> */}
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                />
              </div>
            </div>
          </div>

          <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
            <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={event=> setEmail(event.target.value)}
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                        onChange={event=> setPassword(event.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 mt-10 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <p className=" text-center text-sm text-gray-500 px-6 py-6">
                  Not a member yet?&nbsp;
                  <a
                    href="./add"
                    className="font-semibold leading-6 text-l text-indigo-600 hover:text-indigo-500 ml-2 mr-2"
                  >
                    Sign Up and Add New Friends
                  </a>
                  Now!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstVisit;
