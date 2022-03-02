// import { useState } from 'react';

// export default function Form() {

//   // States for registration
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // States for checking the errors
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);

//   // Handling the name change
//   const handleName = (e) => {
//     setName(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the email change
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the password change
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name === '' || email === '' || password === '') {
//       setError(true);
//     } else {
//       setSubmitted(true);
//       setError(false);
//     }
//   };

//   // Showing success message
//   const successMessage = () => {
//     return (
//       <div
//         className="success"
//         style={{
//           display: submitted ? '' : 'none',
//         }}>
//         <h1>User {name} successfully registered!!</h1>
//       </div>
//     );
//   };

//   // Showing error message if error is true
//   const errorMessage = () => {
//     return (
//       <div
//         className="error"
//         style={{
//           display: error ? '' : 'none',
//         }}>
//         <h1>Please enter all the fields</h1>
//       </div>
//     );
//   };

//   return (
//     <div className="form">
//       <div>
//         <h1>User Registration</h1>
//       </div>

//       {/* Calling to the methods */}
//       <div className="messages">
//         {errorMessage()}
//         {successMessage()}
//       </div>

//       <form>
//         {/* Labels and inputs for form data */}
//         <label className="label">Name</label>
//         <input onChange={handleName} className="input"
//           value={name} type="text" />

//         <label className="label">Email</label>
//         <input onChange={handleEmail} className="input"
//           value={email} type="email" />

//         <label className="label">Password</label>
//         <input onChange={handlePassword} className="input"
//           value={password} type="password" />

//         <button onClick={handleSubmit} className="btn" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
	const [formState, setFormState] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [addUser, { error }] = useMutation(ADD_USER);

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
			const { data } = await addUser({
				variables: { ...formState },
			});

			Auth.login(data.addUser.token);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<main className="signup-container d-flex justify-content-center align-items-center ">
			<div className="col-12 col-md-6">
				<div className="card text-white bg-dark">
					<h4 className="card-header text-center">Sign Up</h4>
					<div className="card-body align-text-center">
						<form onSubmit={handleFormSubmit}>
							<div className="form-group mb-2">
								<label>Username</label>
								<input
									className="form-control"
									placeholder="Your username"
									name="username"
									type="username"
									id="username"
									value={formState.username}
									onChange={handleChange}
								/>
							</div>
							<div className="form-group mb-2">
								<label>Email</label>
								<input
									className="form-control"
									placeholder="Your email"
									name="email"
									type="email"
									id="email"
									value={formState.email}
									onChange={handleChange}
								/>
								<div className="form-group mb-2">
									<label>Password</label>
								</div>
								<input
									className="form-control"
									placeholder="******"
									name="password"
									type="password"
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

						{error && <div>Signup failed</div>}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Signup;
