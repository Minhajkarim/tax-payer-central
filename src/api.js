import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

const api = {
	login: async (data) => {
		// try {
		// const res = await instance.post("/api/v1/user/login", data);
		return instance.post("/api/v1/user/login", data);
		// return res.data;
		// } catch (error) {
		// 	console.log(error);
		// 	if (error?.response?.data?.message)
		// 		alert("error?.response?.data?.message");
		// }
	},
	signup: async (data) => {
		const { username, email, password, mobile } = data;
		// try {
		// const res = await instance.post("/api/v1/user/register", {
		// 	name: username,
		// 	email: email,
		// 	password: password,
		// 	phone_no: mobile,
		// });
		return instance.post("/api/v1/user/register", {
			name: username,
			email: email,
			password: password,
			phone_no: mobile,
		});
		// return res.data;
		// } catch (error) {
		// 	if (error?.response?.data?.message)
		// 		alert("error?.response?.data?.message");
		// }
	},
	getPhoneCode: async () => {
		// try {
		const { mobile: phonenumber } = JSON.parse(
			sessionStorage.getItem("user") || "{}"
		);
		const token = sessionStorage.getItem("token") || "";
		return await instance.get("/api/v1/verify/sendcode", {
			params: {
				phonenumber,
			},
			headers: {
				Authorization: `Bearer${token}`,
			},
		});
		// } catch (error) {
		// 	if (error?.response?.data?.message)
		// 		alert("error?.response?.data?.message");
		// }
	},
	verifyCode: async (code) => {
		// try {
		const { mobile } = JSON.parse(sessionStorage.getItem("user") || "{}");
		const token = sessionStorage.getItem("token") || "";
		return await instance.post(
			"/api/v1/verify/verifycode",
			{
				phonenumber: mobile,
				code,
			},
			{
				headers: {
					Authorization: `Bearer${token}`,
				},
			}
		);
		// return res.data;
		// } catch (error) {
		// 	if (error?.response?.data?.message)
		// 		alert("error?.response?.data?.message");
		// }
	},
	checkUserVarified: async (userId) => {
		const token = sessionStorage.getItem("token") || "";
		const formData = new FormData();
		formData.append("id", userId);
		// try {
		return await instance.post("/dashboard", formData, {
			headers: {
				Authorization: `Bearer${token}`,
			},
		});
		// 	return res.data;
		// } catch (error) {
		// 	if (error?.response?.data?.message)
		// 		alert("error?.response?.data?.message");
		// }
	},
};

export default api;
