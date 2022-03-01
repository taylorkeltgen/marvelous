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
		<main className="flex-row justify-center mb-4">
			<div className="col-12 col-md-6">
				<div className="card">
					<h4 className="card-header">Login</h4>
					<div className="card-body">
						<form onSubmit={handleFormSubmit}>
							<input
								className="form-input"
								placeholder="Your email"
								name="email"
								type="email"
								id="email"
								value={formState.email}
								onChange={handleChange}
							/>
							<input
								className="form-input"
								placeholder="******"
								name="password"
								type="password"
								id="password"
								value={formState.password}
								onChange={handleChange}
							/>
							<button className="btn d-block w-100" type="submit">
								Submit
							</button>
						</form>

						{error && <div>Login failed</div>}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Login;
