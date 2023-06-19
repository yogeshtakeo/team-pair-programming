function Button(props) {
  return (
    <button className="bg-blue-600 p-6 rounded-md .bottom-2 gap-5px  hover:bg-gray-400  text-white font-bold border border-blue-900">
      {props.children}
    </button>
  );
}

export default Button;
