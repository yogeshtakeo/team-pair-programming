import { useEffect, useState } from "react";
import { IClient } from "../types/data";
// import Client from "./Client";

// const apiUrl = "https://backend-sandesh.vercel.app/clients";
  const apiUrl = " http://localhost:3000/clients";


function Home() {
  
  
  const [clients, setClients] = useState<IClient[]>([]);


  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setClients(res);
      });
  }, []);

  console.log(clients);

  return (
    <>
    {/* bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 ... */}
    <div className="bg-indigo-600 text-white drop-shadow-lg">
      <div className="flex justify-center text-xl m-3">This site is under construction.</div>
      <div className="flex justify-center text-xl m-2">Visit us again.</div>
      
    </div>
    <div className="flex justify-center text-xl mb-5 text-red-500">Here is the list of all users so far.</div>
    <div className="px-4 ">
      {/* <div className="flex justify-between py-2">
        <h2 className="text-2xl font-bold mb-4">
          The List of Fakebook Friends:
        </h2>
      </div> */}

      <div className="relative overflow-x-auto ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Password
              </th> */}
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((user) => {
              return (
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.id}
                  </th>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.fName}</td>
                  <td className="px-6 py-4">{user.country}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div></>
  );
}

export default Home

// here we access the data from the api to state to be displayed on our home page.
