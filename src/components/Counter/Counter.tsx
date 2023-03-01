import "./Counter.css";

const Counter = (props: { value: string; duration: string }) => {
  return (
    <div className="container">
      <div>{props.value}</div>
      <p>{props.duration}</p>
    </div>
  );
};

export default Counter;
