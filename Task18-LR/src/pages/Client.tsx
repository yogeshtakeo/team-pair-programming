function Client() {
  return (
    <tr className="border-b">
      <td className="p-6">
        <p className="text-2xl text-gray-800">name</p>
        <p>C Company</p>
      </td>
      <td className="p-6">
        <p className="text-2xl text-center text-gray-600">
          <span className="text-gray-800 font-bold">Email: </span>
          c@gmail.com
        </p>
        <p className="text-2xl text-center text-gray-600">
          <span className="text-gray-800 font-bold">Telefono: </span>
          +1478954525
        </p>
      </td>
      <td className="p-6 flex gap-3 text-center">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
        >
          Edit
        </button>

        <button
          type="submit"
          className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Client;
