import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="container-fluid log-con">
      <form class="shadow p-3 mb-5 bg-body rounded ">
        <div class="mb-3 log-head">Login</div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Username
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Type your Username"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Type your password"
          />
          <div className="form-text text-end">
            <a class="form-text text-end">forget password?</a>
          </div>
        </div>

        <button type="submit" class="btn  btn-outline-success log-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
