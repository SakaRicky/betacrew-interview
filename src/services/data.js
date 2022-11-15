import axios from "axios";

export const getData = async () => {
	try {
		const response = await axios.get("https://api.publicapis.org/entries");
		return response.data.entries;
	} catch (error) {
		console.log("error: ", error);
	}
};
