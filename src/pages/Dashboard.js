import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import {
	SectionHeading,
	Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import api from "api";

const Container = tw.div`flex`;
const Heading = tw(
	SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Content = tw.div`px-10`;

const Dashboard = () => {
	const [message, setMessage] = useState("Welcom on your Dashboard");
	const [emailVerified, setEmailVerified] = useState(true);
	const [user, setUser] = useState();

	useEffect(() => {
		const checkUserVarified = async () => {
			try {
				const userId = sessionStorage.getItem("userId");
				const res = await api.checkUserVarified(userId);
				if (res.email_verified) {
					setMessage("Welcom on your Dashboard");
					setEmailVerified(true);
				}
				setUser(res.data?.user);
			} catch (error) {}
		};

		checkUserVarified();
	}, []);

	return (
		<Container>
			<Sidebar user={user} />
			<Content>{emailVerified && <Heading>{message}</Heading>}</Content>
		</Container>
	);
};

export default Dashboard;
