import React from "react";

import "./navBar.scss";

const handleSearch = (e) => {
	e.preventDefault();
};

const NavBar = ({ userData }) => {
	return (
		<nav>
			<h2>Dashboard</h2>
			<div className="actions">
				<form className="search-bar">
					<input type="text" placeholder="Search..." />
					<button onClick={handleSearch}>
						<img
							className="search-icon"
							src="search_icon.svg"
							alt="search-icon"
						/>
					</button>
				</form>
				<img
					className="notification-icon"
					src="notification_icon.svg"
					alt="notifications-icon"
				/>
				<img
					className="user-icon"
					src={userData.picture}
					alt="user-profile-pic"
				/>
			</div>
		</nav>
	);
};

export default NavBar;
