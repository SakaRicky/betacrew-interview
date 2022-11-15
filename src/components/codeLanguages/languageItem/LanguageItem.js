import React from "react";
import styles from "./languageItem.module.css";

export const LanguageItem = ({
	label,
	image,
	activeLanguage,
	setActiveLanguage,
}) => {
	return (
		<div
			className={styles.root}
			style={{
				border:
					activeLanguage === label
						? "2px solid rgb(217, 217, 217)"
						: "2px solid transparent",
			}}
			onClick={() => setActiveLanguage(label)}
		>
			<img src={image} alt={label} className={styles.image} />
			<p>{label}</p>
		</div>
	);
};
