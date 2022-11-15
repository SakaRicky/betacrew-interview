import React from "react";
import styles from "./componentOne.module.css";
import { Select } from "../Select/Select";

export const ComponentOne = () => {
	const options = [
		{ value: 30, label: "30 Days" },
		{ value: 7, label: "7 Days" },
		{ value: 1, label: "1 Day" },
	];

	return (
		<div className={styles.root}>
			<div className={styles.calls}>
				<p>0 Calls</p>
				<Select options={options} />
			</div>
			<div className={styles.label}>
				<p>Your API calls will appear here. Make a request to get started!</p>
			</div>
		</div>
	);
};
