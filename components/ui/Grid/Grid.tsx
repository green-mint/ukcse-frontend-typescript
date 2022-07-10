import { Waypoint } from "react-waypoint";

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

  return (
    <div className="relative grid pb-10 grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:max-w-5xl xl:mx-auto">
      {items &&
        items.map((item, index) => (
          <div
            key={index}
            // ref={index === items.length - 1 ? lastBookElementRef : null}
          >
            {renderItem(item, index)}
            {index === items.length - 1 && <Waypoint onEnter={() => !isLoading && onEndReached()}/>}
          </div>
        ))}
      {isLoading &&
        [...Array(4)].map(() => loader)
      } 
    </div>
  );
};

export default Grid;
