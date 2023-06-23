import { useEffect, useState } from "react";
import Client from "./Client";

const apiUrl = "https://backend-namkhang.vercel.app/clients";

interface Client {
  company: string;
  email: string;
  id: number;
  name: string;
  notes: string;
  phone: string;
}

// The main purpose of interface is to cath errors.

function home() {
  const [clients, setClients] = useState<Client[]>([]);

  // clients[0].

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setClients(res);
      });
  }, []);

  console.log(clients);

  return (
    <div className="px-4">
      <div className="flex justify-between py-2">
        <h2 className="text-2xl font-bold mb-4">
          The List of Fakebook Friends:
        </h2>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => {
              return (
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {client.id}
                  </th>
                  <td className="px-6 py-4">{client.company}</td>
                  <td className="px-6 py-4">{client.name}</td>
                  <td className="px-6 py-4">{client.email}</td>
                  <td className="px-6 py-4">{client.phone}</td>
                  <td className="px-6 py-4">{client.notes}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default home;

// here we access the data from the api to state to be displayed on our home page.
