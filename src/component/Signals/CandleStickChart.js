import React, { useEffect, useState, useRef } from "react";
import {
	BarChart,
	ResponsiveContainer,
	Legend,
	Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Bar,
	Cell,
	ErrorBar,
} from "recharts";

const CandleStickCharts = () => {
	const axisRef = useRef();
	const [loading, setLoading] = useState(true);
	const [fontSizeAxis, setFontSizeAxis] = useState("15px");

	// set current window inner width
	const [windowWidth, setWindowWidth] = useState(
		window.innerWidth
	);

	useEffect(() => {
		const windowWidthHandler = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", windowWidthHandler);

		return () => {
			window.removeEventListener(
				"resize",
				windowWidthHandler
			);
		};
	}, []);

	const data = [
		{
			name: "Mon",
			max: [40, 20],
			error: [10, 30],
		},
		{
			name: "Tue",
			max: [60, 50],
			errorNegative: [10, 20],
		},
		{
			name: "Wed",
			max: [65, 45],
			errorNegative: [10, 30],
		},
		{
			name: "Thu",
			max: [43, 29],
			error: [10, 20],
		},
		{
			name: "Fri",
			max: [60, 40],
			error: [10, 30],
		},
	];

	const colors = [
		"#9AE4A7",
		"#EE77A2",
		"#EE77A2",
		"#9AE4A7",
		"#9AE4A7",
	];

	useEffect(() => {
		if (windowWidth > 1200) {
			setFontSizeAxis("15px");
			console.log("large");
		} else if (windowWidth < 1200 && windowWidth > 1000) {
			setFontSizeAxis("12px");
			console.log("md");
		} else if (windowWidth < 1000 && windowWidth > 600) {
			setFontSizeAxis("10px");
		}
	}, [windowWidth]);

	return (
		<ResponsiveContainer width="100%" height="70%">
			<BarChart
				width={600}
				height={300}
				data={data}
				margin={{ top: 5, right: 0, left: 20, bottom: 5 }}
			>
				<CartesianGrid
					stroke="rgba(255, 255, 255, 0.12)"
					strokeDasharray="0"
					vertical={false}
				/>
				<XAxis
					dataKey="name"
					type="category"
					style={{ fontSize: fontSizeAxis }}
					tickCount={5}
					interval={0}
					tick={{ fill: "rgba(255, 255, 255, 0.87)" }}
				/>
				<YAxis
					type="number"
					orientation="right"
					domain={[0, 100]}
					tickCount={5}
					axisLine={false}
					tickLine={false}
					ticks={data.president}
					style={{ fontSize: fontSizeAxis }}
					tick={{ fill: "rgba(255, 255, 255, 0.87)" }}
				/>
				<Tooltip />
				<Bar
					barSize={20}
					xAxisId={0}
					dataKey="max"
					fill="#9AE4A7"
				>
					{/* <Bar
					barSize={30}
					xAxisId={1}
					dataKey="min"
					fill="#1E1E1E"
				> */}
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={colors[index]}
							strokeWidth={1}
						/>
					))}

					<ErrorBar
						dataKey="error"
						width={0}
						strokeWidth={2}
						stroke="#9AE4A7"
					/>
					<ErrorBar
						dataKey="errorNegative"
						width={0}
						strokeWidth={2}
						stroke="#EE77A2"
					/>
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default CandleStickCharts;
