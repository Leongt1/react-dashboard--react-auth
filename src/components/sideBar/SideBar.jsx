import "./sideBar.scss";

const SideBar = () => {
	return (
		<>
			<div className="side-container">
				<h1>Board</h1>
				<div className="main-opts">
					<button className="list-item active">
						<img src="dashboard_icon.svg" alt="" />
						Dashboard
					</button>
					<button className="list-item">
						<img src="transaction_icon.svg" alt="" />
						Transactions
					</button>
					<button className="list-item">
						<img src="schedule_icon.svg" alt="" />
						Schedules
					</button>
					<button className="list-item">
						<img src="user_icon.svg" alt="" />
						Users
					</button>
					<button className="list-item">
						<img src="setting_icon.svg" alt="" />
						Settings
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
