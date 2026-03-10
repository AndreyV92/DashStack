import React from "react";
import "./loader.css";

type LoaderProps = {
  size?: number;
  thickness?: number; 
  center?: boolean;
};

export const Loader: React.FC<LoaderProps> = ({
  size = 44,
  thickness = 4,
  center = true,
}) => {
  return (
    <div className={center ? "loader-wrap loader-wrap--center" : "loader-wrap"}>
      <span
        className="loader"
        style={
          {
            width: `${size}px`,
            height: `${size}px`,
            borderWidth:` ${thickness}px`,
          } as React.CSSProperties
        }
        aria-label="Loading"
        role="status"
      />
    </div>
  );
};