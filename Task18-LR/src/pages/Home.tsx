import { useEffect, useState } from "react";
import { IClient } from "../types/data";

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
    <div className="bg-indigo-600 text-white drop-shadow-lg">
      <div className="flex justify-center text-xl m-3">This site is under construction.</div>
      <div className="flex justify-center text-xl m-2">Visit us again.</div>
      
    </div>
    <div className="flex justify-center text-xl mb-5 text-red-500">Here is the list of all users so far.</div>
    <div className="px-4 ">
      <div className="relative overflow-x-auto ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                UserID 
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((user) => {
              return (
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4"> {user.id}</td>
                  <td className="px-6 py-4">{user.userid}</td>
                  <td className="px-6 py-4">{user.fName}</td>
                  <td className="px-6 py-4">{user.country}</td>
                  <td className="px-6 py-4">{user.street}&ensp;{user.city}&ensp;{user.zip}&ensp;{user.state}</td>
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


