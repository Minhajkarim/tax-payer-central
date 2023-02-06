import * as yup from "yup";

export const LoginValidationSchema = () => {
	const schema = yup.object({
		email: yup
			.string()
			.matches(
				/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
				"Invalid email address"
			)
			.required("Email Required"),
		password: yup
			.string()
			// .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i, "invalid Password")
			.required(),
	});

	return schema;
};

export const SignupValidationSchema = () => {
	const schema = yup.object({
		email: yup
			.string()
			.matches(
				/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
				"Invalid email address"
			)
			.required("Email Required"),
		password: yup
			.string()
			.min(8)
			.matches(
				/^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d]).*$/gm,
				"password contains at least one Uppercase Character, one Lowercase character, one special character and one number"
			)
			// .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i, "invalid Password")
			.required(),
		username: yup.string().required(),
		mobile: yup
			.string()
			.test("len", "Invalid Tel No.", (val) => {
				console.log(val);
				const val_length_without_dashes = val.replace(/[-_() ]+/g, "").length;
				console.log(val_length_without_dashes);

				return val_length_without_dashes === 10;
			})
			.required("Mobile Number is required"),
	});
	return schema;
};
