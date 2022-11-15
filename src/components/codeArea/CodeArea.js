import React from "react";
import styles from "./codeArea.module.css";
import hljs from "highlight.js";
import { marked } from "marked";
import "highlight.js/styles/github-dark.css";

export const CodeArea = () => {
	const MARKDOWN_TEXT2 = `
\`\`\`javascript
const sdk = require('api')('@check-api/v2021-09-02#@check-api/v2021-09-02#');

sdk.auth('Bearer YOUR_API_KEY');
sdk.createCompany({address: {country: 'US'}});
	.then(({data}) => console.log(data))
	.catch(err => console.log(err))
\`\`\`
`;

	marked.setOptions({
		langPrefix: "hljs language-",
		highlight: function (code) {
			return hljs.highlightAuto(code, ["html", "javascript"]).value;
		},
	});

	return (
		<div className={styles.root}>
			<div className={styles.api}>
				<span className={styles.label}>API</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					style={{ width: "30px", height: "30px", cursor: "pointer" }}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 8.25l-7.5 7.5-7.5-7.5"
					/>
				</svg>
			</div>
			<div className={styles.installation}>
				<span className={styles.label}>INSTALLATION</span>
				<div>
					<pre>
						<code>
							$ <span className={styles.green_code}>npm install api</span>
						</code>
					</pre>
				</div>
			</div>
			<div className={styles.request}>
				<div className={styles.request_header}>
					<span className={styles.label}>REQUEST</span>
					<div>
						<span className={styles.examples}>
							EXAMPLES{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								style={{ width: "30px", height: "30px", cursor: "pointer" }}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</span>
					</div>
				</div>
				<div
					className={styles.code_area}
					dangerouslySetInnerHTML={{ __html: marked(MARKDOWN_TEXT2) }}
				></div>
			</div>
			<div className={styles.tryit}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					style={{ width: "30px", height: "30px", cursor: "pointer" }}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
					/>
				</svg>
				<button className={styles.tryitButton}>Try It!</button>
			</div>
		</div>
	);
};
