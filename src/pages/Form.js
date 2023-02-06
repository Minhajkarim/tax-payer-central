import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container } from "components/misc/Layouts";

import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

export default ({}) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <iframe
          src="https://www.irs.gov/pub/irs-pdf/f1040.pdf"
          width="100%"
          height={900}
        ></iframe>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
