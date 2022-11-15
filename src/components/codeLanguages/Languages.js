import React, { useState } from "react";
import { LanguageItem } from "./languageItem/LanguageItem";
import styles from "./languages.module.css";

const data = [
	{ image: "images/shell.svg", label: "Shell" },
	{ image: "images/nodejs.svg", label: "Node" },
	{ image: "images/ruby.svg", label: "Ruby" },
	{ image: "images/php.svg", label: "PHP" },
	{ image: "images/python.svg", label: "Python" },
];
export const Languages = () => {
	const [activeLanguage, setActiveLanguage] = useState("Shell");

	return (
		<div className={styles.root}>
			{data.map(d => (
				<LanguageItem
					key={d.label}
					image={d.image}
					label={d.label}
					activeLanguage={activeLanguage}
					setActiveLanguage={setActiveLanguage}
				/>
			))}

			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				style={{ width: "50px", height: "50px" }}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
				/>
			</svg>
		</div>
	);
};
