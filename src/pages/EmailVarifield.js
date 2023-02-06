import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";

const Container = tw(
  ContainerBase
)`min-h-screen bg-gray-lightest text-white font-medium flex justify-center -m-8`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const EmailVarified = () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Heading> Email is Varified</Heading>
      <Footer />
    </AnimationRevealPage>
  );
};

export default EmailVarified;
