import axios from "axios";
import { FaApple } from "react-icons/fa";

import './signinBtns.scss';

function AppleSignInBtn() {
	return (
		<button className="apple-btn">
			<FaApple className="icon" />
			<span> Sign in with Apple </span>
		</button>
	);
}
export default AppleSignInBtn;
