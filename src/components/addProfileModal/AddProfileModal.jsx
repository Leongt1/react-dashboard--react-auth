import { useEffect, useRef, useState } from "react";

import "./addProfileModal.scss";

const AddProfileModal = ({ setUserProfile, closeModal, submitUser }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
		instaURL: "",
		youtubeURL: "",
	});

	const nameRef = useRef();

	useEffect(() => {
		nameRef.current.focus();
	}, []);

	// console.log("user:", user);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const nextPage = () => {
		setCurrentPage((currPg) => currPg + 1);
	};

	const prevPage = () => {
		setCurrentPage((currPg) => currPg - 1);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			user?.name === '' ||
			user?.email === '' ||
			user?.phone === ''
			) {
			return alert('All fields with "*" are required!');
		}
		submitUser(user);
		setCurrentPage(1);
		setUser({
			name: "",
			email: "",
			phone: "",
			instaURL: "dwd",
			youtubeURL: "wdw",
		});
		closeModal();
	};
	console.log(user);

	const renderPageOne = (
		<div className="form-page">
			<div className="page-indicator">
				<div className="page-1 page">
					<h2>Basic</h2>
					<span className="active"></span>
				</div>
				<div className="page-2 page">
					<h2>Contact</h2>
					<span className="inactive"></span>
				</div>
			</div>

			<form onSubmit={handleSubmit}>
				<p>
					<label htmlFor="name">Enter Name*</label>
					<input
						type="text"
						id="name"
						value={user.name}
						name="name"
						ref={nameRef}
						onChange={handleInputChange}
						placeholder="Eg. John Doe"
						required
					/>
				</p>
				<p>
					<label htmlFor="email">Enter Email*</label>
					<input
						type="email"
						id="email"
						value={user.email}
						name="email"
						onChange={handleInputChange}
						placeholder="Eg. John@xyz.com"
						required
					/>
				</p>
				<p>
					<label htmlFor="phone">Enter Phone*</label>
					<input
						type="tel"
						id="phone"
						value={user.phone}
						name="phone"
						onChange={handleInputChange}
						placeholder="Eg. 9123456789"
						required
					/>
				</p>
				{/* <hr /> */}
				<div className="footer">
					<button type="submit" className="btn" onClick={nextPage}>
						Next
					</button>
				</div>
			</form>
		</div>
	);

	const renderPageTwo = (
		<div className="form-page">
			<div className="page-indicator">
				<div className="page-1 page">
					<h2>Basic</h2>
					<span className="inactive"></span>
				</div>
				<div className="page-2 page">
					<h2>Social</h2>
					<span className="active"></span>
				</div>
			</div>

			<form onSubmit={handleSubmit}>
				<p>
					<label htmlFor="insta">
						Instagram Link
						<span className="optional"> (Optional)</span>
					</label>
					<input
						type="text"
						id="insta"
						ref={nameRef}
						value={user.instaURL}
						name="instaURL"
						onChange={handleInputChange}
						placeholder="Eg. ..instagram.com/username"
					/>
				</p>
				<p>
					<label htmlFor="youtube">
						Youtube Link
						<span className="optional"> (Optional)</span>
					</label>
					<input
						type="text"
						id="youtube"
						value={user.youtubeURL}
						name="youtubeURL"
						onChange={handleInputChange}
						placeholder="Eg. ..youtube/username"
					/>
				</p>
				{/* <hr /> */}
				<div className="footer">
					<button className="back-btn btn" type="button" onClick={prevPage}>
						Back
					</button>
					<button className="btn" type="submit">
						Done
					</button>
				</div>
			</form>
		</div>
	);

	return (
		<section className="overlay">
			<div className="modal-container">
				<div className="header">
					<h1>Add New Profile</h1>
					<button className="close" onClick={closeModal}>
						<img src="close.svg" alt="" />
					</button>
				</div>
				{/* <hr /> */}

				{currentPage === 1 ? renderPageOne : renderPageTwo}
			</div>
		</section>
	);
};

export default AddProfileModal;
