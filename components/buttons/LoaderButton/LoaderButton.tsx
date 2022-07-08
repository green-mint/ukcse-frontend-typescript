import React from "react";
import { LoadingSpinner } from "../../loaders";

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
    <button className={`rounded-md w-fit cursor-pointer hover:scale-110 disabled:cursor-not-allowed active:scale-90 transition-transform ease-in-out duration-200 flex ${className}`} disabled={disabled} onClick={onClick} {...extras}>
      {loading ? (
          <LoadingSpinner />
      ) : (
        <span className={`${loading ? "invisible" : "visible"} `}>{label}</span>
      )}
    </button>
  );
};

export default LoaderButton;
