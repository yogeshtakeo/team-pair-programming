function Form(props) {
  return (
    <form className="bg-orange-300 h-full p-4 rounded-md ">
      {props.children}
    </form>
  );
}

export default Form;
