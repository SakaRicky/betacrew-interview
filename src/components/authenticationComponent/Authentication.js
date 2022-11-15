import React from "react";
import styles from "./auth.module.css";

export const Authentication = () => {
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<h4>AUTHENTICATION</h4>
				<span className={styles.infoSpan}>
					Header{" "}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						style={{ width: "20px", height: "20px" }}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
						/>
					</svg>
				</span>
			</div>
			<div className={styles.params}>
				<span className={styles.params_label}>Header</span>
				<p className={styles.params_value}>YOUR_API_KEY</p>
			</div>
		</div>
	);
};
