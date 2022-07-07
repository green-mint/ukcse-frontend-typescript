import React, { useCallback, useRef } from "react";

type Props<T> = {
  renderItem: (item: T, index: number) => React.ReactElement | null;
  items: T[] | undefined;
  isLoading?: boolean;
  loader?: React.ReactElement;
  onEndReached?: () => void;
};

const Grid = <T,>({
  renderItem,
  items,
  isLoading,
  loader,
  onEndReached = () => null,
}: Props<T>) => {
  // const observer = useRef<HTMLDivElement | null>(null);

  // const lastBookElementRef = useCallback(
  //   (node: HTMLDivElement) => {
  //     console.log(node);
  //     if (isLoading) return;
  //     if (observer.current) observer.current.disconnect();

  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting) {
  //         onEndReached();
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [isLoading]
  // );

  return (
    <div className="relative grid pb-10 grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:max-w-5xl xl:mx-auto">
      {items &&
        items.map((item, index) => (
          <div
            key={index}
            // ref={index === items.length - 1 ? lastBookElementRef : null}
          >
            {renderItem(item, index)}
          </div>
        ))}
      {isLoading &&
        [...Array(4)].map(() => loader)
      } 
    </div>
  );
};

export default Grid;
