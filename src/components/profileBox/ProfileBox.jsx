import React, { useEffect, useState } from "react";

import "./profileBox.scss";

import AddProfileModal from "../addProfileModal/AddProfileModal";
import AddProfileBtn from "../addProfileBtn/AddProfileBtn";
import UserDetails from "../userDetails/UserDetails";

const ProfileBox = () => {

	const [toggleModal, setToggleModal] = useState(false);
	const [userProfile, setUserProfile] = useState(() => {
		const localUserProfile = localStorage.getItem('user-profile');
		if(localUserProfile === null) return '';

		return JSON.parse(localUserProfile);
	});

	useEffect(() => {
		localStorage.setItem('user-profile', JSON.stringify(userProfile));
	}, [userProfile])

	const submitUser = (user) => {
		setUserProfile(user);
	}

	const openModal = () => {
		setToggleModal(true);

		if (typeof window != 'undefined' && window.document) {
			document.body.style.overflow = 'hidden';
		}
	}

	const closeModal = () => {
		setToggleModal(false);

		document.body.style.overflow = 'unset';
	}

	return (
		<div className="profile-card">

			{
				(userProfile)
				? <UserDetails user={userProfile} setUserProfile={setUserProfile} /> 
				: <AddProfileBtn openModal={ openModal } /> 
			}

      {
        toggleModal && <AddProfileModal setUserProfile={ setUserProfile }  closeModal={ closeModal } submitUser={ submitUser } /> 
      }
    
    </div>
	);
};

export default ProfileBox;
