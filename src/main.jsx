import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
	<GoogleOAuthProvider
		clientId="924941375628-ebbui50ailao6ehop3ujvbsr436ndq5t.apps.googleusercontent.com">
		<Router>
			<App />
		</Router>
	</GoogleOAuthProvider>
);
