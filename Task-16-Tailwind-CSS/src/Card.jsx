function Card(props) {
  return (
    <card className="max-w-sm rounded overflow-hidden shadow-lg px-6 pt-4 pb-2 bg-emerald-600">
      {props.children}
    </card>
  );
}

export default Card;
