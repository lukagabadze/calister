import api from "../../../api";
import { Link } from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL;

export const Title = ({ title, author = {} }) => {
  const { username, media } = author;
  return (
    <div className="w-full flex space-x-2 m-2 truncate">
      <div className="flex-none">
        <Link to={`/profile/${author._id}`}>
          <img
            className="w-14 h-14 object-cover rounded-full hover:opacity-70 transition duration-75"
            src={`${apiUrl}/${media}`}
            alt=""
          />
        </Link>
      </div>
      <div className="w-full flex-grow truncate">
        <Link to={`/profile/${author._id}`}>
          <div className="text-sm underline hover:text-pink-700 transition duration-75">
            {username}
          </div>
        </Link>
        <div className="text-xl truncate">{title}</div>
      </div>
    </div>
  );
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
        src={`${apiUrl}/${media}`}
      />
    </div>
  );
};

export const Logo = ({ media = "default.jpg" }) => {
  return (
    <div className="w-10 h-10">
      <img
        src={`${apiUrl}/${media}`}
        alt=""
        className="object-cover w-full h-full rounded-xl border-2 border-black"
      />
    </div>
  );
};

export const Heart = ({ seshId, hearted, setHearted }) => {
  const heartOnClickHandler = async () => {
    setHearted(!hearted);
    api.heart(seshId);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="#FC2121"
      fill={hearted ? "#FC2121" : "none"}
      className={`w-10 h-10 cursor-pointer m-1 ${
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
