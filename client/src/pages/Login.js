// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// const [errorMessages, setErrorMessages] = useState({});
// const [isSubmitted, setIsSubmitted] = useState(false);

// const renderErrorMessage = (name) =>
//   name === errorMessages.name && (
//     <div className="error">{errorMessages.message}</div>
//   );

// const renderForm = (
//     <div className="login-form">
//     <div className="title">Sign In</div>
//       <form>
//         <div className="input-container">
//           <label>Username </label>
//           <input type="text" name="uname" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input type="password" name="pass" required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="button-container">
//           <input type="submit" />
//           <form onSubmit={handleSubmit}></form>
//         </div>
//       </form>
//     </div>
//  );

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

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
		<main className="login-container row d-flex justify-content-center align-items-center ">
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
				</div>
			</div>
		</main>
	);
};

export default Login;
