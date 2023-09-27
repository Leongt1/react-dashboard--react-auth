import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import "./signinBtns.scss";

function GoogleSignInBtn() {
	const navigate = useNavigate();

	const responseMessage = (response) => {
		const token = response?.credential;
		if (token) {
			const decoded_token = jwt_decode(token);
			console.log(decoded_token);
			navigate("/dashboard", { state: { decoded_token } });
		}
		// console.log(response);
	};

	const errorMessage = (error) => {
		console.log(error);
		alert("Login failed! Try again!");
	};

	// const login = useGoogleLogin({
	// 	onSuccess: (codeResponse) => {
	// 		setUserSigninData(codeResponse);
	// 		conosle.log(codeResponse);
	// 		navigate('/dashboard', { state: { profile, setProfile } });
	// 	},
	// 	onError: (error) => console.log("Login Failed:", error),
	// });

	// useEffect(() => {
	// 	if (userSigninData) {
	// 		axios
	// 			.get(
	// 				`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userSigninData.access_token}`,
	// 				{
	// 					headers: {
	// 						Authorization: `Bearer ${userSigninData.access_token}`,
	// 						Accept: "application/json",
	// 						// 'Cross-Origin-Opener-Policy': 'same-origin',
	// 						'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
	// 					},

	// 				}
	// 			)
	// 			.then((res) => {
	// 				setProfile(res.data);
	// 			})
	// 			.catch((err) => console.log(err));
	// 	}
	// }, [userSigninData]);

	// log out function to log the user out of google and set the profile array to null

	const logOut = () => {
		googleLogout();
		navigate("/signin");
	};

	return (
		// <button className="google-btn" onClick={() => login()}>
		// 	<FcGoogle className="icon" />
		// 	<span> Sign in with Google </span>
		// </button>
		<GoogleLogin
			onSuccess={responseMessage}
			onError={errorMessage}
			type="standard"
			size="medium"
			width={'150px'}
		>
		</GoogleLogin>
	);
}
export default GoogleSignInBtn;
