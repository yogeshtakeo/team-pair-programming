import { useEffect, useState } from "react";
import { IClient } from "../types/data";
// import Client from "./Client";

// const apiUrl = "https://backend-sandesh.vercel.app/clients";
  const apiUrl = " http://localhost:3000/clients";


function home() {
  
  
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
    <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 ...">
      <div className="flex justify-center text-2xl font-bold m-3">Home is under construction.</div>
      <div className="flex justify-center text-xl font-bold m-2">Visit us again.</div>
      <div className="flex justify-center text-2xl mb-5 text-red-500">Here is the fetch data for now.</div>
    </div>
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
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Surname
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
                  <td className="px-6 py-4">{user.password}</td>
                  <td className="px-6 py-4">{user.fName}</td>
                  <td className="px-6 py-4">{user.lName}</td>
                  <td className="px-6 py-4">{user.country}</td>
                  

  {/* street: string;
  city: string;
  state: string;
  zip: string;
  about: string; */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div></>
  );
}

export default home;

// here we access the data from the api to state to be displayed on our home page.