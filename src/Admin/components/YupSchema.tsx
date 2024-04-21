import * as Yup from "yup";

// To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

export const SignupSchema = Yup.object().shape({
	firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
	lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string()
		.matches(passw, {
			message:
				"password must contain at least 6 characters, one numeric, one uppercase and one lowercase letter",
		})
		.required("Required"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), ""], "password must match")
		.required("Required"),
});

const siteInformation = {
	siteName: "google.com",
	welcomeText: "",
	OfficeAddress: "",

	phones: [0, 1],

	OfficeEmail: "",
	secondaryEmail: "",
	customerCareEmail: "",
	HREmail: "",

	LInkedIn: "",
	faceBook: "",
	Twitter: "",
	Instagram: "",
	whatsapp: "",
};
const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const siteInfoSchema = Yup.object().shape({
	siteName: Yup.string().min(1, "Too Short!").max(25, "Too Long!").required("Required"),
	welcomeText: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
	bannerStatement: Yup.string().min(2, "Too Short!").max(70, "Too Long!").required("Required"),
	servicesOffered: Yup.array().required("Required"),
	OfficeAddress: Yup.string().min(2, "Too Short!").max(35, "Too Long!").required("Required"),

	officephoneOne: Yup.string()
		.matches(phoneRegExp, "Phone number is not valid")
		.min(6, "Not valid!")
		.required("Required"),
	officephoneTwo: Yup.string()
		.matches(phoneRegExp, "Phone number is not valid")
		.min(6, "Not valid!"),
	CustomerCarephoneOne: Yup.string()
		.matches(phoneRegExp, "Phone number is not valid")
		.min(6, "Not valid!"),
	CustomerCarephoneTwo: Yup.string()
		.matches(phoneRegExp, "Phone number is not valid")
		.min(6, "Not valid!"),

	officeEmail: Yup.string()
		.email("Please enter a valid email")
		.min(5, "Too Short!")
		.max(25, "Too Long!")
		.required("Required"),
	secondaryEmail: Yup.string()
		.email("Please enter a valid email")
		.min(5, "Too Short!")
		.max(25, "Too Long!"),
	customerCareEmail: Yup.string()
		.email("Please enter a valid email")
		.min(5, "Too Short!")
		.max(25, "Too Long!"),
	HREmail: Yup.string()
		.email("Please enter a valid email")
		.min(5, "Too Short!")
		.max(25, "Too Long!"),

	LInkedIn: Yup.string().min(4, "Too Short!").max(50, "Too Long!"),
	faceBook: Yup.string().min(4, "Too Short!").max(50, "Too Long!"),
	Twitter: Yup.string().min(4, "Too Short!").max(50, "Too Long!"),
	Instagram: Yup.string().min(4, "Too Short!").max(50, "Too Long!"),
	whatsapp: Yup.number().min(9, "Too Short!"),
});
