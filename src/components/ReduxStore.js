import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/index";

function ReduxStore(props) {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    props.fetchUser();
  }, []);

  return (
    <div>
      <button
        className={
          "border-2 hover:text-white bg-blue-100 hover:bg-blue-400 focus:outline-none  duration-100 rounded-sm px-4 py-1 " +
          (!hidden ? "bg-blue-400 border-black" : "border-blue-400")
        }
        onClick={() => setHidden(!hidden)}
      >
        Redux Store
      </button>
      <div
        className={
          "mt-5 absolute flex flex-col justify-center items-center bg-blue-100 border-4 border-blue-600 shadow-lg p-1 " +
          (hidden ? "hidden" : null)
        }
      >
        <div className="text-center border-b border-gray-400 p-2">
          <p>Redux Store</p>
        </div>

        <p>username - {props.user ? props.user.username : "Null"}</p>
        <p className="truncate">id - {props.user ? props.user._id : "Null"}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    user: state.user,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxStore);
