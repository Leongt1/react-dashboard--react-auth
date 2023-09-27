import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import "./pieChartBox.scss";

const data = [
	{ name: "Basic Tees", value: 45 },
	{ name: "Super Hoodies", value: 25 },
	{ name: "Custom Short Pants", value: 25 },
];
const COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];

const PieChartBox = () => {
	return (
		<section className="pie-card">
			<div className="title">
				<h2>Top products</h2>
				<span className="duration">May - June 2021</span>
			</div>
			<div className="pie-details">
				<div className="chart">
					<ResponsiveContainer width={'99%'} height={141}>
						<PieChart>
              <Tooltip
              contentStyle={{ backgroundColor: "#ffff", borderRadius: "5px" }}
              />
							<Pie
								data={data}
								innerRadius={55}
								outerRadius={70}
								dataKey="value"
                cornerRadius={10}
                paddingAngle={-10}
							>
								{data.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
									/>
								))}
							</Pie>
						</PieChart>
					</ResponsiveContainer>
				</div>
        
				<div className="legends">
          <div>
            <p className="single-legend">
              <span className="tees-color"></span>
              Basic Tees
            </p>
            <p className="percentage">55%</p>
          </div>
          <div>
            <p className="single-legend">
              <span className="pants-color"></span>
              Custom Short Pants
            </p>
              <p className="percentage">31%</p>
          </div>
          <div>
            <p className="single-legend">
              <span className="hoodies-color"></span>
              Super Hoodies
            </p>
              <p className="percentage">14%</p>
          </div>

				</div>
			</div>
		</section>
	);
};

export default PieChartBox;
