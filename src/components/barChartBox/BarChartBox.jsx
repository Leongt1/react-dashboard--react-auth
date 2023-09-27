import React from "react";
import {
	BarChart,
	Bar,
	Tooltip,
	ResponsiveContainer,
	XAxis,
	YAxis,
	CartesianGrid,
} from "recharts";

import "./barChartBox.scss";

const data = [
	{
		name: "Week 1",
		Guest: 400,
		User: 500,
	},
	{
		name: "Week 2",
		Guest: 450,
		User: 300,
	},
	{
		name: "Week 3",
		Guest: 300,
		User: 200,
	},
	{
		name: "Week 4",
		Guest: 340,
		User: 400,
	},
];

const BarChartBox = () => {
	return (
		<section className="bar-card">
			<div className="chart-header">
				<div className="title">
					<h2>Activities</h2>
					<span className="duration">May - June 2021</span>
				</div>
				<div className="legends">
					<p>
						<span className="guest-color"></span>
            Guest
					</p>
					<p>
						<span className="user-color"></span>
            User
					</p>
				</div>
			</div>
			<div className="chart">
				<ResponsiveContainer width={"99%"} height={232}>
					<BarChart data={data} barGap={10}>
						<CartesianGrid vertical={false} />
						<XAxis dataKey="name" axisLine={false} tickLine={false} stroke='#858585' />
						<YAxis
							ticks={[0, 100, 200, 300, 400, 500]}
							domain={[0, "datamax"]}
							axisLine={false}
							tickLine={false}
							type="number"
              stroke='#858585'
						/>
						<Tooltip
							contentStyle={{ backgroundColor: "#fff", borderRadius: "5px" }}
							labelStyle={{ display: "none" }}
							cursor={{ fill: "none" }}
						/>
						<Bar dataKey="User" fill="#98D89E" barSize={38.41} radius={5} />
						<Bar dataKey="Guest" fill="#EE8484" barSize={38.41} radius={5} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</section>
	);
};

export default BarChartBox;
