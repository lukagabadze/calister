export const Title = ({ title }) => {
  return <div className="border-b-2 border-black text-lg p-2">{title}</div>;
};

export const Sets = ({ sets = [] }) => {
  let setsJSX = [];
  sets.forEach((set, ind) => {
    setsJSX.push(
      <li
        key={ind}
        className="border-2 border-black px-2 py-1 rounded-md bg-gray-100 truncate"
      >
        {set}
      </li>
    );
  });
  return setsJSX;
};

export const Set = ({ setName }) => {
  return <div>{setName}</div>;
};

export const Image = ({ media }) => {
  return (
    <div className="m-2">
      <img
        className="rounded-xl border-2 border-gray-600"
        src={`http://localhost:4000/${media}`}
      />
    </div>
  );
};

export const Logo = ({ mediaUrl = "default.jpg" }) => {
  return (
    <img
      src={`http://localhost:4000/${mediaUrl}`}
      alt=""
      className="w-8 h-8 rounded-full"
    />
  );
};
