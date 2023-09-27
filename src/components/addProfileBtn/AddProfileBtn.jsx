import React from "react";

import './addProfileBtn.scss';

const AddProfileBtn = ({ openModal }) => {
	return (
		<>
			<button className="addUser-btn" onClick={openModal}>
				<img src="add.svg" alt="" />
			</button>
			<h3>Add Profile</h3>
		</>
	);
};

export default AddProfileBtn;
