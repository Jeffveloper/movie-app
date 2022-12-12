import PageWrapper from "@components/atoms/PageWrapper";
import MovieBanner from "@components/organisms/MovieBannerSection";
import MoviesCarousel from "@components/organisms/MoviesCarousel";
import { MovieContext } from "@contexts/MovieContext";
import useGetMovie from "@hooks/useGetMovie";
import LandingSearchbutton from "@modules/landing/components/LandingSearchButton";
import UserSection from "@modules/landing/components/UserSection";
import { useContext } from "react";

const LandingPageView = (): JSX.Element => {
  const { movieData, setMovieData } = useContext(MovieContext);

  useGetMovie(565431).then((data) => {
    setMovieData(data);
  });

  return (
    <PageWrapper>
      <main>
        <MovieBanner />
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
