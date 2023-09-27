import React from "react";
import {
	AiFillTwitterCircle,
	AiFillGithub,
	AiFillLinkedin,
} from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";

import "./signin.scss";

import GoogleSignInBtn from "../../components/signInBtns/GoogleSignInBtn";
import AppleSignInBtn from "../../components/signInBtns/AppleSignInBtn";

const SignIn = () => {
	return (
		<div className="main-container">
			<section className="left">
				<h3 className="logo">LOGO</h3>
				<h1>Board.</h1>
				<div className="icon-links">
						<AiFillGithub className="git-icon icon" />
						<AiFillTwitterCircle className="twitter-icon icon" />
						<AiFillLinkedin className="linkedIn-icon icon" />
						<IoLogoDiscord className="discord-icon icon" />
				</div>
			</section>
			<section className="right">
				<div className="container">
					<div className="header">
						<h1>Sign In</h1>
						<p>Sign in to your account</p>
					</div>
					<div className="signIn-btns">
						<GoogleSignInBtn />
						<AppleSignInBtn />
					</div>
					<form className="form-container">
						{/* <div> */}
							<div>
								<label htmlFor="email">Email address</label>
								<input type="email" id="email" name="email" placeholder="johndoe@gmail.com" />
							</div>
							<div>
								<label htmlFor="password">Password</label>
								<input type="password" id="password" name="password" placeholder="Password" />
							</div>
							<div>
								<a href="#">Forgot password?</a>
							</div>
							<button className="btn">Sign In</button>
						{/* </div> */}
					</form>
					<p>
						Don't have an account? <a href="#">Register here</a>
					</p>	
				</div>
			</section>
		</div>
	);
};

export default SignIn;
