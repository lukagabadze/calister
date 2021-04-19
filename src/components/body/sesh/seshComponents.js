import axios from "axios";

export const Title = ({ title }) => {
  return <div className="text-lg p-2">{title}</div>;
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

export const Heart = ({ seshId, hearted, setHearted }) => {
  const heartOnClickHandler = async () => {
    await axios.post("http://localhost:4000/sesh/heart", {
      seshId,
    });
    setHearted(!hearted);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="#FC2121"
      fill={hearted ? "#FC2121" : "none"}
      className={`w-10 h-10 cursor-pointer ${
        !hearted ? "hover:fill-current hover:text-red-400" : null
      }`}
      onClick={heartOnClickHandler}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
};
