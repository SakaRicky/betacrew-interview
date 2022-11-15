import React from "react";
import styles from "./componentTwo.module.css";
import { Languages } from "../codeLanguages/Languages";
import { Authentication } from "../authenticationComponent/Authentication";
import { CodeArea } from "../codeArea/CodeArea";

export const ComponentTwo = () => {
	return (
		<div className={styles.root}>
			<div className={styles.languages}>
				<h4>LANGUAGE</h4>
				<Languages />
				<Authentication />
				<CodeArea />
			</div>
		</div>
	);
};
