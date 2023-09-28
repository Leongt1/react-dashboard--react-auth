import "./sideBar.scss";

const SideBar = () => {
	return (
		<>
			<div className="side-container">
				<h1>Board</h1>
				<div className="main-opts">
					<button className="side-btn active">
						<img src="dashboard_icon.svg" alt="" />
						<span>Dashboard</span>
					</button>
					<button className="side-btn">
						<img src="transaction_icon.svg" alt="" />
						<span>Transactions</span>
					</button>
					<button className="side-btn">
						<img src="schedule_icon.svg" alt="" />
						<span>Schedules</span>
					</button>
					<button className="side-btn">
						<img src="user_icon.svg" alt="" />
						<span>Users</span>
					</button>
					<button className="side-btn">
						<img src="setting_icon.svg" alt="" />
						<span>Settings</span>
					</button>
				</div>
			</div>
			<ul className="other-opts">
				<li>
					<a href="#">Help</a>
				</li>
				<li>
					<a href="#">Contact Us</a>
				</li>
			</ul>
		</>
	);
};

export default SideBar;
