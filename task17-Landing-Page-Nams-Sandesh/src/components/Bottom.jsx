import React from "react";

function Bottom() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-0">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-2">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-1 sm:mb-0"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhFUXdiDVHnSIqAuGNVx4DbbTNG3ed00uvg&usqp=CAU"
              className="h-16 mr-1 mt-2"
              alt="Captain Underpants"
            />
            <span className="self-center text-l font-semibold whitespace-nowrap dark:text-white">
              Captain Underpants
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-2 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Q&A
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023
          <a href="https://flowbite.com/" className="hover:underline">
            Namkhang-Sandesh-Landing-Page™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Bottom;
