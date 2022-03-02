import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(formState);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="login-container d-flex justify-content-center align-items-center ">
      <div className="col-12 col-md-6">
        <div className="card text-white bg-dark">
          <h4 className="card-header text-center">Login</h4>
          <div className="card-body align-text-center">
            <form onSubmit={handleFormSubmit}>
              <div className="form-group mb-2">
                <label>Email address</label>
                <input
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-4">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <button type="submit" className="btn btn-danger btn-block">
                  Submit
                </button>
              </div>
            </form>

            {error && <div>Login failed</div>}
          </div>
          <p>
            <Link
              data-testid="signup"
              style={{ textDecoration: "none" }}
              to="/signup"
              className="nav-link"
            >
              Signup now!
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
