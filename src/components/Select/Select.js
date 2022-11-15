import React from "react";
import styles from "./select.module.css";

export const Select = ({ options }) => {
	return (
		<div className={styles.select_wrapper}>
			<select name="days" className={styles.select}>
				{options.map(opt => (
					<option key={opt.label} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className={styles.arrows}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
				/>
			</svg>
		</div>
	);
};
