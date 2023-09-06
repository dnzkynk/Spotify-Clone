import React from "react";
import { Range as ReactRange, getTrackBackground } from "react-range";

interface RangeProps {
  values: number[];
  step: number;
  min: number;
  max: number;
  onChange: (values: number[]) => void;
}

const Range: React.FC<RangeProps> = ({ values, step, min, max, onChange }) => {
  return (
    <ReactRange
      values={values}
      step={step}
      min={min}
      max={max}
      onChange={onChange}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          className="w-full h-7 flex group"
          style={{
            ...props.style,
          }}
        >
          <div
            ref={props.ref}
            className="h-1 w-full rounded-md self-center opacity-70 hover:opacity-100 "
            style={{
              background: getTrackBackground({
                values,
                colors: ["white", "#535353"],
                min,
                max,
              }),
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          className={`h-3 w-3 rounded-full bg-white ${
            !isDragged ? "opacity-0" : ""
          }  group-hover:opacity-100 `}
          style={{
            ...props.style,
            boxShadow: "0px 2px 4px 0 rgb(0 0 0 / 50%)",
          }}
        />
      )}
    />
  );
};

export default Range;
