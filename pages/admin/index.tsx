import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LoaderButton } from "../../components/buttons";
import { TagsInput } from "../../components/inputs";
import ImageUploaderMultiple from "../../components/inputs/ImageUploaderMultiple/ImageUploaderMultiple";
import { AdminSidebar, MainLayout } from "../../components/layouts";
import { GetCarouselImage } from "../../lib/graphql/interfaces/GetCarouselImage";
import { PopularPosts } from "../../lib/graphql/interfaces/PopularPosts";
import {
  SetCarouselImages,
  SetCarouselImagesVariables,
} from "../../lib/graphql/interfaces/SetCarouselImages";
import {
  SetPopularPosts,
  SetPopularPostsVariables,
} from "../../lib/graphql/interfaces/SetPopularPosts";
import {
  GET_CAROUSEL_IMAGES,
  GET_POPULAR_POSTS,
  SET_POPULAR_POSTS,
  UPDATE_CAROUSEL_IMAGES,
} from "../../lib/graphql/operations";

type Props = {};

const AdminHomePage = (props: Props) => {
  return (
    <div>
      <PopularPostsEditor />
      <CarouselImagesEditor />
    </div>
  );
};

type PopularPostsEditorForm = {
  popularPosts: string[];
};

function PopularPostsEditor() {
  const { loading, error, data } = useQuery<PopularPosts>(GET_POPULAR_POSTS);

  const [
    updatePopularPosts,
    { error: updateError, loading: updateLoading, data: updateData },
  ] = useMutation<SetPopularPosts, SetPopularPostsVariables>(
    SET_POPULAR_POSTS,
    { errorPolicy: "all" }
  );

  const { control, handleSubmit } = useForm<PopularPostsEditorForm>();

  const updatePopularPostsHandler = (values: PopularPostsEditorForm) => {
    // console.log(first)
    updatePopularPosts({
      variables: {
        input: {
          posts: values.popularPosts,
        },
      },
    });
  };

  useEffect(() => {
    if (updateError) toast.error("Could not update popular posts");
    if (updateData) toast.success("Popular posts updated");
  }, [updateData]);

  return (
    <form className="p-5" onSubmit={handleSubmit(updatePopularPostsHandler)}>
      {data && data.popularPosts && (
        <Controller
          name="popularPosts"
          defaultValue={data.popularPosts.map((post) => post?.id || "")}
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <TagsInput
              maxTags={5}
              maxLength={50}
              value={value}
              label="Popular Posts"
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
      )}
      <LoaderButton
        type="submit"
        label="Save"
        className="bg-green-600 px-2 py-1.5 text-white"
        loading={updateLoading}
        disabled={updateLoading}
      />
    </form>
  );
}

type CarouselImagesEditorForm = {
  images: string[];
};

function CarouselImagesEditor() {
  const { loading, error, data } =
    useQuery<GetCarouselImage>(GET_CAROUSEL_IMAGES);

  const [
    updateCarouselImages,
    { error: updateError, loading: updateLoading, data: updateData },
  ] = useMutation<SetCarouselImages, SetCarouselImagesVariables>(
    UPDATE_CAROUSEL_IMAGES
  );

  const { control, handleSubmit } = useForm<CarouselImagesEditorForm>();

  const updateCarouselImagesHandler = (values: CarouselImagesEditorForm) => {
    // console.log(first)
    updateCarouselImages({
      variables: {
        input: {
          images: values.images,
        },
      },
    });
  };

  useEffect(() => {
    if (updateError) toast.error("Could not update carousel images");
    if (updateData) {toast.success("Carousel images updated"); console.log(data)};
  }, [updateData]);

  return (
    <form className="p-5" onSubmit={handleSubmit(updateCarouselImagesHandler)}>
      {data && data.carouselImages && (
        <Controller
          name="images"
          defaultValue={data.carouselImages}
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <ImageUploaderMultiple
              label="Carousel Images"
              id="carousel-images"
              defaultValue={data.carouselImages.filter((img) =>
                img ? true : false
              )}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
      )}
      <LoaderButton
        type="submit"
        label="Save"
        className="bg-green-600 px-2 py-1.5 text-white"
        loading={updateLoading}
        disabled={updateLoading}
      />
    </form>
  );
}

AdminHomePage.getLayout = (page: React.ReactElement) => {
  return (
    <MainLayout>
      <AdminSidebar />
      <div className="lg:ml-64 relative">{page}</div>
    </MainLayout>
  );
};

export default AdminHomePage;
