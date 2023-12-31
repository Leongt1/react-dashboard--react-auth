import React, { useState } from "react";

import "./dashboard.scss";

import SideBar from "../../components/sideBar/SideBar";
import NavBar from "../../components/navBar/NavBar";
import Stats from "../../components/stats/Stats";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import ProfileBox from "../../components/profileBox/ProfileBox";
import { useLocation } from "react-router-dom";

const Dashboard = () => {

	const location = useLocation();

	const [sideBarClass, setSideBarClass] = useState('sidebar-container hidden')
	const [isOpen, setIsOpen] = useState(true);

	const [userSigninData] = useState({
		...location.state.decoded_token
	});
	// console.log(userSigninData);

	const toggleHandler = (isClicked) => {
		setIsOpen(isClicked);
	}

	return (
		<main>
			<aside className={isOpen ? sideBarClass : 'sidebar-container'}>
				<SideBar />
			</aside>
			<section className="dashboard-container">
				<div className="item-1 item">
					<NavBar userData={userSigninData} toggleHandler={toggleHandler}/>
				</div>
				<div className="item-2 item">
					<Stats />
				</div>
				<div className="item-3 item">
					<BarChartBox />
				</div>
				<div className="inner-container">
					<div className="item-4 item">
						<PieChartBox />
					</div>
					<div className="item-5 item">
						<ProfileBox />
					</div>
				</div>
			</section>
		</main>
	);
};

export default Dashboard;
