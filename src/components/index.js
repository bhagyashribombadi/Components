import React from "react";
import Home from "./Home";
import Login from "./Login";

const Main = () => {
  return (
    <div>
      {/* <Home /> */}
      <div className="container">
        <div className="row  vh-100">
          <div className="col-sm"></div>
          <div className="col-sm"></div>
          <div className="col-sm">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
