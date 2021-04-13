export const Input = (props) => {
  return (
    <input
      className="w-10/12 text-black no-underline m-2 border-2 border-gray-500 rounded"
      type="text"
      placeholder={props.name + "..."}
      value={props.value}
      onChange={props.onChangeHandler}
    />
  );
};

export const Error = ({ error }) => {
  return <div className="text-red-500">{error}</div>;
};

export const PlusSvg = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="black"
      className="stroke-current cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
