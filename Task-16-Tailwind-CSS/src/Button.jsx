function Button(props) {
  return (
    <button className="bg-blue-500 bg-opacity-100 h-full p-10 rounded-md .bottom-10">
      {props.children}
    </button>
  );
}

export default Button;
