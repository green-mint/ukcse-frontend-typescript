import React from "react";
import Spinner from "./Spinner";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  loading?: boolean;
};

const LoaderButton = ({
  label,
  onClick,
  loading,
  disabled,
  className,
  ...extras
}: Props) => {
  return (
    <button className={`rounded-md w-fit flex ${className}`} {...extras}>
      {loading ? (
          <Spinner />
      ) : (
        <span className={`${loading ? "invisible" : "visible"}`}>{label}</span>
      )}
    </button>
  );
};

export default LoaderButton;
