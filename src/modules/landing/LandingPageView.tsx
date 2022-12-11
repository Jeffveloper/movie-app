import PageWrapper from "@components/atoms/PageWrapper";
import MovieBanner from "@components/organisms/MovieBannerSection";
import MoviesCarousel from "@components/organisms/MoviesCarousel";
import UserSection from "@modules/landing/components/UserSection";
import LandingSearchbutton from "@modules/landing/components/LandingSearchButton";

const LandingPageView = (): JSX.Element => {
  return (
    <PageWrapper>
      <main>
        <MovieBanner movieId={565431} />
        <UserSection />
        <LandingSearchbutton />
        <div className="flex flex-col gap-10">
          <MoviesCarousel genre="action" />
          <MoviesCarousel genre="comedy" alternative />
          <MoviesCarousel genre="romance" />
        </div>
      </main>
    </PageWrapper>
  );
};

export default LandingPageView;
