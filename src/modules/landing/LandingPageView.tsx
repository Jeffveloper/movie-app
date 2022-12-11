import PageWrapper from "@components/atoms/PageWrapper";
import MoviesCarousel from "@components/organisms/MoviesCarousel";
import LandingSearchbutton from "./components/LandingSearchButton";
import UserSection from "./components/UserSection";

const LandingPageView = (): JSX.Element => {
  return (
    <PageWrapper>
      <div>
        <UserSection />
        <LandingSearchbutton />
        <div className="flex flex-col gap-10">
          <MoviesCarousel genre="action" />
          <MoviesCarousel genre="comedy" />
          <MoviesCarousel genre="romance" />
        </div>
      </div>
    </PageWrapper>
  );
};

export default LandingPageView;
