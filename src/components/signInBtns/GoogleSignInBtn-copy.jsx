import React, { useState, useEffect } from "react";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import jwt_decode from "jwt-decode";

import "./signinBtns.scss";

function GoogleSignInBtnCopy() {

	const [userSigninData, setUserSigninData] = useState(null);
	const [profile, setProfile] = useState(null);

	const navigate = useNavigate();

	const login = useGoogleLogin({
		onSuccess: (codeResponse) => {
			setUserSigninData(codeResponse);
			conosle.log(codeResponse);
			navigate('/dashboard', { state: { profile, setProfile } });
		},
		onError: (error) => console.log("Login Failed:", error),
	});

	useEffect(() => {
		if (userSigninData) {
			axios
				.get(
					`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userSigninData.access_token}`,
					{
						headers: {
							Authorization: `Bearer ${userSigninData.access_token}`,
							Accept: "application/json",
						},

					}
				)
				.then((res) => {
					setProfile(res.data);
				})
				.catch((err) => console.log(err));
		}
	}, [userSigninData]);

	// log out function to log the user out of google and set the profile array to null

	const logOut = () => {
		googleLogout();
		navigate("/signin");
	};

	return (
		<button className="google-btn" onClick={() => login()}>
			<FcGoogle className="icon" />
			<span> Sign in with Google </span>
		</button>
		// <GoogleLogin
		// 	onSuccess={responseMessage}
		// 	onError={errorMessage}
		// 	type="standard"
		// 	size="medium"
		// 	width={'150px'}
		// >
		// </GoogleLogin>
	);
}
export default GoogleSignInBtnCopy;
