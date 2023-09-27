import React from "react";

import "./userDetails.scss";

const UserDetails = ({ user, setUserProfile }) => {
	return (
		<div className="userDetails">
			{user && user?.name !== "" && user?.email !== "" && user?.phone !== "" ? (
				<>
					{/* <button onClick={() => setUserProfile("")}>
						Reset
					</button> */}
					<h1>{user.name}</h1>
					<div className="infos">
						<div className="info">
							<p>
								<img src="whatsapp-icon.jpg" alt="" />
								<a href="#">{user.phone}</a>
							</p>
							<p>
								<img src="mail-icon.svg" alt="" />
								<a href="#">{user.email}</a>
							</p>
						</div>

						<div className="info">
							{user.instaURL && (
								<p>
									<img src="insta-icon.svg" alt="" />
									<a href="#">{user.instaURL}</a>
								</p>
							)}
							{user.youtubeURL && (
								<p>
									<img src="youtube-icon.svg" alt="" />
									<a href="#">{user.youtubeURL}</a>
								</p>
							)}
						</div>
					</div>
				</>
			) : (
				"{Error with entry parsing}"
			)}
		</div>
	);
};

export default UserDetails;
