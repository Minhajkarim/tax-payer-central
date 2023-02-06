import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/signup-illustration.svg";
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupValidationSchema } from "validation";
import { Link, useHistory } from "react-router-dom";
import api from "api";
import InputMask from "react-input-mask";
import { TailSpin } from "react-loader-spinner";

const Container = tw(
	ContainerBase
)`min-h-screen bg-gray-lightest text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
	${tw`flex items-center justify-center w-full max-w-xs py-3 mt-5 text-sm font-semibold text-gray-900 transition-all duration-300 bg-gray-100 border rounded-lg hocus:bg-gray-200 hocus:border-gray-400 focus:outline-none focus:shadow-outline first:mt-0`}
	.iconContainer {
		${tw`p-2 bg-white rounded-full`}
	}
	.icon {
		${tw`w-4`}
	}
	.text {
		${tw`ml-4`}
	}
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-900 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const MobileNumber = tw(
	InputMask
)`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;

const SubmitButton = styled.button`
	${tw`flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out rounded-lg disabled:hover:bg-gray-700 disabled:bg-gray-700 bg-primary-500 hover:bg-primary-900 focus:shadow-outline focus:outline-none`}
	.icon {
		${tw`w-6 h-6 -ml-2`}
	}
	.text {
		${tw`ml-3`}
	}
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-gray-lightest text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
	${(props) => `background-image: url("${props.imageSrc}");`}
	${tw`w-full max-w-lg m-12 bg-center bg-no-repeat bg-contain xl:m-16`}
`;

const ErrorMessage = tw.p`text-red-700 `;
export default ({
	logoLinkUrl = "#",
	illustrationImageSrc = illustration,
	headingText = "TAX PAYER CENTRAL",
	socialButtons = [
		{
			iconImageSrc: googleIconImageSrc,
			text: "Sign Up With Google",
			url: "https://google.com",
		},
		{
			iconImageSrc: twitterIconImageSrc,
			text: "Sign Up With Twitter",
			url: "https://twitter.com",
		},
	],
	submitButtonText = "Sign Up",
	SubmitButtonIcon = SignUpIcon,
	tosUrl = "#",
	privacyPolicyUrl = "#",
	signInUrl = "#",
}) => {
	const [error, setError] = useState("");
	const [loader, setLoader] = useState(false);
	const { push } = useHistory();
	const schema = SignupValidationSchema();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = async (data) => {
		try {
			setLoader(true);
			const mobileNumber = data.mobile
				.replace("(", "")
				.replace(")", "")
				.replace(" ", "")
				.replace(" ", "");
			// data.mobile = "1" + mobileNumber;
			data.mobile = mobileNumber;
			const res = await api.signup(data);
			if (res?.data?.success) {
				setLoader(false);
				sessionStorage.setItem("token", res?.data?.token);
				sessionStorage.setItem("user", JSON.stringify(data));
				sessionStorage.setItem("userId", res?.data?.user_id);
				push("/phoneVerify");
			} else {
				setError(res?.data?.msg);
			}
		} catch (error) {
			setLoader(false);
			console.log("error", error?.response?.data?.msg);
			setError(error?.response?.data?.msg);
		}
	};

	return (
		<AnimationRevealPage>
			<Container>
				<Content>
					<MainContainer>
						<LogoLink href={logoLinkUrl}>
							<LogoImage src={logo} />
						</LogoLink>
						<MainContent>
							<Heading>{headingText}</Heading>
							<FormContainer>
								{/* <SocialButtonsContainer>
                {socialButtons.map((socialButton, index) => (
                  <SocialButton key={index} href={socialButton.url}>
                    <span className="iconContainer">
                      <img src={socialButton.iconImageSrc} className="icon" alt="" />
                    </span>
                    <span className="text">{socialButton.text}</span>
                  </SocialButton>
                ))}
              </SocialButtonsContainer>
              <DividerTextContainer>
                <DividerText>Or Sign up with your e-mail</DividerText>
              </DividerTextContainer> */}
								<Form onSubmit={handleSubmit(onSubmit)}>
									<Input
										type="email"
										placeholder="Email"
										{...register("email")}
									/>
									<span>{errors.email?.message}</span>
									<Input
										placeholder="Username"
										type="text"
										{...register("username")}
									/>
									<span>{errors.username?.message}</span>
									<Input
										type="password"
										placeholder="Password"
										{...register("password")}
									/>
									<span>{errors.password?.message}</span>

									<MobileNumber
										placeholder="Mobile Number"
										{...register("mobile")}
										mask="(999) 999 9999"
									/>
									<ErrorMessage>{errors.mobile?.message}</ErrorMessage>
									<SubmitButton type="submit" disabled={loader}>
										{loader && (
											<TailSpin
												height="20"
												width="20"
												color="#ffffff"
												ariaLabel="tail-spin-loading"
												radius="1"
												wrapperStyle={{}}
												wrapperClass=""
												visible={true}
											/>
										)}
										{/* {!loader && <SubmitButtonIcon className="icon" />} */}
										<span className="text">{submitButtonText}</span>
									</SubmitButton>
									<p>{error}</p>

									<p tw="mt-6 text-xs text-gray-600 text-center">
										I agree to abide by treact's{" "}
										<a
											href={tosUrl}
											tw="border-b border-gray-500 border-dotted"
										>
											Terms of Service
										</a>{" "}
										and its{" "}
										<a
											href={privacyPolicyUrl}
											tw="border-b border-gray-500 border-dotted"
										>
											Privacy Policy
										</a>
									</p>
									<p tw="mt-8 text-sm text-gray-600 text-center">
										Already have an account?{" "}
										<Link
											to="/signin"
											tw="border-b border-gray-500 border-dotted"
										>
											Sign In
										</Link>
									</p>
								</Form>
							</FormContainer>
						</MainContent>
					</MainContainer>
					<IllustrationContainer>
						<IllustrationImage imageSrc={illustrationImageSrc} />
					</IllustrationContainer>
				</Content>
			</Container>
		</AnimationRevealPage>
	);
};
