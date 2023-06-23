const Form = () => {
  let client;
  return (
    <>
      <div className="p-10 text-bold color-blue">
        <div className="mb-4">
          <label className="text-gray-800 p-4" htmlFor="nombre">
            Name:
          </label>
          <input
            id="nombre"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Customer name"
            name="name"
            defaultValue={client?.name ?? ""}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800 " htmlFor="company">
            Company:
          </label>
          <input
            id="empresa"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Client Company"
            name="company"
            defaultValue={client?.company ?? ""}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="email">
            E-mail:
          </label>
          <input
            id="email"
            type="email"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Customer Email"
            name="email"
            defaultValue={client?.email ?? ""}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="phone">
            Phone:
          </label>
          <input
            id="telefono"
            type="tel"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Customer Phone"
            name="phone"
            defaultValue={client?.phone ?? ""}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="notes">
            Notes:
          </label>
          <textarea
            id="notas"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
            placeholder="Client Notes"
            name="notas"
            defaultValue={client?.notes ?? ""}
          />
        </div>
      </div>
    </>
  );
};

export default Form;
