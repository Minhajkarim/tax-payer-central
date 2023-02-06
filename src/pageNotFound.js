import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

const PageNotFound = () => {
  return (
    <AnimationRevealPage>
      <Header />
      <div className="h-full text-center">
        <h1 className="text-5xl">Page not Found</h1>
      </div>
      <Footer />
    </AnimationRevealPage>
  );
};

export default PageNotFound;
