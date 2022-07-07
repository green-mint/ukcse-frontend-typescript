import { useQuery } from "@apollo/client";
import { GetCarouselImage } from "../lib/graphql/interfaces/GetCarouselImage";
import { GET_CAROUSEL_IMAGES } from "../lib/graphql/operations";
// import the slick css
import "slick-carousel/slick/slick.css";
import { ImageSlider } from "../components/ui";
import { CategoriesSideBar, MainLayout } from "../components/layouts";
import { PostsGrid } from "../components/post";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div>
        <PostsGrid />
      </div>
    </div>
  );
};

function Carousel() {
  const { loading, error, data } =
    useQuery<GetCarouselImage>(GET_CAROUSEL_IMAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="max-w-lg px-5 mx-auto mt-10">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data && (
          <ImageSlider
            images={data.carouselImages.map(
              (image) => process.env.NEXT_PUBLIC_SERVER_ENDPOINT + "/" + image
            )}
          />
        )
      )}
    </div>
  );
}

Home.getLayout = (page: React.ReactElement) => {
  return (
    <MainLayout>
      <CategoriesSideBar />
      <div className="lg:ml-64 relative">{page}</div>
    </MainLayout>
  );
};

export default Home;
