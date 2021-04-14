export const Title = (props) => {
  return (
    <div className="border-b-2 border-black text-lg p-2">{props.title}</div>
  );
};

export const Sets = (props) => {
  let sets = [];
  for (let i = 0; i < props.sets.length; i++) {
    sets.push(
      <li
        key={i}
        className="border-2 border-black px-2 py-1 rounded-md bg-gray-200 truncate"
      >
        {props.sets[i]}
      </li>
    );
  }

  return sets;
};

export const Set = (props) => {
  return <div>{props.setName}</div>;
};

export const Image = (props) => {
  return (
    <div className="m-2">
      <img
        className="rounded-xl border-2 border-gray-600"
        src={`http://localhost:4000/${props.mediaUrl}`}
      />
    </div>
  );
};
