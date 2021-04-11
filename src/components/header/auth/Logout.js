import React from "react";
import { Button } from "./AuthComponents";
import { logoutHandler } from "./AuthHandlers";
import { useDispatch } from "react-redux";
import { emptyUser } from "../../../redux/index";

function Logout() {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        onClickHandler={async () => {
          try {
            await logoutHandler();
            dispatch(emptyUser());
            console.log("succesfully logged out");
          } catch (err) {
            console.log(err);
          }
        }}
      >
        Logout
      </Button>
    </div>
  );
}

export default Logout;
