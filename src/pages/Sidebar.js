import tw from "twin.macro";
import { Container as ContainerBase } from "components/misc/Layouts";
import {
	SectionHeading,
	Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

const Container = tw.div`w-[15rem] h-[100vh] flex flex-col justify-between shadow-md bg-white  bg-gray-900`;
const SidebarTop = styled.div`
	${tw`px-6 pt-4 pb-2`}

	.profile-link {
		.container {
			${tw`flex items-center`}
			.image-container {
				${tw`flex-shrink-0`}

				.img {
					${tw`w-10 rounded-full`}
				}
			}
			.username-container {
				${tw`flex-grow-[1] ml-3`}

				.username {
					${tw`text-sm font-semibold text-blue-600`}
				}
			}
		}
	}
`;

const List = tw.ul`relative px-1`;
const ListAccordian = tw.ul`relative `;

const ListItem = tw.li`relative`;
const ListItemLink = styled(Link)`
	${tw`flex items-center h-12 px-6 py-4 overflow-hidden text-sm text-gray-700 transition duration-300 ease-in-out rounded whitespace-nowrap hover:text-white hover:bg-blue-500`}

	svg {
		${tw`w-3 h-3 mr-3`}
	}
`;

const Divider = tw.hr`my-2 bg-gray-700`;

const SidebarFooter = tw.div`border-t border-gray-700 p-2`;
const LogoutButton = tw.button`bg-none border-none text-gray-700 hover:text-white hover:bg-blue-500 w-full text-center uppercase transition duration-300 ease-in-out`;

const Sidebar = ({ user }) => {
	const { push } = useHistory();

	const handleLogout = () => {
		sessionStorage.clear("token");
		push("/");
	};
	return (
		<Container id="sidenavSecExample">
			<div>
				<SidebarTop>
					<a href="#!" className="profile-link">
						<div className="container">
							<div className="image-container">
								<img
									src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
									alt="Avatar"
									className="img"
								/>
							</div>
							<div className="username-container">
								<p className="username">{user?.name}</p>
							</div>
						</div>
					</a>
				</SidebarTop>

				<List>
					<ListItem>
						<ListItemLink to="/">
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								className="w-3 h-3 mr-3"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path
									fill="currentColor"
									d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
								></path>
							</svg>
							<span>Non-collapsible link</span>
						</ListItemLink>
					</ListItem>
					<ListItem>
						<ListItemLink>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								class="w-3 h-3 mr-3"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 496 512"
							>
								<path
									fill="currentColor"
									d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
								></path>
							</svg>
							<span>Collapsible item 1</span>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								class="w-3 h-3 ml-auto"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
							>
								<path
									fill="currentColor"
									d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
								></path>
							</svg>
						</ListItemLink>
						{/* <ListAccordian>
            <ListItem>
              <ListItemLink to="/">Link 3 </ListItemLink>
              <ListItemLink to="/">Link 4 </ListItemLink>
            </ListItem>
          </ListAccordian> */}
					</ListItem>

					<ListItem>
						<ListItemLink>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								class="w-3 h-3 mr-3"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path
									fill="currentColor"
									d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
								></path>
							</svg>
							<span>Collapsible item 2</span>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								class="w-3 h-3 ml-auto"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
							>
								<path
									fill="currentColor"
									d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
								></path>
							</svg>
						</ListItemLink>

						{/* <ListAccordian>
            <ListItem>
              <ListItemLink to="/">Link 3 </ListItemLink>
              <ListItemLink to="/">Link 4 </ListItemLink>
            </ListItem>
          </ListAccordian> */}
					</ListItem>
				</List>
			</div>
			<SidebarFooter>
				<LogoutButton onClick={handleLogout}>Logout</LogoutButton>
			</SidebarFooter>
		</Container>
	);
};

export default Sidebar;
